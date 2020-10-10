import styled from 'styled-components';

/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content    
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 450px;
    grid-template-rows: 100px auto;

    grid-template-areas:
    'MH MH'
    'CT AS'
    'FT FT';

    height: 100vh;
 

  
`;
