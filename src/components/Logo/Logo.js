import React from "react";
import {Tilt} from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
import fuel from './fuel.jpg';
const Logo =() =>{
return (
<div className="ma4 mt0"> 

<Tilt className="Tilt br2 shadow-2 tc" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
 <div className="Tilt-inner pa5"> <img style={{paddingTop: '5px'}}alt = 'logo' src={fuel}></img> </div>
</Tilt>
</div>

);
}
export default Logo;