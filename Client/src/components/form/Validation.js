
/**
 * @description Función de validacion del usuario y password del formulario
 * @param { Function } userData estado de errores del conponente Form
 */
export default function validation ( userData )  {
  const errors = {};
  const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const password = /^(?=.*\d).{6,10}$/;

  if ( email.test( userData.email ) ) {
    errors.email = `El email ${ userData.email }, no es valido o no existe`;
  }
  if ( !userData.email ) {
    errors.email = `El campo ${ userData.email }, no puede estar vacio, ingrese el email`;
  }
  if ( userData.email.length > 35 ) {
    errors.email = `El ${ userData.email }, no puede contener mas de 35 caracteres`;
  }

  if ( !password.test( userData.password ) ) {
    errors.password = `La contraseña debe de  al menos un número`;
  } 
  if ( userData.password.length < 6 || userData.password.length > 10 ) {
    errors.password = `La contraseña debe tener una longitud entre 6 y 10 caracteres`;
  }

  return errors;
}
