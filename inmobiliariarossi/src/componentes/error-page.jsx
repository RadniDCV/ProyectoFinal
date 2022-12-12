import { useRouteError } from "react-router-dom";

 function ErrorPage(){
    const error = useRouteError();
    console.error(error)

    return(
        <div id="error-page">
         <h1>Opps</h1>
        <p>
            Perdon ocurrio un error
        </p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    )
}

export default ErrorPage;