import '../styles/mock_styles.css';
import { ReferenceArea, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import { fetchUserDataTime } from '../Api/getData';

function TimeSessionsUser() {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserDataTime(id);
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  let mapDayToDayOfWeek;
  if (userData) {
    mapDayToDayOfWeek = (day) => {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Correspondance des chiffres aux lettres des jours
      return daysOfWeek[day - 1];
    } 
    console.log(userData)
    return (
      <div className="users_sessions">
        {loading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p>Erreur: {error}</p>
        ) : userData ? (
          <div className="accl_time_session">
            <div className="time_session_title">
            <ResponsiveContainer width="90%" height={280}>
                <LineChart width={280} height={300}
                  data={userData.sessions}
                  margin={{ top: 50, right: 5, left: 5, bottom: -10 }}>
                  <text x="150" y="20"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                    fontSize="16"
                    fill="white">Durée moyenne des sessions</text>

                  <XAxis dataKey="day"
                    label="" stroke='white'
                    tickFormatter={mapDayToDayOfWeek}
                  />
                  <YAxis hide={true} />
                  <Tooltip labelFormatter={(sessionLength) => `${sessionLength} min`} 
                    label="Durée de la session"
                    labelStyle={{ color: 'black' }}
                    contentStyle={{ fontSize: '12px' }}
                    dataKey="sessionLength" />
                  <ReferenceArea x1={1} x2={7} fill="#FF0000" fillOpacity={1.5} />
                  <ReferenceArea x1={5} x2={7} fill="darkred" />
                  <Line type="bumpX" dataKey="sessionLength" stroke="white" />
                  <Area type="monotone" dataKey="sessionLength" stroke="#8884d8" fill="#8884d8"/>
                </LineChart>
        </ResponsiveContainer>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TimeSessionsUser;