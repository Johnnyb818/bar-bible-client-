import React from "react";

const Syrup = (props) => {

    const {syrup} = props

    const loadSyrup = () => (
        
        <div>
            {syrup.map((syrup) => (
                <div>           
                    <h1>{syrup.name}</h1>
                    <p>{syrup.description}</p>
                    <p>{syrup.description2}</p>
                    <p>{syrup.description3}</p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return syrup.length > 0 ? loadSyrup() : loading  
}

export default Syrup