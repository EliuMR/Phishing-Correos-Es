import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { HOME_WEB, VER_DETALLE } from "../constants/urls";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(201, 201, 201, 0.507); 
  backdrop-filter: blur(6px);
  margin: 10px 20px;
  padding: 10px 16px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3{
    color: #fff
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 20px;
    background: rgba(201, 201, 201, 0.507); 
    border-radius: 20px;
    padding: 10px;
    display: ${({ open }) => (open ? "block" : "none")};
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
  list-style: none;

  a, div {
    padding: 8px 14px;
    border-radius: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.25s;
    display: block;
    color: #fff
  }

  .activo {
    background: #ededed;
  }

  a:hover, div:hover {
    background: #fff;
    color: #ff611d;
  }
`;

const Burger = styled.div`
  display: none;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navegacion() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

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
    <Header>
      <h3>DETECCIÓN PHISHING EN CORREOS</h3>

      <Burger onClick={() => setOpen(!open)}>☰</Burger>

      <Nav open={open}>
        <NavUl>
          <Navli>
            <div
              className={active === "home" ? "activo" : ""}
              onClick={() => {
                goHome();
                setOpen(false);
              }}
            >
              Home
            </div>
          </Navli>

          <Navli>
            <div
              className={active === "info" ? "activo" : ""}
              onClick={() => {
                goDet();
                setOpen(false);
              }}
            >
              Ver Detalles
            </div>
          </Navli>
        </NavUl>
      </Nav>
    </Header>
  );
}

export default Navegacion;
