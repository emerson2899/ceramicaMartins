import '../../App.css';
import {React, useState }from "react";
import { Conteudo, CadProduct } from '../../estilo';


function AddProducts () {

    const [nameProduct, stNomeProduct] = useState('');
    const [price, setPrice] = useState ('');

   


    return(
        <Conteudo>
            <h1>Adicionar Produtos</h1>
            <CadProduct>
                <label>
                    Nome do Produto:
                </label> <input type= 'text'  />
                <label>
                    Observações: <input type='text' />
                </label>
                <label>
                    Preço: <input text='number' />
                </label>
                <label>
                    Estoque <input text='number' />
                </label>
            </CadProduct>
        </Conteudo>
    )
} 
   export default AddProducts