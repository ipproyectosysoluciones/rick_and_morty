import { useState } from 'react';
import validation from './Validation';
import styles from './Form.module.css';


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
    <div className={ styles.wrapper }>
      <form className={ styles.form } onSubmit={ handleSubmit }>
        <h2 className={ styles.title }>Rick & Morty</h2>
        <div className={ styles.fieldGroup }>
          <label className={ styles.label } htmlFor='email'>Email</label>
          <input 
            className={ styles.input }
            id='email'
            type='email'
            name='email' 
            value={ userData.email }
            onChange={ handleChange }
            placeholder='Ingrese su Email..'
          />
          { errors.email && <p className={ styles.error }>{ errors.email }</p> }
        </div>

        <div className={ styles.fieldGroup }>
          <label className={ styles.label } htmlFor='password'>Password</label>
          <input 
            className={ styles.input }
            id='password'
            type='password' 
            name='password' 
            value={ userData.password }
            onChange={ handleChange }
            placeholder='Ingrese su Password...'
          />
          { errors.password && <p className={ styles.error }>{ errors.password }</p> }
        </div>
        
        <button className={ styles.submitButton } type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;