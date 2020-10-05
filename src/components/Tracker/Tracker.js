import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  NumberFormat from 'react-number-format';
import Url from '../Url';
import "./Tracker.css";

const Tracker = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${Url}/summary`)
        .then(res => {
            console.log(res.data.Global)
            setData(res.data.Global)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
    <>
        <section className="cov19-sectionA">
            <div className="container">
                <div className="sectionA-content">
                    <h1>
                        Covid-19 Tracker
                    </h1>
                    {/* start of first card pair */}
                    <div className="sectionA-frame">
                        {/* start of card 1 */}
                        <div className="frame-container">
                            <div className="card-1-container">
                                <div className="card-1-content">
                                    <div className="card-items">
                                        <div className="total-case">
                                            Total Cases
                                        </div>
                                        <div className="total-case-num">
                                       {!data.TotalConfirmed ? " 🥱 " :  <NumberFormat value={data.TotalConfirmed} displayType={'text'} thousandSeparator={true} />}
                                        </div>
                                        <div className="new-case">{`+ `}
                                        <NumberFormat value={`${data.NewConfirmed}`} displayType={'text'} thousandSeparator={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* start of card 2 */}
                            <div className="card-2-container">
                                <div className="card-2-content">
                                    <div className="card-items">
                                        <div className="total-case">
                                            Actice Cases
                                        </div>
                                        <div className="total-case-num">
                                        {!(data.TotalConfirmed - (data.TotalDeaths + data.TotalRecovered)) ? " 🧐 " : <NumberFormat value={`${(data.TotalConfirmed) - (data.TotalDeaths + data.TotalRecovered)}`} displayType={'text'} thousandSeparator={true} />}
                                        </div>
                                        <div className="new-case">{`+ `}
                                        <NumberFormat value={`${(data.NewConfirmed) - (data.NewRecovered + data.NewDeaths)}`} displayType={'text'} thousandSeparator={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* end of card 2 */}
                    </div>
                    {/* end of 1 pair */}
                    {/* statr of pair 2 */}
                        <div className="frame-container">
                            {/* start of card 3 */}
                            <div className="card-3-container">
                                <div className="card-1-content">
                                    <div className="card-items">
                                        <div className="total-case">
                                            Recoveries
                                        </div>
                                        <div className="total-case-num">
                                        {!data.TotalRecovered ? " 😷 " : <NumberFormat value={data.TotalRecovered} displayType={'text'} thousandSeparator={true} />}
                                        </div>
                                        <div className="new-case">{`+ `}
                                        <NumberFormat value={data.NewRecovered} displayType={'text'} thousandSeparator={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* start of card 4 */}
                            <div className="card-4-container">
                                <div className="card-2-content">
                                    <div className="card-items">
                                        <div className="total-case">
                                            Total Death
                                        </div>
                                        <div className="total-case-num">
                                        {!data.TotalDeaths ? " 👿 " : <NumberFormat value={data.TotalDeaths} displayType={'text'} thousandSeparator={true} />}
                                        </div>
                                        <div className="new-case">{`+ `}
                                        <NumberFormat value={data.NewDeaths} displayType={'text'} thousandSeparator={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end of pair 2 */}
                    </div>       
                </div>
            </div>
        </section>
    </>
    )
}

export default Tracker;