import React from "react";
import Particles from "react-tsparticles";
// import particlesConfig from "./config/particles-config";

const ParticlesBackground = () => {
    return (
        
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    );
}


export default ParticlesBackground;