import '../../App.css';
import {React, useEffect, useState }from "react";
import { Conteudo, CadProduct } from '../../estilo';
import {Button, Col, Form,  Row } from 'react-bootstrap';
import * as Yup from 'yup';
import {  Formik } from 'formik';



function AddProducts () {

    const [nameProduct, setNomeProduct] = useState('');
    const [price, setPrice] = useState (); //preço final
    const [nameSuplies, setNameSuplies] = useState('');
    const [valueCust, setValueCust] = useState(''); // valor de custo
    const [lucroBruto, setLucroBruto] = useState(); //* Lucro bruto no produto
    const [percentProfit, setPercentProfit] = useState(); //percentual de lucro
    const [profit, setProfit] = useState(); //lucro em R$

    useEffect(()=>{

    },[profit]);

    useEffect(()=>{

    },[price]);

    useEffect(()=>{
        setPrice(parseFloat(valueCust)+parseFloat(percentProfit)/100)

    },[percentProfit])

    useEffect(()=>{
        setLucroBruto(price - valueCust)

    },[price])




   

   


    return(
        <>
            <h1>Adicionar Produtos</h1>
            <h4>{nameProduct}</h4>
            
           
            <Form style={{marginBottom:'2rem', marginTop:'5rem', marginLeft:'5rem', marginRight:'5rem'}}>
                <Row className='mb-4'>
            <Form.Group as={Col}>
                <Form.Label>
                    Nome do Produto:
                </Form.Label> <Form.Control name='name' type= 'text' value={nameProduct} onChange={(e)=>setNomeProduct(e.target.value)}  />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label> Fornecedor </Form.Label>
                    <Form.Control type='text' value={nameSuplies} onChange={(e) =>setNameSuplies(e.target.value)} />
                
                </Form.Group>
                </Row>
                
                <Row className='mb-4'>  
                <Form.Group as={Col}>            
                <Form.Label> Preço de custo: </Form.Label> <Form.Control type='number' />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>% de lucro</Form.Label>
                    <Form.Control type='number' value={percentProfit} onChange={(e)=>setPercentProfit(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>$ de Lucro</Form.Label>
                    <Form.Control type='Number' value={profit} onChange={(e)=>setProfit(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>            
                <Form.Label> Preço de Venda: </Form.Label>
                 <Form.Control type='number' value={price} onChange={(e) =>setPrice(e.target.value)} />
                </Form.Group>
                </Row>
                <Row className=''>
                <Form.Group as={Col}>               
                <Form.Label>Estoque Mínimo</Form.Label>
                     <Form.Control type='number' />
                     </Form.Group>

                     <Form.Group as={Col}>               
                <Form.Label>Estoque Máximo</Form.Label>
                     <Form.Control type='number' />
                     </Form.Group>
                     </Row>
                     <br/>

                     <Row className='mb-5'>
                        <Form.Group as={Col}>
                            <Form.Label>Código CEST</Form.Label>
                            <Form.Control type='number' />
                            </Form.Group>
                            <Form.Group as={Col}>
                            <Form.Label>Código NCM</Form.Label>
                            <Form.Control type='number' />
                            </Form.Group>
                            <Form.Group as={Col}>
                            <Form.Label>Código do Fornecedor</Form.Label>
                            <Form.Control />
                        </Form.Group>

                     </Row>


                     <Row className='mb-4'> 
                     <Form.Group>                
                <Form.Label>Observações</Form.Label>
                     <Form.Control type='text' />
                
            </Form.Group>
            </Row>
            <Button variant='success' style={{marginRight:'2rem'}}>Salvar Novo Produto</Button>
            <Button variant='danger' >Cancelar</Button>
            </Form>
            
        </>
    )
} 
   export default AddProducts