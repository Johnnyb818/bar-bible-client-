import React from "react";


const Video = (props) => {

    const {video} = props

    const loadVideo = () => (
        
        <div>
            {video.map((video) => (
                <div>
                    <h1>{video.name}</h1>
                    <p>What will I learn?</p><p>{video.description}</p>
                    <p>Check it out <a href={video.url} target="_blank">here</a></p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return video.length > 0 ? loadVideo() : loading  
}

export default Video