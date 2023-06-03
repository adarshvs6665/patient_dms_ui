import axios from "axios";

export const createPatient = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/hospital/create-patient",data);
      return response.data;
    } catch (error) {
        // console.log(error.response.data.response);
        // console.log(error.response);
        console.log(error);
      return error.response.data.response;
    }
  };