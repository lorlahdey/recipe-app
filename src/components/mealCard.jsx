import MealItem from "./mealItem"


const MealCard = ({ meals}) => {
    return (
        <div className='meal-list'>
            {meals.yoruba.map((meal) =>
                <MealItem key= {meal.id}
                id ={meal.id}
                    foodName={ meal.names}
                    foodImage= {meal.images}
                    foodDesc= {meal.description}
                    foodPrep= {meal.preparationMode}
                />
            )}
        </div>
    )
}

export default MealCard
