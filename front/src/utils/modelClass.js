
export class ModelClass{
    radarModel(filteredData){
        const kindToFrench = {
            cardio: 'cardio',
            energy: 'énergie',
            endurance: 'endurance',
            strength: 'force',
            speed: 'vitesse',
            intensity: 'intensité'
        }
        const radarData = Object.keys(filteredData.kind).map(kindId => ({
            kind: kindToFrench[filteredData.kind[kindId]],
           value: filteredData.data.find(d => d.kind === parseInt(kindId)).value,
           }))
           return radarData
    }

  }

  export class dayModelClass {
    formatUserActivity(filteredData) {
        const formatDay = filteredData.sessions.map((session, index) => ({
            day: index + 1,
            kilogram: session.kilogram,
            calories: session.calories
        }));console.log(filteredData)
        return formatDay;
    }
}

    export let mapDayToDayOfWeek = (day) => {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Correspondance des chiffres aux lettres des jours
      return daysOfWeek[day - 1];
    } 