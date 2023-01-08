import React, { useEffect, useState } from 'react';
import '../components/css/Newscom.css';
import News from './News';
import PropTypes from 'prop-types'
import {Link}  from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader'

const NewsComp=(props)=>{
 
   const [articles,setArticles]=useState([]);
   const [page,setPage]=useState(1);
   const [loading,setLoading] = useState(true);
   const [totalResults,setTotalResults]=useState(0);
    
 const fetchMoreData = async() => {
 setPage(page+1); 
 let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=678199a0060c47d7894ab4f1f82a3d23&page=${page}&pagesize=${props.pagesize}`;
        let data = await fetch(url);
        let parseData= await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
}

   const upDate= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=678199a0060c47d7894ab4f1f82a3d23&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData= await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
   }

    useEffect(()=>{
        upDate();
    },[]);
    
    return (
      <div className='container my-5' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
            <nav className={`sidebar bg-${props.mode}`}>
                <div className="mx-4 mt-4">
                    <span className="py-2 " > <h3>CATEGORIES</h3> </span>
                    
                    <div className='mt-4'>
                    <Link to="/" className="py-2"><i className="fa fa-fw fa-text-width"></i>Top HeadLines</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/business" className="py-2"><i className="fa fa-fw fa-bitcoin"></i>Business</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/entertainment" className=" py-2"><i className="fa fa-fw fa-television"></i> Entertainment</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/general" className="py-2"><i className="fa fa-fw fa-globe"></i> General</Link></div>

                    <div className='mt-2'>
                    <Link to="/health" className="py-2"><i className="fa fa-fw fa-heartbeat"></i>Health</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/science" className="py-2"><i className="fa fa-fw fa-lightbulb-o"></i>Science</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/sports" className="py-2"><i className="fa fa-fw fa-futbol-o"></i>Sports</Link></div>
                    
                    <div className='mt-2'>
                    <Link to="/technology" className="py-2"><i className="fa fa-fw fa-gears"></i>Technology</Link></div>
                    
                </div>
            </nav>
            <div className="element">
             <h1 className='text-center'>{props.category?props.category.toUpperCase():"TOP HEADLINES"}</h1>
               {loading && <Loader/>}
                              <InfiniteScroll
                            dataLength={articles.length}
                            next={fetchMoreData}
                            hasMore={articles.length<totalResults}
                            loader={<Loader></Loader>}>

                        <div className='container'>
                      <div className='row mt-3 main'>
                      {articles.map((element)=>{
                              return <div className="col-sm-4 my-4" key={element.url} style={{color:'black'}}>
                              <News title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""} date={element.publishedAt} source={element.source.name}/>
                              </div>}
                      )}
                  </div>    
                  </div>
                  </InfiniteScroll> 
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