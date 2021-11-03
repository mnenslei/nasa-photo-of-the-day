import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = (props) => {
    const {nasaImg} = props
    
    return (
        <div className = 'mainDiv'>
            <img className = 'nasaImg' src= {nasaImg} />
        </div>
    )
}

export default Main