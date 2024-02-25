import { React, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { setLocale } from "yup";

function Suplier(){
    const [nameFantazi, setNameFantazi] = useState();
    const [nome, setNome] = useState();
    const [cnpj, setCnpj] = useState();
    const [cpf, setCpf] = useState();
    const [inscriState, setInscriState] = useState();
    const [inscriCity, setIncriCity] = useState();
    const [cep, setCep] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [district, setDistrict] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [cellphone, setCellphone] = useState();

 function cancelar(){
   return(
    window.location.reload()
   )
 };
 function Salvar(){
    return(
        alert(nameFantazi)
    )
 }

    return(
        <>
        <h1>Cadastro de Fornecedores</h1>
        <br/>
        <Form style={{marginLeft:'3rem', marginRight:'3rem'}}>
            <Row className="mb-4">
                <Form.Group as={Col}>
                    <Form.Label>Nome Fantazia</Form.Label>
                    <Form.Control type="text" value={nameFantazi} onChange={(e)=> setNameFantazi(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Razao Social</Form.Label>
                    <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col}>
                    <Form.Label>Inscrição Estadual</Form.Label>
                    <Form.Control type="number" value={inscriState} onChange={(e)=> setInscriState(e.target.value)} />                    
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Indcrição Municipal</Form.Label>
                    <Form.Control type="number" value={inscriCity} onChange={(e)=>setIncriCity(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control type="text" value={cnpj} onChange={(e)=>setCnpj(e.target.value)} />
                    
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>CPF</Form.Label>
                    <Form.Control type="number" value={cpf} onChange={(e)=>setCpf(e.target.value)} />

                </Form.Group>
            </Row>
            <br/>
            <h2 style={{textAlign:'center'}}>Endereço</h2>
            <Row className="mb-4">
                <Form.Group as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" value={state} onChange={(e)=>setState(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" value={district} onChange={(e)=>setDistrict(e.target.value)} />
                </Form.Group>
            </Row>
            <Row>
                
            </Row>
            <Button onClick={Salvar} variant="success">Salvar</Button>
            <Button onClick={cancelar} style={{marginLeft:'2re,'}} variant="danger">
                Cancelar
            </Button>
                       
        </Form>
       </>
    )
}
export default Suplier