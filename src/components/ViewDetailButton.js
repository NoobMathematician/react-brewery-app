import React from "react";
import './ViewDetailButton.css'
import { Link } from "react-router-dom";

export default function Button({id}) {
    return (
        <Link to={`/${id}`} className="btn btn-primary card-button">View Detail</Link>
    )
}