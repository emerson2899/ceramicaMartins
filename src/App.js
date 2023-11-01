import './App.css';
import React from "react";
import Home from './screens/Home/Home';
import Clients from './screens/clients/Clients';
import AddClients from './screens/clients/AddClients';
import Products from './screens/products/Products';
import AddProducts from './screens/products/AddProducts.js';
import Users from './screens/Users/Users';
import Budgjet from './screens/sales/Budgjet';
import Sales from './screens/sales/Sales.js';
import Order from './screens/sales/Order';
import Suplier from './screens/products/Suplier';
import Sigin from './screens/Sign/Sign';
import AddUSers from './screens/Users/AddUsers';
import{SiWhatsapp} from 'react-icons/si';
import {TbMail} from 'react-icons/tb';
import {BrowserRouter, Route, Link, Routes } from "react-router-dom"
import {  Menu,  Footer, Contact } from './estilo';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar, Nav, Button, Dropdown,Card, Container, NavDropdown } from 'react-bootstrap';
import './App.css'






function App() {
  let isloged = false;
   function logout(){
    alert("Pres onKey")
   }

  

  const onpressBtn = false
  return (
     
    <BrowserRouter className='planFundo'>
       <header id='topo' style={{marginBottom: '5%', margin: "solid, 1px, #000000"}} > 
       <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="/">Início</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='areaDrop' id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title='Produtos e Fornecedores'>
              <NavDropdown.Item><Link to='./screens/products/Products.js' style={{textDecoration:'none', color:"#000"}}>Produtos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='./screens/products/AddProducts.js' style={{textDecoration:'none', color:"#000"}}>Cadastrar Produtos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'./screens/products/Suplier.js'}>Fornecedores</Link></NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link className='link'></Nav.Link>
            <NavDropdown title="Venda Fácil" id="basic-nav-dropdown">
              <NavDropdown.Item className='link'><Link to='./screens/sales/Sales.js'>Realizar Venda</Link> </NavDropdown.Item>
              <NavDropdown.Item><Link to='./screens/sales/Budgjet.js'>Fazer Orçamento </Link>          
              </NavDropdown.Item>
              <NavDropdown.Item><Link to='./screens/sales/Order.js'> Emitir novo Pedido</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
       
    </header>
    <Routes>      
      <Route index element={<Home/>} />
      <Route path="/screens/products/Products.js" element={<Products/>} />
      <Route path="/screens/products/AddProducts.js" element={<AddProducts/>} />
      <Route path="/screens/users/Users" element={<Users/>} />
      <Route path="/screens/Users/AddUsers" element={<AddUSers/>} />    
      <Route path="/screens/clients/Clients" element={<Clients/>} /> 
      <Route path="/screens/clients/AddClients" element={<AddClients/>} />
      <Route path='screens/sales/Budgjet.js' element={<Budgjet/>} />      
      <Route path="screens/sales/Sales.js" element={<Sales/>} />
      <Route path="screens/sales/Order.js" element={<Order/>} />
      <Route path='screens/products/Suplier.js' element={<Suplier/>} />
      </Routes>
    

  

    <Footer>
      <h2>Contato</h2>
      
      
       <SiWhatsapp/> <a href=" http://api.whatsapp.com/send?1=pt_BR&phone=5519998398045"><Contact> (19) 99839-8045  </Contact></a> <br/>
       <TbMail/> <a href="mailto:contato@ceramicamartinsdecoracoes.com.br?subject=Duvidas"><Contact>contato@ceramicamartinsdecoracoes.com.br</Contact></a>
       <Contact><h5>Desenvolvido por M M Design & Marketing Digital &copy; 2022</h5></Contact>
       
       
       </Footer>

   


    </BrowserRouter>    
    
  );
}

export default App;
