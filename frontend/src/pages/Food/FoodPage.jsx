import { useEffect, useState } from "react";
import classes from "./FoodPage.module.css";
import { useParams } from "react-router-dom";
import { getById } from "../../services/FoodService";
import StarRating from "../../components/StarRating/StarRating";
import Price from "../../components/price/Price";
const FoodPage = () => {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  return (
    <>
      {food && (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />
          <h3>{food.name} </h3>
          <StarRating stars={food.stars} />
          {/* <span> Ingredients: {food.ingredients.join(",")}</span> */}
          {/* <p>Origins: {food.origins.join(", ")} </p> */}
          <Price price={food.price} />
        </div>
      )}
    </>
  );
};

export default FoodPage;
