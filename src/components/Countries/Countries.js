import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Url from '../Url';
import NumberFormat from 'react-number-format';
import "./Countries.css";
import MapImage from "./map.svg";


const Countries = () => {
    const [dataArr, setDataArr] = useState([]);
    const [data, setData] = useState([])
    const [ date ] = useState(new Date())

    const sorted = dataArr.sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed
    })

    useEffect(() => {
        axios
        .get(`${Url}/summary`)
        .then(res => {
            // console.log(res.data.Countries)
            setDataArr(res.data.Countries)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() =>{
        axios.get(`${Url}/country/${data}`)
        .then(res => {
            console.log(res.data[res.data.length -1])
            setData(res.data[res.data.length -1])
        })
        .catch(err => {
            console.log(err)
        })
        // eslint-disable-next-line 
    }, []);

    return (
        <>
        <section className="container">
            <div className="cov19-sectionB">
                <h1>Top Affected Countries</h1>
                <p>Last Updated: {date.toDateString()}</p>
                <div className="sectionB-frame">
                    <div className="box-1">
                        <p>Countries</p>
                        <div className="scroll-y">
                            {sorted.map(data => (
                            <div
                             key={data.Country}
                              onClick={e => setData(data)}
                               className="box-1-container">
                                <div className="box-1-content">
                                    <div className="identity-card">
                                        <div className="flag">
                                            {data.CountryCode}
                                        </div>
                                        <div className="country">
                                            {data.Country}
                                        </div>
                                    </div>
                                    <div className="digit">
                                    <NumberFormat value={`${data.TotalConfirmed}`} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="box-2-header">{!data.Country ? 'Country' : data.Country}</div>
                        <div className="box-2-cards">
                            <div className="box-2-card-1">
                                <h4>Total Cases</h4>
                            <p className="primary-color">{!data.TotalConfirmed ? " 😭 " : <NumberFormat value={`${data.TotalConfirmed}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                            <div className="box-2-card-2">
                                <h4>Active Cases</h4>
                                <p className="primary-color">{!(data.TotalConfirmed - (data.TotalDeaths + data.TotalRecovered)) ? " 🧐 " :  <NumberFormat value={`${data.TotalConfirmed - (data.TotalDeaths + data.TotalRecovered)}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                        </div>
                        <div className="box-2-cards">
                            <div className="box-2-card-3">
                                <h4>Recoveries</h4>
                            <p className="primary-color">{!data.TotalRecovered ? " 😷 " : <NumberFormat value={`${data.TotalRecovered}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                            <div className="box-2-card-4">
                                <h4>Total Deaths</h4>
                            <p className="primary-color">{!data.TotalDeaths ? " 👿 " : <NumberFormat value={`${data.TotalDeaths}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                        </div>
                        <div className="box-2-cards">
                            <div className="box-2-card-5">
                                <h4>New Cases</h4>
                            <p className="primary-color">{!data.NewConfirmed ? " 😭 " : <NumberFormat value={`${data.NewConfirmed}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                            <div className="box-2-card-6">
                                <h4>New Deaths</h4>
                            <p className="primary-color">{!data.NewDeaths ? " 😡 " : <NumberFormat value={`${data.NewDeaths}`} displayType={'text'} thousandSeparator={true} />}</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-3">
                        <img src={MapImage} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Countries;