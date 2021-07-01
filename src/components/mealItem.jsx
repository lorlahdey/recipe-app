import React from 'react'

const MealItem = ({ id, foodName, foodImage, foodDesc, foodPrep}) => {
    return (
        <div className='meal'>
            <div>
                <img src={foodImage} alt="" />
            </div>
            <h3>{foodName}</h3>
            <p><strong>{foodDesc}</strong></p>
            
            <div className='mode-of-preparation'>
                <p>{foodPrep}</p>
            </div>
        </div>
    )
}

export default MealItem
