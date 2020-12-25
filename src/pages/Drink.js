import React from "react";

const Drink = (props) => {

    const {drink} = props

    const loadDrink = () => (
        
        <div>
            {drink.map((drink) => (
                <div>
                    <img src={drink.img}></img>
                    <h1>{drink.name}</h1>
                    <h3>{drink.spirit}</h3>
                    <h3>{drink.mixer1}</h3>
                    <h3>{drink.mixer2}</h3>
                    <h3>{drink.mixer3}</h3>
                    <h3>{drink.mixer4}</h3>
                    <h3>{drink.mixer5}</h3>
                    <h3>{drink.mixer6}</h3>
                    <h3>{drink.mixer7}</h3>
                    <h3>{drink.mixer8}</h3>
                    <h3>{drink.mixer9}</h3>
                    <h3>{drink.garnish}</h3>
                    <p>{drink.instructions}</p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return drink.length > 0 ? loadDrink() : loading  
}

export default Drink