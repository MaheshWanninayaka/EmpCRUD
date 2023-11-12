import { Fragment, useState } from 'react';
import React from 'react';

export default function Employee() {

    const stockData = [
        {
            name: "Twitter Inc",
            address: "TWTR",
            salary: "22.76 USD",
        },
        {
            name: "Square Inc",
            address: "SQ",
            salary: "45.28 USD",
        },
        {
            name: "Shopify Inc",
            address: "SHOP",
            salary: "341.79 USD",
        },
        {
            name: "Sunrun Inc",
            address: "RUN",
            salary: "9.87 USD",
        },
        {
            name: "Adobe Inc",
            address: "ADBE",
            salary: "300.99 USD",
        },
        {
            name: "HubSpot Inc",
            address: "HUBS",
            salary: "115.22 USD",
        },
    ];

    const [data, setData] = useState([]);

    return (


        <Fragment>
            <h1>Employee details</h1>

            <table>
                <thead>
                    <tr>
                        <th>No/ID</th>&nbsp;
                        <th>Name</th>&nbsp;
                        <th>Address</th>&nbsp;
                        <th>Salary</th>&nbsp;

                    </tr>
                </thead>

                <tbody>
                    {stockData.length > 0 ?
                        stockData.map((item, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>&nbsp;
                                    <th>{item.name}</th>&nbsp;
                                    <th>{item.address}</th>&nbsp;
                                    <th>{item.salary}</th>&nbsp;
                                </tr>
                            );
                        }) : null

                    }
                </tbody>
            </table>
        </Fragment>

    );
}