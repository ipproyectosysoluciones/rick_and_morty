import Card from '../card/Card';

// eslint-disable-next-line
/**
 * 
 * @param { string } characters 
 * @param { string } onClose 
 * @returns 
 */
export default function Cards ( { characters, onClose } ) {

   return (
      <div>
         {
            characters && characters.map( ({ id, name, status, species, gender, image, origin }) => {
               return (
                  <Card
                     key={ id }
                     id={ id }
                     name={ name }
                     status={ status }
                     species={ species }
                     gender={ gender }
                     origin={ origin?.name }
                     image={ image }
                     onClose={ onClose }
                  />
               )
            })
         }
      </div>
   );
}
