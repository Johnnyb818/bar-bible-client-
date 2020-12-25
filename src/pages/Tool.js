import React from "react";

const Tool = (props) => {

    const {tool} = props

    const loadTool = () => (
        
        <div>
            {tool.map((tool) => (
                <div>
                    <img src={tool.img}></img>
                    <h1>{tool.name}</h1>
                    <p>{tool.description}</p>
                    <h3>{tool.price}</h3>
                    <a href={tool.url} target="_blank" className="button">Buy</a>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return tool.length > 0 ? loadTool() : loading  
}

export default Tool