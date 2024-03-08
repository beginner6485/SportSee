import '../styles/mock_styles.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchUserDataGraph } from '../Api/getData';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function GraphUser() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const { id } = useParams();

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchUserDataGraph(id);
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);


    return(
      <div className="accl_app">
        {loading ? (
      <p>Chargement...</p>
    ) : error ? (
      <p>Erreur: {error}</p>
    ) : userData ? (
      
      <div className='accl_graph'>
        <span className='graph_title'>Activité quotidienne</span>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={300}
            height={300}
            data={userData.sessions} 
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="" orientation="right" />
            <Tooltip
              labelFormatter={() => ``}
              itemStyle={{ backgroundColor: 'red', color: 'white' }}
              formatter={(value, name) => [`${value} ${name === 'kilogram' ? 'kg' : 'kcal'}`, '']}
            />
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              iconSize={10}
              wrapperStyle={{ paddingBottom: '15px' }}
              formatter={(value) => `${value} ${value === 'kilogram' ? '(kg)' : '(kcal)'}`}
              className="custom-legend"
            />

            <Bar dataKey="kilogram" fill="#000000" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar dataKey="calories" fill="#ff0000" barSize={10} radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    ) : null /* Ajoutez cette ligne si vous n'avez pas de logique à exécuter lorsque userData est nul */}
  </div>
)
}

export default GraphUser