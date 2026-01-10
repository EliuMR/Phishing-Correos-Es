import { Link, useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { HOME_WEB, VER_DETALLE } from "../constants/urls";


const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ scrolled,  }) =>(
    scrolled ? "rgba(133, 133, 133, 0.507)" : "none")}; 
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  border-radius: 15px;

  h3{
    padding: 0px 20px ;
  }

  @media (max-width: 900px) {
    margin: 5px auto;
  }

  @media (max-width: 768px) {
    margin: 5px auto;
  }
  
`;

const Nav = styled.nav`
  /* padding: 8px 15px; */
  padding: 8px 15px;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 50px;
    right: 0px;
    width: 250px;
    backdrop-filter: blur(2px);
    background: rgba(133, 133, 133, 0.507);
    display: ${({ open }) => (open ? "block" : "none")};
  }

  a {
    display: block;
    padding: 3px 12px;
  }

  
`;

const NavUl = styled.ul`
  display: flex;
  gap: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Navli = styled.li`
    color: #F0F0F0;
    /* padding: 10px; */
    list-style: none;
    position: relative; /* contexto para ::before y ::after */
    display: inline-block; /* asegura que el li tenga ancho ajustable al contenido */
    margin-right: 5px;
    font-size: 18px;
    a.active {
      color: #2B2B2B;
      background-color: #EDEDED;
      border-radius: 20px; 
      transition:  all 0.3s ease; 
      margin: 0;
    }
    &:hover{
        color: #ff611d;
        background-color: #FFFFFF;
        border-radius: 20px;
        transition: all 0.3s ease; 
    }
     @media (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
   
`;

const Burger = styled.div`
  display: none;
  width: 30px;
  height: 22px;
  flex-direction: column;
  justify-content: space-between;
  margin: 14px 0px;
  margin-right: 10px;
  cursor: pointer;
  span {
    height: 4px;
    background: #ff611d;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
function Navegacion() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15); // cuando baja 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (location.pathname === "/info") setActive("info");
  }, [location.pathname]);

  const goHome = () => {
    setActive("home");
    window.location.href = HOME_WEB;
  };
  const goDet = () => {
    setActive("home");
    window.location.href = VER_DETALLE;
  };
  return (
    <Header scrolled={scrolled ? "true" : undefined}>
      <h3>Email Phishing Detector</h3>

      <Burger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Burger>

      <Nav open={open}> 
        <NavUl>
          <Navli>
            <NavLink  to="/" onClick={() => {setOpen(false); goHome() }}>Inicio</NavLink >
          </Navli>

          <Navli>
            <NavLink  to="/" onClick={() => {setOpen(false); goDet() }}>Inicio</NavLink >
          </Navli>
        </NavUl>
      </Nav>
    </Header>
  );
}

export default Navegacion;
