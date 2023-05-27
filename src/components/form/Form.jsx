import { useState } from 'react';
import validation from './Validation';


// eslint-disable-next-line
const Form = ( { login } ) => {

  const[ userData, setUserData ] = useState({
    email: '',
    password: '',
  });

  const [ errors, setErrors ] = useState({});

  const handleChange = ( event ) => {
    setUserData({
      ...userData,
      [ event.target.name ]: event.target.value,
    });
    
    const validationErrors = validation ({
      ...userData,
      [ event.target.name ]: event.target.value,
    });

    setErrors( validationErrors );
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    login( userData );
  };
  
  return ( 
    <Form onSubmit={ handleSubmit }>
      <label htmlFor='email'>Email</label>
      <input 
        type='email'
        name='email' 
        value={ userData.email }
        onChange={ handleChange }
        placeholder='Ingrese su Email..'
      />
      { errors.email && <p>{ errors.email }</p> }

      <label htmlFor='password'>Password</label>
      <input 
        type='password' 
        name='password' 
        value={ userData.password }
        onChange={ handleChange }
        placeholder='Ingrese su Password...'
      />
      { errors.password && <p>{ errors.password }</p> }
      
      <button type='submit'>Submit</button>
    </Form>
  );
}

export default Form;