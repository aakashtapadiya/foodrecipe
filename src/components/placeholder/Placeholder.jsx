import React from "react";
import "./placeholder.css"
import placeholderImage from "../../Images/react_background.jpeg"

export default function Placeholder()
{
    return(
        <div className="mainPage">
            <div className="mainPageTitle">
                <span className="mainPageTitleSmall">Search any Recipe using any Ingredient</span>
                <span className="mainPageTitleLarge">Yummy Recipe</span>
            </div>
            <img
                className="mainPageImage"
                src={placeholderImage}
                height = "580px"
                alt="Food Image"/>
        </div>
    )
}   