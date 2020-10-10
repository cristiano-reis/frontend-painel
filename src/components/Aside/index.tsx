import React from 'react';

 import { Container, TableCall } from './styles';

const Aside: React.FC = () => {
  return( 
  <Container>
       
      <TableCall>
        <tr>
            <th>Últimos Chamados</th>
        </tr>
        <tr>
            <td>Caixa 1</td>
        </tr>
        <tr>
            <td>Caixa 2</td>
        </tr>
        <tr>
            <td>Caixa 3</td>
        </tr>
         <tr>
            <td>Caixa 5</td>
        </tr>
        <tr>
            <td>Caixa 5</td>
        </tr>
     
      </TableCall>
  </Container>
  );
}

export default Aside;