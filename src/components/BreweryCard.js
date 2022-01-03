import './BreweryCard.css';
import React from "react";
import Button from "./ViewDetailButton";

export default function BreweryCard({brew}) {
    
    return (
        <div className="card">
            <div className="card-body">
                <p><strong>{brew.name}</strong></p>
                <p>Type: {brew.brewery_type}</p>
                <p>City: {brew.city}</p>
                {brew.website_url !== null && <p>Website: <br></br><a href={brew.website_url}>{brew.website_url}</a></p>}
                {brew.website_url == null && <p>Website: <br></br>(Not available)</p>}

            </div>
            <Button id={brew.id} />
        </div>
    )
}