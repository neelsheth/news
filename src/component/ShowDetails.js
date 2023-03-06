import React from 'react'

export default function ShowDetails(props) {
  console.log(props)
  return (
    <div className='background'>
      <div className='innerBackground'>
        <button className='closebtn' onClick={props.close}>X</button>
        <div className='firsthead'><div>{props.data.title}</div></div>
        <div className='flexrow'>
          <div className='imgCenter'>
            <img src={props.data.urlToImage} height='200px' width='295px'></img>
          </div>
          <div>
            <h1>description : - </h1>
            <div className='dec'>{props.data.description}</div>
            <h1 className='hidden'>content : - </h1>
            <div className='dec hidden'>{props.data.content}</div>
            <h3>source : - {props.data.source.name}</h3>
            <div className='flexbtn'><a href={props.data.url} target='_blank'>find more</a></div>
          <div className='flexbtn'>        <button className='backbtn' onClick={props.close}>Back</button>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}
