import { useSelector } from "react-redux";
import FavoriteList from "./FavoriteList";


const Favorite = () => {

    const { addFavorite: {favorites} } = useSelector(state => state)
    console.log('i am the data ', favorites)

  return (
    <div className="containerMod">
        {
            favorites && favorites.map(data => (
               <FavoriteList data={data} key={data.id}/>
            ))
        }
    </div>
  );
};


export default Favorite
