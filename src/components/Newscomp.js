import React, { useEffect, useState } from 'react';
import '../components/css/Newscom.css';
import News from './News';
import Loader from './Loader';
import PropTypes from 'prop-types'
import {Link}  from "react-router-dom";

const NewsComp=(props)=>{
 
   const [articles,setArticles]=useState([]);
   const [page,setPage]=useState(1);
   const [loading,setLoading]=useState(false);
   const [totalResults,setTotalResults]=useState(0);
    
   const upDate= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=678199a0060c47d7894ab4f1f82a3d23&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData= await data.json();
        setArticles(parseData.articles);
        setLoading(false);
        setTotalResults(parseData.totalResults);
   }

    useEffect(()=>{
        upDate();
    },[]);
    const prev =()=>{
     setPage(page-1);
     upDate();
    }
    const next = ()=>{
      setPage(page+1);
      upDate();
    }
    return (
      <div className='container my-5' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
         <div className='row'>
            <div className='col-md-2'>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-light">
                <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <span
                    className="list-group-item list-group-item-action py-2 ripple"
                    aria-current="true"
                    >
                    <h3>CATEGORIES</h3>
                    </span>
                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fa fa-fw fa-text-width"></i><span> Top HeadLines</span>
                    </Link>
                    <Link to="/business" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-bitcoin"></i><span> Business</span></Link>
                    <Link to="/entertainment" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-television"></i><span> Entertainment</span></Link
                    >
                    <Link to="/general" className="list-group-item list-group-item-action py-2 ripple">
                    <i className="fa fa-fw fa-globe"></i><span> General</span>
                    </Link>
                    <Link to="/health" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-heartbeat"></i><span> Health</span></Link
                    >
                    <Link to="/science" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-lightbulb-o"></i><span> Science</span></Link
                    >
                    <Link to="/sports" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-futbol-o"></i><span> Sports</span></Link
                    >
                    <Link to="/technology" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-fw fa-gears"></i><span> Technology</span></Link
                    >
                </div>
                </div>
            </nav>
            </div>
            <div className='col-md-10'style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
             <h1 className='text-center'>{props.category?props.category.toUpperCase():"TOP HEADLINES"}</h1>
                  <div className='row my-3 main'>{loading && <Loader/>}
                      {!loading && articles.map((element)=>{
                              return <div className="col-md-4 my-4" key={element.url} style={{color:'black'}}>
                              <News title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""} date={element.publishedAt} source={element.source.name}/>
                              </div>}
                      )}
                  </div>    
              
                    <div className="d-flex justify-content-between mx-5"><button className='btn btn-md btn-primary' disabled={page===1} onClick={prev}>&larr; Previous</button><button className='btn btn-md btn-primary' disabled={page+1>Math.ceil(totalResults/9)} onClick={next}>Next &rarr;</button></div> 
            </div>
          </div>
      </div>
    )
  }
NewsComp.defaultProps = {
        country: 'in',
        category: ''
  }
NewsComp.propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
   }
export default NewsComp;