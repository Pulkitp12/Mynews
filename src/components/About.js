import React from 'react';
import '../components/css/about.css';

const About = (props)=> {
    return (
    <div className='hey1' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
    <div className='py-3 mt-2'>
      <iframe src="https://www.youtube.com/embed/ADpTy-Klsbc?autoplay=1&enablejsapi=1"
                 title ="1"
                 position="absolute"
                 width="30%"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen="true"></iframe>
      <iframe src="https://www.youtube.com/embed/uMA4BJWOO-g?autoplay=0&mute=1&enablejsapi=1"
      title ="2"
      position="absolute"
            width="30%"
            id="myId"
            height="400px"
            frameborder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true"/>
      <iframe src="https://www.youtube.com/embed/sDGlnGzaEuI?autoplay=0&mute=1&enablejsapi=1"
                 title ="3"
                 position="absolute"
                 width="30%"
                 id="myId"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen="true"></iframe>      
    </div>
    <div className='py-3'>
      <iframe src="https://www.youtube.com/embed/PbeYO9rRbGE?autoplay=0&mute=1&enablejsapi=1"
                 title ="4"
                 position="absolute"
                 width="30%"
                 id="myId"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen="true"></iframe>
      <iframe src="https://www.youtube.com/embed/lMXRuOmKdNs?autoplay=0&mute=1&enablejsapi=1"
                title ="5"
      position="absolute"
            width="30%"
            id="myId"
            height="400px"
            frameborder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true"/>
      <iframe src="https://www.youtube.com/embed/qr-zs6jjWr8?autoplay=0&mute=1&enablejsapi=1"
                  title ="6"
                 position="absolute"
                 width="30%"
                 id="myId"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen="true"></iframe>      
    </div>
    <div className='py-3'>
      <iframe src="https://www.youtube.com/embed/uN80wqPI5So?autoplay=0&mute=1&enablejsapi=1"
                title ="7"
                 position="absolute"
                 width="30%"
                 id="myId"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen="true"></iframe>
      <iframe src="https://www.youtube.com/embed/PbeYO9rRbGE?autoplay=0&mute=1&enablejsapi=1"
               title ="8"
      position="absolute"
            width="30%"
            id="myId"
            height="400px"
            frameborder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true"/>
      <iframe src="https://www.youtube.com/embed/HV_WLz0pcO4?autoplay=0&mute=1&enablejsapi=1"
                 title ="9"
                 position="absolute"
                 width="30%"
                 id="myId"
                 height="400px"
                 frameborder="1" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen="true"></iframe>      
    </div>
    </div>
    )
}

export default About;