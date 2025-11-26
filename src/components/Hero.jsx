import {useEffect, useRef} from "react";
import {getPublicPath} from "../utils/publicPath.js";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src={getPublicPath("/title.png")} alt="MacBook Title" />
            </div>

            <video ref={videoRef} src={getPublicPath("/videos/hero.mp4")} autoPlay muted playsInline />

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}
export default Hero
