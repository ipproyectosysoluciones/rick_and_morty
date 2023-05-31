import Card from "../card/Card";
import { connect } from "react-redux";


const Favorites = ( { myFavorites } ) => {
  return (
    <>
    {
      myFavorites?.map( favorites => (
        <Card 
          key={ favorites.id }
          id={ favorites.id }
          name={ favorites.name }
          status={ favorites.status }
          species={ favorites.species }
          gender={ favorites.gender }
          origin={ favorites.origin?.name }
          image={ favorites.image }
        />
      ))
    }
    </>
  )
}

const mapStateToProps = ( state ) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect( mapStateToProps, null )(Favorites);
