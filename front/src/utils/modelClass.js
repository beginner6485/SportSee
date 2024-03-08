
export default class ModelClass{
    radarModel(filteredData){
        const radarData = Object.keys(filteredData.kind).map(kindId => ({
            kind: filteredData.kind[kindId],
           value: filteredData.data.find(d => d.kind === parseInt(kindId)).value,
           }))
           return radarData
    }

  }