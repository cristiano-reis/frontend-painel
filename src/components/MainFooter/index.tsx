import React from 'react';
import { Container, NavLink,FooterMenu,FooterHour} from './styles';


const MainFooter: React.FC = () => {
  return(
    <Container>
        <FooterMenu>
          <NavLink to="/">
            Config
          </NavLink>
          <NavLink to="/">
            Promoções
          </NavLink>
          </FooterMenu>
         
       
          <FooterHour>
               <h1>São Vicente, 10 de Outubro de 2020 </h1>
               
            
          </FooterHour>
    </Container>
  ) 

}

export default MainFooter;