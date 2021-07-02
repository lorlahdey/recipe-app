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
                            <img src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/yoyosummer-1540793733-B1KcrQVhX/yoyosummer_wedding-dessert-table-at-botanical_4.png" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="https://img.delicious.com.au/---Wzobg/del/2015/11/valli-littles-raw-raspberry-slice-23893-3.jpg" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="https://studio.code.org/v3/assets/bp3U6f11x7kpJJJby9tGn8kFWJsAbgPD7VB5eu4urhs/Ice-Cream-Cone-Cupcakes-Recipe-1-of-1-6.jpg" alt="" />
                        </div>
                        <div className='top-ordered-item-content'>
                            <h3>Lorem</h3>
                            <p>Deliciously baked</p>
                            <span>To get recipies, click here <i className='fas fa-long-arrow-alt-right'></i> </span>
                        </div>
                    </div>
                    <div className='top-ordered-item'>
                        <div className='top-ordered-item-img'>
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/4f/77/4f/raw-dersert.jpg" alt="" />
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
