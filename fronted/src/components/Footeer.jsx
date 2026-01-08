import styled, { css } from "styled-components";
import { CONTACTO } from "../constants/urls";
const Footer_Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 80px;
  gap: 10px;

  div ul {
    padding: 0;
    margin: 0;
  }

  div ul li {
    list-style: none;
    margin-bottom: 2px;
    color: #d6d2bd;
    text-align: center;
  }

  div ul li a {
    display: inline-flex;
  }

  div ul li a:hover {
    color: #ff6a00;
    transition: all 0.25s ease;
  }

  div p {
    color: #e4e4e4;
    margin: 4px 0;
  }
  p {
    font-size: 13px;
    margin: 10px 0 5px;
    }
  /* Tablet */
  @media (max-width: 1024px) {
    margin: 20px 40px;
  }

  /* Móvil */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 20px 20px;
  }

  /* Móvil pequeño */
  @media (max-width: 480px) {
    margin: 15px 10px;
    gap: 15px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

function Footer(){

    return (
            <>
                    <footer>
                    
                    <Footer_Info>
                        <div>
                            <p style={{ fontWeight: 'bold' , color: '#d6d2bd'}}>Eliú MR</p>
                            <p style={{ fontStyle: 'italic' , color: '#d6d2bd'}}> En proceso constante de mejora. </p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href={CONTACTO}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 13.5 1.5 6h21L12 13.5zm0 2.25L1.5 7.5V18h21V7.5L12 15.75z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/EliuMR" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 
                                                10.96.58.1.79-.25.79-.56 
                                                0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 
                                                1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.73 
                                                0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.06 
                                                0 0 .98-.31 3.2 1.19A11.1 11.1 0 0 1 12 6.8c.99.01 1.99.13 2.93.38 
                                                2.22-1.51 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 
                                                1.2 1.85 1.2 3.12 0 4.47-2.69 5.43-5.25 5.71.42.36.8 1.08.8 2.18 
                                                0 1.57-.02 2.84-.02 3.23 0 .31.2.67.8.56A10.99 10.99 
                                                0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/eliu-moreno-ramirez-b1337730a/" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 
                                                5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                                                19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 
                                                0-.98.78-1.77 1.75-1.77s1.75.79 
                                                1.75 1.77c0 .97-.78 1.76-1.75 1.76zm13.5 
                                                11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                                                0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 
                                                1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Footer_Info>
                    <hr/>
                    <p style={{color: '#ff611d'}}>&copy; 2025 Eliú Moreno Ramírez. Todos los derechos reservados. / All rights reserved.</p>
                </footer>
            
            </>

    )
}

export default Footer;