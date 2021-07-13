import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const VariablesColors = {
  rojo: "#E50914",
  fondo: "#141414",
  width: "90"
};

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Source Sans Pro", sans-serif;
        background-color: ${VariablesColors.fondo};
    }

`;

const Nav = styled.nav``;

const Logo = styled.span`
  font-size: 30px;
  text-align: center;
  color: aqua;
`;

const A = styled.a``;

export const Padre = styled.div`
  width: ${VariablesColors.width}%;
  margin: auto;
`;

const HeaderMenu = styled.header`

  padding: 30px 0px;

  ${Padre} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${Logo} {
    font-weight: normal;
    color: ${VariablesColors.rojo};
  }

  ${Nav} {

    ${A} {
      color: #aaa;
      text-decoration: none;
      margin-right: 20px;
      font-size: 1em;

      &:hover {
        color: #fff;
      }
      
      &.activo {
        color: #fff;
      }
    }
  }
`;

export default GlobalStyle;

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderMenu>
        <Padre>
          <Logo>MENSAJE</Logo>
          <Nav>
            <A href="#" className="activo">Inicio</A>
            <A href="#">Programas</A>
            <A href="#">Peliculas</A>
            <A href="#">Mas recientes</A>
            <A href="#">Mi lista</A>
          </Nav>
        </Padre>
      </HeaderMenu>
    </>
  );
};
