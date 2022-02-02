import axios from "axios"

export default class JobAdvertisementService{
  
    getAllinActives(){
        return axios.get("http://localhost:8080/job-advertisement/getallinactives")
    }
}
