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
export const listfiltro = async () => {
  let url = "/api/inmuebles/filtro";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
export const consultaNumInmuebles = async () => {
  let url = "/api/inmuebles/activos";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
export const consultaInmuebles = async () => {
  let url = "/api/inmuebles/get/todos";
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
export const Inmuebleid = async () => {
  let url = "/api/inmuebles/:id";
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
export const publicarInmueble = async (inmueble) => {
  let url = "/api/inmuebles/post";
  API.post(url, inmueble)
    .then((respuesta) => {
      return respuesta.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
