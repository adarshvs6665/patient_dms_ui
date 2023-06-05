import axios from "axios";

export const updatePatient = async (data) => {
    try {
      const response = await axios.put("http://localhost:5000/hospital/update-patient-report",data);
      return response.data;
    } catch (error) {
        // console.log(error.response.data.response);
        // console.log(error.response);
        console.log(error);
      return error.response.data.response;
    }
  };