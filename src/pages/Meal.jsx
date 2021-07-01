import React from 'react'
import LocalMeal from '../components/localmeals'

const Meal = ({ id, foodName, foodImage, foodDesc, foodPrep}) => {
    return (
        <div className='meal-container'>
            <h1>Welcome, explore our various meals</h1>
            <LocalMeal />
        </div>
    )
}

export default Meal
