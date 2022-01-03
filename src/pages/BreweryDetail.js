import './BreweryDetail.css'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function BreweryDetail() {
    const { id } = useParams()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [brew, setBrew] = useState({})

    const navigate = useNavigate()

    const getBrew = async () => {
        try {
            let res = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            res = await res.json()
            console.log(res);
            setBrew(res)
        } catch (error) {
            setError(error.response)
            console.error(error);
        } finally {
            setLoading(false)
        }

    }

    function goBack() {
        navigate('/')
    }

    useEffect(() => getBrew(), {})
    if (loading) {
        return (
            <div className="brew">
                <div className="card card-bordered">
                    <div className="card-body">
                        Loading...
                    </div>
                </div>
            </div>
        )
    }
    if (!!error) {
        return (
            <div className="brew">
                <div className="card card-bordered">
                    <div className="card-body" style={{color: 'red'}}>
                        Error: {error}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="brew">
            <div className="card card-bordered">
                <div className="card-body">
                    <h1>Profile: {brew.name}</h1>
                    <p>Name: {brew.name} </p>
                    <p>Type: {brew.brewery_type} </p>
                    <p>Street: {brew.street} </p>
                    {brew.address_2 !== null && <p>Address 2: {brew.address_2}</p>}
                    {brew.address_3 !== null && <p>Address 3: {brew.address_3}</p>}
                    <p>City: {brew.city} </p>
                    <p>State: {brew.state} </p>
                    <p>Country: {brew.country} </p>
                    <p>County province: {brew.county_province}</p>
                    <p>Postal Code: {brew.postal_code}</p>
                    <p>Phone: {brew.phone} </p>
                    <p>Website: <a href={brew.website_url}>{brew.website_url}</a></p>

                    <button className='btn btn-primary btn-large' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default BreweryDetail