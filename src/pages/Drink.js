import React from "react";



const Drink = (props) => {

    const {drink} = props

    const loadDrink = () => (
        
        <div className="container">
            <div className="row">
            {drink.map((drink) => (
                    <div className="col s6 m4 l4">
                        <div className="card">
                            <div className="card-image">
                                <img src={drink.img}/>
                                <span className="card-title">{drink.name}</span>
                            </div>
                            <div className="card-content">
                                <p>{drink.spirit}</p>
                                <p>{drink.mixer1}</p>
                                <p>{drink.mixer2}</p>
                                <p>{drink.mixer3}</p>
                                <p>{drink.mixer4}</p>
                                <p>{drink.mixer5}</p>
                                <p>{drink.mixer6}</p>
                                <p>{drink.mixer7}</p>
                                <p>{drink.mixer8}</p>
                                <p>{drink.mixer9}</p>
                                <p>{drink.garnish}</p> 
                                <div class="card-action">                              
                                    <p>{drink.instructions}</p>
                                </div>
                            </div>                         
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
    const loading = <h1>Loading...</h1>
    return drink.length > 0 ? loadDrink() : loading  
}

export default Drink