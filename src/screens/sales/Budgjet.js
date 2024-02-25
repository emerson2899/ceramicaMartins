import {React, useEffect, useState} from 'react';
import { Form, Col, Row, Table } from 'react-bootstrap';
import * as Yup from  'yup';
import { Formik } from 'formik';

function Budgjet(){
    const [produto, setProduto] = useState('');// selecionar produto
    const [listProdutos, setListProdutos] = useState() //lista de produtos
    const [data, setData] =useState([]);
    const [cliente, setCliente] = useState("Consuidor Geral");
    const [observacao, setObservacao] = useState("");


    function addProducts(){

    }
    function removeProducts(){

    }
    function MapPruducts(){
        return(
            <>
            <Table>
                
            </Table>
            </>
        )
    }

    return(
        <div>
        <h1>Registrar novo orçamento</h1>
        <hr/>
        <Form
        style={{marginBottom: '2rem', marginTop: '5rem', marginLeft: '5rem', marginRight:'5rem'}}
        >
            <Row className='mb-4'>
                <Form.Group as={Col}>
                    <Form.Label>

                    </Form.Label>


                </Form.Group>
            </Row>

        </Form>
        <br/>

        </div>
    )

}
export default Budgjet