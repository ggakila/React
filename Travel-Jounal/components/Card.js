import React from "react"

export default function Card(props){
    return (
    <div className="cards--list">
        <img className="content--image"src={props.item.imageUrl} />
        <div className="content--stats">
            <p className="card--maps">
                <img className="pin" src="./images/placeholder.png"/>
                <span className="card--country">{props.item.location.toUpperCase()}</span>
                 <a href={props.item.googleMapsUrl}><span className="card--link"> View on Google Maps</span>
                 </a>
                </p>
            <h1 className="card--title">{props.item.title} </h1>
            <p className="date">{props.item.startDate} - {props.item.endDate} </p>
            <p className="desc">{props.item.description} </p>
        </div>
    </div>
)}