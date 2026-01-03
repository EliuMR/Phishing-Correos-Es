import Navegacion from "./Navegacion";
import { Global } from './GlobalStyles';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Footer from "./Footeer";
const DivPrincipal = styled.div`
  background-color: #2B2B2B;
  margin: 40px auto;
  padding: 40px 70px;
  border-radius: 20px;
  width: 100%;
  max-width: 1100px;   /* límite en pantallas grandes */
  display: block;

  @media (max-width: 1024px) {
    padding: 35px 50px;
  }

  @media (max-width: 768px) {
    padding: 25px 30px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 18px;
    border-radius: 12px;
  }
`;


const LayoutDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;

  padding: 0 16px;  /* margen interno para móviles */
`;

function Layout(){

    return (
        <LayoutDiv>
            <main>  
                <Global/>
                <Navegacion/>
                <DivPrincipal>
                        <Outlet />
                </DivPrincipal>
            </main>
            <Footer/>
        </LayoutDiv>

        
    )
}

export default Layout