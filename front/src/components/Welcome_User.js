import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../Api/getData.js';
import '../styles/mock_styles.css';
import { useParams } from 'react-router-dom';

function WelcomeUser() {
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

  return (
    <div className="accl_app">
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : userData ? (
        <div>
          <h1>Bonjour <span className="name_style">{userData.userInfos.firstName}</span></h1>
          <p>Félicitations, vous avez explosé vos objectifs hier ! </p>
        </div>
      ) : (
        <p>Aucun utilisateur trouvé avec l'ID {id}</p>
      )}
    </div>
  );
  
}

export default WelcomeUser;
