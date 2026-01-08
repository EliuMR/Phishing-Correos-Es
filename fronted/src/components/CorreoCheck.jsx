import postData from "../conexion/post"
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import PageTransition from "./PageTransition";
const FormCheck = styled.form`
    margin: 0 auto;
    width: 100%;

    .TextareaWrapper{
        width: 100%;
        height: 300px;
        border-radius: 15px;
        border: 3px solid #ff611d;
        overflow: hidden; 
        background-color: white;
    };
    textarea{
        display: block;
        width: 100%;
        height: 300px;
        padding: 20px;
        border: none;
        resize: none;
        scrollbar-color: #f0f0f0 #222;
    }
    textarea:focus {
        outline: none;
    }

    .BotonWrapper{
        text-align: right;
        width: 100%;
        padding: 10px;
    }

    button {
    background-color: #ff611d;
    color: #2B2B2B;
    padding: 10px 5px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px 10px;
    font-weight: 700;
    transition: background-color 0.2s ease, transform 0.2s ease;
    flex: 1 1 50px;
    align-self: flex-end;   /* opcional: lo alinea a la izquierda */
    max-height: 40px;

    &:hover {
      background-color: #ff8c4d;
      transform: translateY(-2px) translateX(2px);
     
    }}
    button:focus {
        outline: none;
    }

`
;
const ResultadoAnalisis = styled.div`
    margin: 40px auto;
    background-color: #2B2B2B;
    width: 100%;
    font-weight: bold;
    padding: 5px 25px;
    border-radius: 5px;
    border: #ff611d 3px solid ;
    ul{
        margin-left: 25px;
        color: #cfcfcf; /* texto secundario */
    }

`;

const IA = styled.p`
      margin: 40px auto;
      color: #ff611d;
      background-color: #2B2B2B;

      font-weight: bold;
      width: max-content;
      padding: 5px 25px;
      border-radius: 5px;
      border: #ff611d 3px solid ;
        .dots::after {
      content: '';
      display: inline-block;
      width: 0.5em;
      text-align: left;
      animation: dots 1s steps(3, end) infinite;
      color: #ff611d;
    }

    @keyframes dots {
      0%, 20% { content: ''; }
      40% { content: '.'; }
      60% { content: '..'; }
      80%, 100% { content: '...'; }
    }
`;

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    padding: 15px;
    @media (max-width: 900px) {
        margin-left: 0;
        max-width: 100%;
    }
`;
function CorreoCheck(){
    const [correo, setCorreo] = useState("");
    const [resultados, setResultado] = useState(null);
    const [esperando, setEsperando] = useState(false);
    // useEffect(() => {
    //             if (resultados) {
    //                 console.log(resultados);
    //             }
    //             }, [resultados]);

    function Check(text){
        console.log('Textt',text);
        postData(text)
        .then((response) =>{
            console.log('API',response);
            const resultado = response.resultado;
            const probabilidad = response.probabilidad;
            const palabras_influyentes = response. palabras_influyentes;
            const analisis = {
              
                        "resultado" :resultado,
                        "probabilidad" : probabilidad,
                        "palabras_influyentes" : palabras_influyentes
                    
                
            };
            setResultado(analisis);
            setEsperando(false);
        })
        .catch((error)=>{console.log(error);
            setEsperando(false);
        })
    };

    const handleSubmit = (e) => {
        setEsperando(true);
        setResultado(null);
        e.preventDefault(); 
        Check({
        correo
        });
    };



    return(  
        <PageTransition>
        <Wrapper>
            <h3>Copie y pegue su correo en el siguiente recuadro y presione analaizar:</h3>
            <p>Puede colocar el remitente, asunto y cuerpo del mensaje o incluso sólo el cuerpo del mismo. No se almacena el correo después del análisis.</p>
            <FormCheck onSubmit={handleSubmit}>
                                <div className="TextareaWrapper">
                    <textarea value={correo}
                        required
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder
="Remitente:  ...
Asunto: ...
Cuerpo de mensaje ...
"
                    ></textarea>
                </div>
                <div className="BotonWrapper">
                    <button type="submit">Analizar</button>
                </div>
                
            </FormCheck>
            { resultados ? 
                <ResultadoAnalisis>
                    <h4>Resultado del Análisis</h4>
                    {resultados.resultado ? //Si no es phishing
                    <div>
                        <p>Este correo parece legítimo con una probabilidad de {(resultados.probabilidad * 100).toFixed(2)}%</p>
                        <p>{resultados.probabilidad}</p>
                        <p>Las palabras más influyentes fueron: </p>
                        <ul>
                            {resultados.palabras_influyentes.map((palabra, index) => {
                                return <li key={index}>{palabra}</li>;
                            })}
                        </ul>
                        <p>Aun así, siempre es buena práctica verificar al remitente si el mensaje solicita acciones importantes.</p>
                    </div>
                    : //Es phishing o fue un correo que no se pudo clasificar correctamente
                    <div>
                        {resultados.probabilidad == 0 ?
                        <div>
                            <p>El texto no contiene suficiente información para clasificar.</p>
                        </div>
                        :
                        <div>
                            
                            <p>Este correo ha sido identificado como PHISHING con una probabilidad de {(resultados.probabilidad * 100).toFixed(2)}%</p>
                            <p>Las palabras más influyentes fueron: </p>
                            <ul>
                                {resultados.palabras_influyentes.map((palabra, index) => {
                                    return <li key={index}>{palabra}</li>;
                                })}
                            </ul>
                            <p>  Recomendación: No haga clic en enlaces, no descargue archivos y verifique la fuente antes de responder.</p>
                        </div>

                    }    
                    </div>
                            
                    
                    }
                </ResultadoAnalisis> 
            : //No hay análisis
                    //Vemos si está esperando respuesta de la API
                <div>
                {
                    esperando ? 
                    <IA>Analizando correo <span className="dots"></span></IA> :
                    <div/>
                }
                </div>
            }
        </Wrapper>
        </PageTransition>
    )
};

export default CorreoCheck;