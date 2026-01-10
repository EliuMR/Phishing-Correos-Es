import { createGlobalStyle } from 'styled-components';
import "@fontsource/raleway/700.css";  // peso normal
import "@fontsource/raleway/900.css";  // para encabezados

export const Global = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }


 #root {
    width: 100%;
    margin: 0; 
    padding: 0;
  }

  body {
    font-family: raleway;
    background-color: #333;
    height: 100%;
    line-height: 1.8;
  }

  main {
    flex: 1;     /* Para que el foot se vaya hasta abajo */
    margin-bottom: 50px         
  }

  p, span, small {
    color: #cfcfcf; /* texto secundario */
  }

    h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h1, h2, h3,h4 {
    color: #ff611d;
    font-family: raleway;
    font-weight: 900;
  }

  footer hr {
    border: none;
    height: 2px;
    background: linear-gradient(
    to right,
    rgba(180, 120, 255, 0),
    #ffffffb0,
    rgba(180, 120, 255, 0)
  );
    margin: 1rem 0;
  }


  footer {
          width: 100%;
          background-color: #2B2B2B;
          height:min-content
          
  }

  footer > p{
      text-align: center;
      color: #a5d1d6;
      margin-bottom: 5px;
      font-size: 12px;
  }
  
  a{
    color: inherit;
    text-decoration: none;
  }

  

/* Contenedor de cada fila de subtableros (3 en horizontal) */
.Fila_Tableros {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}


/* Fila dentro de un subtablero (3 celdas en horizontal) */
.fila-celdas {
  display: flex;
}



.subtablero-container {
    position: relative;   /* El overlay se encierra aquí */
    border: black 2px solid;
}


.Turno, .Ganador{
  margin: 40px auto;
  color: #ff611d;
  background-color: #2B2B2B;
  font-size: 22px;
  font-weight: bold;
  width: max-content;
  padding: 5px 25px;
  border-radius: 5px;
  border: #ff611d 3px solid ;
}

h2{
  color: #ff611d;
}

button{
  color: #ff611d;
  background-color: #333;
}

`;
