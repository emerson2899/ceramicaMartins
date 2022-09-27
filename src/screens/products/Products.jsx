import '../../App.css';
import React   from 'react';
import { Conteudo, Information, CampProduct, CadProduct } from '../../estilo';

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




    return(<Conteudo>
        <h1>Produtos a serem vizualizados</h1>
    <Information>Total de produtos a serem vizualizados: {product.length}</Information>

    <CadProduct>
        <table>
            <tr>
                <th>Código</th>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Estoque</th>
            </tr>
            {product.map(produto =>(
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.modelo}</td>
                <td>{produto.price}</td>
                <td>{produto.estoque}</td>

            </tr>

))}
        </table>



    </CadProduct>



    </Conteudo>)
}
 export default Products