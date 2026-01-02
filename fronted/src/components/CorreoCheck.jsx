import postData from "../conexion/post"
import { useState } from "react";
function CorreoCheck(){
    const [correo, setCorreo] = useState("");

    function Check(text){
        postData(text)
        .then((response) =>{
            const resultado = response.resultado;
            const probabilidad = response.probabilidad;
            const palabras_influyentes = response. palabras_influyentes;
            console.log(resultado);
            console.log(probabilidad);
        })
        .catch((error)=>{console.log(error);
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        Check({
        correo
        });
    };



    return(  
        <>
            <form onSubmit={handleSubmit}>
                <textarea value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Pega aquí el correo"
                ></textarea>
                <button type="submit">Analizar</button>
            </form>
        </>
    )
};

export default CorreoCheck;