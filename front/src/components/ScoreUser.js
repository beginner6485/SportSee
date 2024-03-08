import '../styles/mock_styles.css'
import {Pie, PieChart, ResponsiveContainer} from 'recharts';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {fetchUserData} from '../Api/getData.js';

  function ScoreUser() {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchUserData(id);
          setUserData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);
    
  let score
  
  if(userData) {
    score = userData.todayScore !== undefined ? userData.todayScore : userData.score;
   }
   
    const percentageScore = score * 100;
    const pieChartData = [
      { name: 'Reste', value: 100 - percentageScore, fill:'#FBFBFB' },
      { name: 'Score', value: percentageScore },
    ];

    return (
      <div>
        {loading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p>Erreur: {error}</p>
        ) : userData ? (
          <div className="user_activity">
            {userData ? (
              <>
                <div className="score_txt">
                <div className='score_title'>Score</div>
                  <div className='score_space'>
                    <span className="percent">{percentageScore}%</span>
                    <span className="percent_txt">de votre objectif</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart width={300} height={300}>
                    <Pie data={pieChartData} 
                      nameKey="" cx="50%" cy="50%" 
                      innerRadius={60} outerRadius={80} 
                      fill="red"
                      label={false}
                      startAngle={180}
                      endAngle={540}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  export default ScoreUser