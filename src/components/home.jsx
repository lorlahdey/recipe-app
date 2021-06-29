import React from 'react'

const Home = () => {
return (
        <div className='top-ordered-container'>
            
            <h1 className='top-order-intro'>TOP ORDERED RECIPES</h1>
            <div className='top-orderded-banner'>
                <div className='banner-img'>
                    <div><img src="https://www.sbmintel.com/wp-content/uploads/2017/03/jollof-rice.png" alt="" /></div>
                    <div><img src="https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg" alt="" /></div>
                    <div><img src="https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/ora-soup.jpg" alt="" /></div>
                </div>
                <div className="banner-btn">
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="top-orderded-item-container">
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}

export default Home
