import React, { useState } from 'react'
import ShowDetails from './ShowDetails'

export default function ShowNews(props) {
    { console.log(props.data) }
    const[data,setdata] = useState(null)
    const clicked = ()=>{
        console.log("clicked")
        setdata(props.data)
    }
    const close = () =>{
        setdata(null);
    }
    return (
        <>

            <div className='box' onClick={clicked}>
                {props.data && <div className='textHead'><div>{props.data.title}</div></div>}
                {props.data && <div><img src={props.data.urlToImage
                }></img></div>}
                {props.data && <div className='author'><div>Author : {props.data.author}</div></div>}
            </div>

        {    data && <ShowDetails data={data} close={close}></ShowDetails>}
            
        </>
    )
}
