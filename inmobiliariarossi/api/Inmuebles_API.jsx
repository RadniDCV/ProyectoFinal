import API from "./Rule_API";

export const list = async () => {
  let url = "/api/inmuebles";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
export const enviarConsulta = async (consulta) => {
  let url = "/api/inmuebles/consulta/post";
  API.post(url, consulta)
    .then((respuesta) => {
      return respuesta.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
