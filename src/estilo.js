import styled from "styled-components";

export const Container = styled.div `
display: flex;
height: 100vh;
background-color: #000000;
`;

export const Menu = styled.nav`
display: flex;
flex-flow: row wrap;
position: fixed;
background-color: rgba(255, 140, 0, 0.6);
justify-content: center;
align-itens: center;
width: 100%;
height: 10vh;
`;

export const PageBody = styled.div`
display: flex;
background-color: #0098d;
background-image: url('/assets/bg.png');
flex: 1;
`;

export const Li  = styled.li`
margin-top: 5px;
margin-botton: 5px;
`;

export const Conteudo = styled.div`
margin-top: -80vh;
border: 1px solid #000000;
`;

export const Titulo = styled.h1`
text-align: center;
margin-top: 1vh;
align-itens: center;
align-self: center;
`;

export const Footer = styled.footer`
background: rgba(255, 140, 0, 0.6);
text-align: center;
color: #FFFFFF;
`;

export const Formulario = styled.form`
align-itens: center;
align-self: center;
backfround-color: #000000;
`;

export const ItemForm = styled.article`
display: flex;
float:left;
margin: 3%;
width: 25vh;
height: 15vh;
`;

export const ItemDescription = styled.label`
font-size: 2vh;
color: #F3A303;
width: 2vh;
heigth: 6vh;
margin-left: auto;
margin-right: auto;
`;

export const Contact = styled.span`
text-decoration: none;
color: #FFFFFF;

`;

export const CadProduct = styled.div`
display: flex;
flex: column;
align-itens: center;
background-color: #FFF;
color: #000;`;

export const Information = styled.div`
color: #FFF;
display: flex;
margin: 100px;
`;

export const CampProduct = styled.div`
background: #FFF;
display: flex;
align-itens: center;
align-self: center;
`;


