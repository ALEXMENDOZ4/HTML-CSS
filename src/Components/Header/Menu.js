import React from "react";
import { VariablesColors } from "../Header/Header";
import styled from "styled-components";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";

const MenuDiv = styled.menu``;

const DivPrincipal = styled.div`
    font-size: 16px;
    min-height: 40.62em;
    color: #fff;
    background: url("../../../public/images/insterestellar.jpg");
    background-position: center center;
`;

const DivImages = styled.div`
  width: ${VariablesColors.width}%;
  margin: auto;
  color: white;
`;

const H3 = styled.h3``;

const P = styled.p``;

const Button = styled.button`
`;

export const Menu = () => {
  return (
    <>
      <MenuDiv>
        <DivPrincipal>
          <DivImages>
            <H3>Interestellar</H3>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ipsam id suscipit ratione saepe eaque dicta eum rem voluptates
              excepturi.
            </P>
            <Button>
              <AiFillPlayCircle/>Reproducir
            </Button>
            <Button><AiFillInfoCircle /> Mas informacion</Button>
          </DivImages>
        </DivPrincipal>
      </MenuDiv>
    </>
  );
};
