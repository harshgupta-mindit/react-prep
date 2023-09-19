import React, { useState } from 'react'

const Dropdown_problem = () => {

    const [country, setCountry] = useState(false);



    const DATA = [
        {
            name: 'India', value: 'IN', cities: [
                'Delhi', 'Mumbai'
            ]
        },
        {
            name: 'Pak', value: 'PK', cities: [
                'Lahore', 'Karachi'
            ]
        },
        {
            name: 'Bangladesh', value: 'BG', cities: [
                'Dhaka', 'Chittagong'
            ]
        },

    ]

    console.log(country)


    return (
        <>
            <select onChange={(e) => setCountry(e.target.value)} name="" id="">
                <option selected="true" disabled="disabled">Choose Country</option>
                {
                    DATA.length !== 0 && DATA.map((data) => {
                        return <option value={data.name}>{data.name}</option>
                    })
                }

            </select>
            {country &&
                <select name="" id="">

                    <option selected="true" disabled="disabled">Choose State</option>

                    {DATA.map((data) => {
                        return data.name == country && (
                            data.cities.map((data)=> {
                                return <option>{data}</option>
                            })
                        )
                    })
                    }

                </select>
            }
        </>
    )
}

export default Dropdown_problem