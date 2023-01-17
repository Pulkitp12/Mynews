import React, { useEffect, useState } from 'react';
import '../components/css/Newscom.css';
import News from './News';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader';

const NewsComp=(props)=>{
   const [articles,setArticles]=useState([]);
   const [page,setPage]=useState(1);
   const [loading,setLoading] = useState(true);
   const [totalResults,setTotalResults]=useState(0);

 const fetchMoreData = async() => {
 setPage(page+1); 
 let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=678199a0060c47d7894ab4f1f82a3d23&page=${page+1}&pagesize=${props.pagesize}`;
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
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
   }
    useEffect(()=>{
        upDate();
    },[]);
   
  
    return (
      <div className='mt-5 py-3 newcom'>
            <div className="main" style={props.mode==='light'?{color:'black'}:{color:'white'}}>
             <h1 className='text-center'>{props.category?props.category.toUpperCase():"TOP HEADLINES"}</h1>
               {loading && <Loader/>}
                              <InfiniteScroll
                            dataLength={articles.length}
                            next={fetchMoreData}
                            hasMore={articles.length<totalResults}
                            loader={<Loader></Loader>}>
                        <div className='container '>
                      <div className='row mt-3'>
                      {articles.map((element)=>{
                              return <div className="col-sm-4 my-4" key={element.url} style={{color:'black'}}>
                              <News title={element.title?element.title.substr(0,80) + "...":""} description={element.description?element.description.substr(0,80) + "...":""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""} date={element.publishedAt} source={element.source.name}/>
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