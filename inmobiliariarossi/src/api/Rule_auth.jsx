
import API from "../api/Rule_API"


export const registrarUsuario = async (usuario) => {
    let url= "api/user/register"
    return await API.post(url,users)
    .then((response) =>{
        return response.data
    })
    .catch((error) => {
        console.log(error)
        throw error.response.dat.error || "Error procesado la solicitud"
    }
    )
}
export const consultarUsuario = async () => {
    let url= "api/user/list"
    return await API.get(url)
    .then((response) =>{
        return response.data
    })
    .catch((error) => {
        console.log(error)
        throw error.response.dat.error || "Error procesado la solicitud"
    }
    )
}

export const isAuth = () => {
    if(typeof window !== "undefined"){
        const tokenChecked = localstore.getItem("token")
        if(tokenChecked){
            return true

        }else
            return false
    }
}
