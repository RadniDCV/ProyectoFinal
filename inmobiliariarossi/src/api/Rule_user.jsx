import API from "../api/Rule_API";


export const login = async (usuarios) => {
  const url = "api/user/login";
  return await API.post(url, usuarios)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
