import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Header from '../../components/Header';


function Home () {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('')

    
/*o search é e onsearch é um props */
    return (
        <Container>
            <Header search={headerSearch} onSearch = {setHeaderSearch}/>
            <h1 style={{color:"#000000", alignItems: "center", textAlign:'center'}}>Olá mundo</h1>
            
        </Container>
    );
}
 export default Home