import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../Api/getData';

function Graph () {
  const [userInfos, setUserInfos] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetchUserData ();
      setUserInfos (response.userInfos);
    }
    getUserInfo ();
  },[]);

  return (
    <div>
        <div>
          <p>Ton prénom est : {userInfos.firstName ? userInfos.firstName : ''} </p>
          <p>Ton nom de famille est : {userInfos.lastName? userInfos.lastName : ''}</p>

        </div>
    </div>
  );
}

export default Graph;