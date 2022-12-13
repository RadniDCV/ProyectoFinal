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
export const consultarUsuario = async () => {
  let url = "api/user/list";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.dat.error || "Error procesado la solicitud";
    });
};
export const registrar = async (usuarios) => {
  const url = "api/user/register";
  return await API.post(url, usuarios)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
