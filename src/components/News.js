import React from 'react'
import '../components/css/News.css';

const News =(props)=> {
   
    return (
      <div>
        <div className="card pt-3">
            <img src={props.imageUrl?props.imageUrl:"https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?w=996&t=st=1672161378~exp=1672161978~hmac=94e4562b5fc0f90710411e886be8b780e60abb9a1437231282d9c837e9251fdf"} className="card-img-top" alt="..."/>
                <div className="card-body">
                   <div><p className="card-text"><small className="text-muted ">Source : {props.source}</small></p></div>
                   <div className='titl'> <h5 className="card-title">{props.title}</h5></div>
                   <div className='desc'><p className="card-text">{props.description}</p></div>
                   <div><p className="card-text"><small className="text-muted">{new Date(props.date).toGMTString()}</small></p></div>
                    <hr/>
                    <div>  <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">READ MORE</a></div>
                </div>
        </div>
      </div>
    )
}
export default News;
