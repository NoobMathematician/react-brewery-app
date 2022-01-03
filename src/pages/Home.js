import './Home.css'
import React, { useEffect, useState } from "react";
import BreweryCard from "../components/BreweryCard";
import Search from "../components/Search";

function Home() {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState(true)
    const [brews, setBrews] = useState([])
    const getBrews = async () => {
        try {
            let res = await fetch('https://api.openbrewerydb.org/breweries')
            res = await res.json()
            console.log(res);
            setBrews(res)
        } catch (error) {
            setError(error.response)
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => getBrews(), [])

    const doSearch = async (search) => {

        if (!!search) {
            setSearch(search)
            let items = brews.map(brew => {
                if (JSON.stringify(brew).toLowerCase().includes(search.toLowerCase())) {
                    return brew
                } return false
            })

            console.log("items", items);

            setBrews(items)
        } else {
            getBrews()
        }


    }

    if (loading) {
        return (
            <div className="home">
                <section className='content'>
                    <div className='card'>
                        <div className='card-body'>
                            <p>Loading...</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    if (!!error) {
        return (
            <div className="home">
                <section className='content'>
                    <div className='card'>
                        <div className='card-body' style={{ color: 'red' }}>
                            Error: {error}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    return (
        <div className="home">
            <Search doSearch={doSearch} />
            <h1 className={`text-light ${!!search ? 'd-none' : 'd-block'}`}>Results for '{search}'</h1>

            <section className="content">
                {
                    brews.map(brew => {
                        if (!!brew) {

                            return (<BreweryCard brew={brew} key={brew.id} />)
                        }

                    })
                }
            </section>
        </div>

    )
}

export default Home