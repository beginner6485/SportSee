import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data";
import Error from "../components/Error";

const mock = true; 

export const fetchUserData = async (id) => {
    if (!mock) { 
        
        try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        return(response.data.data)

      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return (null)
      }}

    else {
      const user = USER_MAIN_DATA.find(user => user.id === parseInt(id));
      if (user) {
          return user;
      } else {
          throw new Error(`Aucun utilisateur trouvé avec l'ID ${id}`);
      }
    };

}

export const fetchUserDataGraph = async (userId) => {
  if (!mock) { 
        
    try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return(response.data.data)
    
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return (null)
  }}

else {
  const userActivity = USER_ACTIVITY.find(user => user.userId === parseInt(userId));
      if (userActivity) {
          return userActivity;
      } else {
          throw new Error(`Aucun utilisateur trouvé avec l'ID ${userId}`);
      }
};

}

export const fetchUserDataPerf = async (userId) => {
  if (!mock) { 
        
    try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return(response.data.data)
    
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return (null)
  }}

else {
  const userPerformance = USER_PERFORMANCE.find(user => user.userId === parseInt(userId));
    if (userPerformance) {
      return userPerformance;
    } else {
      throw new Error(`Aucun utilisateur trouvé avec l'ID ${userId}`);
    }
    };

}

export const fetchUserDataTime = async (userId) => {
  if (!mock) { 
        
    try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return(response.data.data)
    
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return (null)
  }}

else {
  
  const userSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId));
  if (userSessions) {
    return userSessions;
  } else {
    throw new Error(`Aucun utilisateur trouvé avec l'ID ${userId}`);
  }
};

}