import React from 'react'



const MealItem = ({ foodName, foodImage, foodDesc, foodPrep}) => {

    return (
        <div className='meal'>
            <div>
                <img src={foodImage} alt="" />
            </div>
            <h3>{foodName}</h3>
            <p>{foodDesc}</p>
            
            <div className='mode-of-preparation'>
                <h4>Mode of Preparation</h4>
                <ol>
                    {foodPrep.map((items, index) => 
                        <li key={index}>{items}</li>
                    )}
                    
                </ol>
            </div>
        </div>
    )
}

export default MealItem
