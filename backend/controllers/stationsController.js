import stations from "../dataset/stations.js"


//sending the data to frontend

export const sendStations = async (req,res) =>{
    
    // console.log()
    try{
        res.json(stations);
    }catch(err){
        console.log("Error : ",err)
    }
}