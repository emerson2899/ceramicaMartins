import './App.css';
import React from "react";
import Home from './screens/Home/index';
import Clients from './screens/clients/Clients';
import AddClients from './screens/clients/AddClients';
import Products from './screens/products/Products';
import AddProducts from './screens/products/AddProducts';
import Users from './screens/Users/Users';
import Sigin from './screens/Sign/Sign';
import{SiWhatsapp} from 'react-icons/si';
import {TbMail} from 'react-icons/tb';
import {BrowserRouter, Route, Link, Routes } from "react-router-dom"
import {  Container,  Menu,  Footer, Contact } from './estilo';
import {} from 'reactstrap'
import AddUSers from './screens/Users/AddUsers';

import { NavLink, NavMenu, Bars, NavBtn, NavBtnLink, MenuResponsive } from './components/routers/NavBar';




function App() {

  

  const onpressBtn = false
  return (
     
    <BrowserRouter className='planFundo'>
    
    

    <Container>
     <header>
    <Menu className='barNavigation itemBarra'>
      <li><NavLink to="">Inicio</NavLink></li>
      <Bars onpressBtn/>
      <NavMenu>
      <li><NavLink to="/screens/products/Products">Produtos</NavLink></li>
      <li><NavLink to="/screens/products/AddProducts">Adicionar Produtos</NavLink></li>
      <li><NavLink to="/screens/Users/Users">Usuários</NavLink></li>
       <li><NavLink to="/screens/Users/AddUsers">Adicionar Usuários</NavLink></li>
      
     
      <li><NavLink to="/screens/clients/Clients"> Clientes</NavLink></li>
      <li><NavLink to="/screens/Clients/AddClients">Cadastre-se</NavLink></li>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/screens/Sign/Sign">Login</NavBtnLink>
      </NavBtn>

      {onpressBtn == true &&
      <MenuResponsive>
      <li><NavLink to="/screens/products/Products">Produtos</NavLink></li>
      <li><NavLink to="/screens/products/AddProducts">Adicionar Produtos</NavLink></li>
      <li><NavLink to="/screens/Users/Users">Usuários</NavLink></li>
      <li><NavLink to="/screens/Users/AddUsers">Adicionar Usuários</NavLink></li>
      
     
      <li><NavLink to="/screens/clients/Clients"> Clientes</NavLink></li>
      <li><NavLink to="/screens/Clients/AddClients">Cadastre-se</NavLink></li>



      </MenuResponsive>
      }



    </Menu>
   </header>




</Container>
  

    <Footer>
      <h2>Contato</h2>
      
      
       <SiWhatsapp/> <a href=" http://api.whatsapp.com/send?1=pt_BR&phone=5519998398045"><Contact> (19) 99839-8045  </Contact></a> <br/>
       <TbMail/> <a href="mailto:contato@ceramicamartinsdecoracoes.com.br?subject=Duvidas"><Contact>contato@ceramicamartinsdecoracoes.com.br</Contact></a>
       <Contact><h5>Desenvolvido por M M Design & Marketing Digital &copy; 2020</h5></Contact>
       
       
       </Footer>

    <Routes>      
      <Route index element={<Home/>} />
      <Route path="/screens/products/Products" element={<Products/>} />
      <Route path="/screens/products/AddProducts" element={<AddProducts/>} />
      <Route path="/screens/users/Users" element={<Users/>} />
      <Route path="/screens/Users/AddUsers" element={<AddUSers/>} />    
      <Route path="/screens/clients/Clients" element={<Clients/>} /> 
      <Route path="/screens/clients/AddClients" element={<AddClients/>} />
      </Routes>


    </BrowserRouter>    
    
  );
}

export default App;
