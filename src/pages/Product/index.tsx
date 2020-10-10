import React,{useRef} from 'react';
import { Formik } from 'formik';
import { Container } from './styles';

const Product: React.FC = () => {

  const user  = useRef(null);
  const password  = useRef(null);
  return (
    <Container>
<Formik
  initialValues={{
    user:'',
    password:'',
  }}
  onsubmit={
    values=>{
    console.log(values)}}

>
  {({values,handleChange,handleSubmit})=>(
    <>
    <h1>Manutenção de Produtos</h1>


    <label htmlFor="user">Usuarios:</label>
     <input
      ref={user}
      value={values.user}
      onChange={handleChange('user')}
      type="text" name="user" />
    
    <label htmlFor="password">Usuarios:</label>
     <input
      ref={password}
      value={values.password}
      onChange={handleChange('password')}
      type="text" name="password" />
 
     <button type="submit" ={handleSubmit}>Alterar</button>
  </>
  )}
</Formik>
    </Container>
  
  
    );
}

export default Product;