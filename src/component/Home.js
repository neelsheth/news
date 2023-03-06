import React, { useEffect, useState } from 'react'
import Header from './Header';
import ShowNews from './ShowNews';
import './style.css'

export default function Home() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        var url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2023-03-06&' +
            'sortBy=popularity&' +
            'apiKey=51cf4f7a3b1d4c7e8eaca9977835fa0f';

        // var req = new Request(url);
        fetch('https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=51cf4f7a3b1d4c7e8eaca9977835fa0f')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.articles)
                setdata(data.articles)
            })
    }, [])



    return (
        <>
            <Header></Header>
            <div className='flex'>
                {
                    data && data.map((idx) => (
                        <ShowNews data={idx}></ShowNews>
                    ))
                }
                <ShowNews></ShowNews>
            </div>
        </>
    )
}
