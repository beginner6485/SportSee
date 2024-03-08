import '../styles/mock_styles.css'
import React, { useEffect, useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { fetchUserDataPerf } from '../Api/getData.js';
import { useParams } from 'react-router-dom';
import ModelClass from '../utils/modelClass.js';

function PerformanceUser (){
    
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserDataPerf(id);
        const modelClass = new ModelClass();
        const dataFinal = modelClass.radarModel(data)
        setUserData(dataFinal);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : userData ? (
        <div className="user_activity">
            <div className="accl_performance">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart
                  outerRadius={90}
                  width={280}
                  height={300}
                  data={userData}
                  style={{ background: '#323030', color: 'red', borderRadius:'10px' }}
                >
                  <PolarGrid radialLines={false} />
                  <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 11 }} />
                  
                  <Radar name="performance" dataKey="value" stroke="transparent" fill="red" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
        </div>
      ) : console.log("erreur perf")}
    </div>
  );
  
}

export default PerformanceUser