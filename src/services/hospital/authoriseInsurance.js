import axios from "axios";

export const authorizeInsuranceCompany = async (data) => {
    try {
      const response = await axios.put("http://localhost:5000/hospital/authorize-insurance-company",data);
      return response.data;
    } catch (error) {
        // console.log(error.response.data.response);
        // console.log(error.response);
        console.log(error);
      return error.response.data.response;
    }
  };