import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;

    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                src={CDN_URL+cloudinaryImageId}
                alt="Meghna food"
                height="200px"
                width="180px"
            />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <div className="rating">
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
                <p>{sla.deliveryTime} mins</p>
            </div>
            
        </div>
    );
};

export default RestaurantCard;