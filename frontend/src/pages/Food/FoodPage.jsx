import { useEffect, useState } from "react"
import classes from "./FoodPage.module.css"
import { useParams } from "react-router-dom"
import { getById } from "../../services/FoodService"
const FoodPage = () => {
    const [food, setFood] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getById(id).then(setFood)
    }, [id])
    
  return (
    <>
        {food && <div className={classes.container}>
            <img className={classes.image}
            src={`/food/${food.imageUrl}`}
            alt={food.name} />
        </div>}
    </>
  )
}

export default FoodPage