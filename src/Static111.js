import React from "react"
import "./App.css"


const Static111 = () => {
    const videoSource = "https://vod-progressive.akamaized.net/exp=1601352450~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4745%2F14%2F373726378%2F1555251782.mp4~hmac=08ed05bb7d3dbad9e85d7fc1d3a8a63e7be2ab0826dda5387c260fc0505556a8/vimeo-prod-skyfire-std-us/01/4745/14/373726378/1555251782.mp4"
    return (
        <div className="vidcontainer">
            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource} type="video/mp4"/>
                Your browser does not support this video tag.
            </video>

            <div className="caption1">
                <div className="captionsub1">
                    <h1>The Wildlife Keep seeks to protect and serve nature's best by informing animal enthusiasts and connecting them to world resources.</h1>
                </div>
            </div>
        </div>
    )
}
export default Static111
