import "../../App.css"
import {React, useState, useEffect} from "react";
import { Conteudo, Formulario, ItemDescription, ItemForm, CadProduct} from "../../estilo";


function AddClients (){

    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("")
    const [cellPhone, setCellPhone] = useState("")
    const [email, setEmail] = useState("")
    const [cnpj, setCnpj] = useState("")

    return( 
        
        
            <Conteudo>

                <h1>Cadastre-se</h1>
                <CadProduct>
                <Formulario>   
                            
                    <ItemForm>
                    <ItemDescription>Name: <br/> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></ItemDescription>
                    </ItemForm>
                    <ItemForm>
                    <ItemDescription>Telefone: <br/> <input type="tel" value={telephone}  onChange={(e) => setTelephone(e.target.value)} /> </ItemDescription>
                    </ItemForm>
                    <ItemForm>
                    <ItemDescription>Celular: <br/> <input type="tel" value={cellPhone} onchange={(e) => setCellPhone(e.target.value)}/></ItemDescription>
                    </ItemForm>
                    <ItemForm>
                    <ItemDescription>Email: <br/> <input type="email" value={email} onchange={(e) => setEmail(e.target.value)}/></ItemDescription>
                    </ItemForm>
                    <ItemForm>
                    <ItemDescription>CNPJ: <br/> <input type="number" value={cnpj} onchange={(e) => setCnpj(e.target.value)}  /> </ItemDescription>
                    </ItemForm>                                            
               </Formulario>
               <Formulario>
                <ItemForm>
                    <ItemDescription>
                        CEP: <br/> <input type="number" />
                    </ItemDescription>
                </ItemForm>
                
               </Formulario>  
               </CadProduct>  
            </Conteudo>
            




        
        
    );
} 
   export default AddClients
