import React from 'react';

 import { Container} from './styles';
 import logo_jambo from '../../assets/jambo.jpg'
const MainHeader: React.FC = () => {
  return(
    <Container>
          <h1>Painel de Chamadas</h1>
          <img src={ logo_jambo } alt='logo jambo' />
    </Container>
  ) 

}

export default MainHeader;