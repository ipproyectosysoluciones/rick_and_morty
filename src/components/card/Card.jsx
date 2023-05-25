import { Link } from 'react-router-dom';

// eslint-disable-next-line

// { id, name, status, species, gender, image, origin }
/**
 * 
 * @param { number } id 
 * @param { string } name 
 * @param { string } status 
 * @param { string } species 
 * @param { string } image 
 * @param { string } origin 
 * @param { number } onClose 
 * @returns 
 */
export default function Card ( { id, name, status, species, gender, image, origin, onClose } ) {

   return (
         <div>
            <div>
               <button onClick={ () => onClose( id ) }>X</button>
            </div>
            <div>
               <Link to={ `/detail/${ id }` }>
                  <h2>{ name }</h2>
               </Link>
               <h3>{ status }</h3>
               <h3>{ species }</h3>
               <h3>{ gender }</h3>
               <h3>{ origin }</h3>
            </div>
            <img src={ image } alt={ name } />
         </div>
   );
}
