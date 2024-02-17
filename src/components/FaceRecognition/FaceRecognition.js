import React from "react";
import './FaceRecognition.css'


const FaceRecognition=({imageUrl, box})=>{

return(

<div className="center ma">
    <div className="absolute mt2">

    
    
    <div className="bounding-box grow" style={{top: box.leftCol, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow }}>       </div>
    </div>
</div>

);



}

export default FaceRecognition;