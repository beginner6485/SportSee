import React, { useEffect, useState } from 'react';
import {fetchUserData} from '../Api/getData.js';
import '../styles/mock_styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

function StatisticsUser () {

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
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : userData ? (
        <div className="user_stats">
          {userData.keyData ? (
            <>
              <div className="user_Font">
                <div className="Font flam">
                  <div className="Font_Icon"><FontAwesomeIcon icon={faFire} className="iconFlam" /></div>
                </div>
                <div className="user_space">
                  <div className="user calories">{userData.keyData.calorieCount} kCal</div>
                  <span className="unity">Calories</span>
                </div>
              </div>
              <div className="user_Font">
                <div className="Font chick">
                  <div className="Font_Icon"><FontAwesomeIcon icon={faDrumstickBite} className="iconChick" /></div>
                </div>
                <div className="user_space">
                  <div className="user calories">{userData.keyData.proteinCount} g</div>
                  <span className="unity">Proteines</span>
                </div>
              </div>
              <div className="user_Font">
                <div className="Font apple">
                  <div className="Font_Icon"><FontAwesomeIcon icon={faAppleWhole} className="iconApple" /></div>
                </div>
                <div className="user_space">
                  <div className="user calories">{userData.keyData.carbohydrateCount} g</div>
                  <span className="unity">Glucides</span>
                </div>
              </div>
              <div className="user_Font">
                <div className="Font burger">
                  <div className="Font_Icon"><FontAwesomeIcon icon={faBurger} className="iconBurger" /></div>
                </div>
                <div className="user_space">
                  <div className="user calories">{userData.keyData.lipidCount} g</div>
                  <span className="unity">Lipides</span>
                </div>
              </div>
            </>
          ) : (
            <p>Données clés non disponibles</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default StatisticsUser;