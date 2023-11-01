import '../../App.css';
import React   from 'react';
import { Conteudo, Information, CampProduct, CadProduct } from '../../estilo';
import { Table } from 'react-bootstrap';

function Products (){

    const product=[{
        id: 1,
        modelo: "comum 2",
        price: 25.90,
        estoque: 5        
    },
    {
        id: 2,
        modelo: "comum 5",
        price: 25.90,
        estoque: 5        
    },
    {
        id: 3,
        modelo: "comum 6",
        price: 30.50,
        estoque: 20        
    },
    {
        id: 4,
        modelo: "comum 10",
        price: 50.89,
        estoque: 5        
    }]
    

   // const product=[]




    return(<>
        <h1>Produtos a serem vizualizados</h1>
    <Information>Total de produtos a serem vizualizados: {product.length}</Information>

    <CadProduct>
        <Table striped bordered hover style={{marginLeft:'10%', marginRight:'10%'}} >
            <thead>
                <th>Código</th>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Estoque</th>
            </thead>
            <tbody>
            {product.map(produto =>(
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.modelo}</td> 
                <td>{produto.price}</td>
                <td>{produto.estoque}</td>

            </tr>
            

))}
            </tbody>
        </Table>



    </CadProduct>



    </>)
}
 export default Products