import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';
import  Footer from '../MainFooter';

const Layout: React.FC = ({ children }) => (
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            { children }
        </Content>
        <Footer/>
    </Grid>
);


export default Layout;