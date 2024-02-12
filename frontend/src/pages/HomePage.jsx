import { useEffect, useReducer } from "react";
import { getAll, getAllTags, search } from "../services/FoodService";
import Thumbnails from "../components/thubnails/Thumbnails";
import { useParams } from "react-router-dom";
import Search from "../components/Search/Search";
import Tags from "../components/Tags/Tags";

const initialState = { foods:[] , tags: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload }
    case "TAGS_LOADED":
      return { ...state, tags: action.payload}
    default:
      return state;
  }
}
 
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {foods, tags} = state;
  const {searchTerm, tag } = useParams();
  
  useEffect(()=>{

    getAllTags().then(tags => dispatch({ type: "TAGS_LOADED", payload: tags}))

    const loadFoods = tag ? getAllTags(tag) : searchTerm ? search(searchTerm) : getAll();

    loadFoods.then(foods => dispatch({type: "FOODS_LOADED", payload: foods})) 
  }, [searchTerm, tag])
  return (
    <>
      <Search/>
      <Tags tags={tags}/>
      {foods.length > 0 && <Thumbnails foods={foods} />}
    </>

  )
}

export default Home