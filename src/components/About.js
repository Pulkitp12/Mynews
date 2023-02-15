import React from 'react';
import '../components/css/about.css';

const About = (props)=> {
            const fetchData = async() => {
                let a = document.getElementById('texts').value;
            //let url = `http://api.weatherstack.com/current?access_key=a01d3f01eaac2b10dee9b3ef6def5f35&query=NewYork&Access-Control-Allow-Origin`;
            let url = `http://api.weatherapi.com/v1/forecast.json?key=06504f79ccea494397191802231402&q=${a}&days=6&aqi=no&alerts=no`;
             let data = await fetch(url);
             let parseData= await data.json(); 
             if(parseData.error){
                document.getElementById('Pr').textContent="";
                document.getElementById('Tem').textContent="";
                document.getElementById('WS').textContent="";
                document.getElementById('WD').textContent="";
                document.getElementById('WDI').textContent="";
                document.getElementById('Hu').textContent="";
                document.getElementById('C').textContent="";
                document.getElementById('RF').textContent="";
                document.getElementById('UV').textContent="";
                document.getElementById('wea').textContent="";
                document.getElementById('city').textContent="";
                document.getElementById('coun').textContent="";
                document.getElementById('lat').textContent="";
                document.getElementById('lon').textContent="";
                document.getElementById('dta').style.display="none";
                document.getElementById('forecas').style.display="none";
                document.getElementById('sunr').textContent="";
                    document.getElementById('suns').textContent="";
                    document.getElementById('moonr').textContent="";
                    document.getElementById('moons').textContent="";
                    document.getElementById('moonp').textContent="";
                    document.getElementById('mooni').textContent="";
                document.querySelector(".incorr").style.display="block";
                setTimeout(()=>{
                    document.querySelector(".incorr").style.display="none";
                },5000)
             }
             else{
                document.getElementById('Pr').textContent=parseData.current.pressure_mb + " millibar";
                document.getElementById('Tem').textContent=parseData.current.temp_c;
                document.getElementById('Tem').innerHTML+="<sup>o</sup>C";
                document.getElementById('WS').textContent=parseData.current.wind_mph + " mph";
                document.getElementById('WD').textContent=parseData.current.wind_degree;
                document.getElementById('WDI').textContent=parseData.current.wind_dir;
                document.getElementById('Hu').textContent=parseData.current.humidity;
                let cld = parseData.current.cloud;
                let clds;
                if(cld===0){
                      clds = "No"
                }
                else{
                    clds = "Yes"
                }
                document.getElementById('C').textContent=clds;
                document.getElementById('RF').textContent=parseData.current.precip_mm + " mm";
                document.getElementById('UV').textContent=parseData.current.uv;
                document.getElementById('wea').textContent=parseData.current.condition.text;
                document.getElementById('city').textContent=parseData.location.name;
                document.getElementById('coun').textContent=parseData.location.country;
                document.getElementById('lat').textContent=parseData.location.lat;
                document.getElementById('lon').textContent=parseData.location.lon;
                document.getElementById('day1').textContent=parseData.forecast.forecastday[0].day.condition.text + " / " + parseData.forecast.forecastday[0].day.avgtemp_c;
                document.getElementById('day1').innerHTML += "<sup> o</sup>C"
                document.getElementById('day2').textContent=parseData.forecast.forecastday[1].day.condition.text + " / " + parseData.forecast.forecastday[1].day.avgtemp_c;
                document.getElementById('day2').innerHTML += "<sup> o</sup>C"
                document.getElementById('day3').textContent=parseData.forecast.forecastday[2].day.condition.text + " / " + parseData.forecast.forecastday[2].day.avgtemp_c;
                document.getElementById('day3').innerHTML += "<sup> o</sup>C"
                document.getElementById('day4').textContent=parseData.forecast.forecastday[3].day.condition.text + " / " + parseData.forecast.forecastday[3].day.avgtemp_c;
                document.getElementById('day4').innerHTML += "<sup> o</sup>C"
                document.getElementById('day5').textContent=parseData.forecast.forecastday[4].day.condition.text + " / " + parseData.forecast.forecastday[4].day.avgtemp_c;
                document.getElementById('day5').innerHTML += "<sup> o</sup>C"
                document.getElementById('day6').textContent=parseData.forecast.forecastday[5].day.condition.text + " / " + parseData.forecast.forecastday[5].day.avgtemp_c;
                document.getElementById('day6').innerHTML += "<sup> o</sup>C"
                document.getElementById('image1').src=parseData.forecast.forecastday[0].day.condition.icon;
                document.getElementById('image2').src=parseData.forecast.forecastday[1].day.condition.icon;
                document.getElementById('image3').src=parseData.forecast.forecastday[2].day.condition.icon;
                document.getElementById('image4').src=parseData.forecast.forecastday[3].day.condition.icon;
                document.getElementById('image5').src=parseData.forecast.forecastday[4].day.condition.icon;
                document.getElementById('image6').src=parseData.forecast.forecastday[5].day.condition.icon;
                document.getElementById('sunr').textContent=parseData.forecast.forecastday[0].astro.sunrise;
                document.getElementById('suns').textContent=parseData.forecast.forecastday[0].astro.sunset;
                document.getElementById('moonr').textContent=parseData.forecast.forecastday[0].astro.moonrise;
                document.getElementById('moons').textContent=parseData.forecast.forecastday[0].astro.moonset;
                document.getElementById('moonp').textContent=parseData.forecast.forecastday[0].astro.moon_phase;
                document.getElementById('mooni').textContent=parseData.forecast.forecastday[0].astro.moon_illumination;
                document.getElementById('rainch').textContent=parseData.forecast.forecastday[0].day.daily_chance_of_rain===0?"No":"Yes";
                 document.getElementById('forecas').style.display="block";
                document.getElementById('dta').style.display="block";
                 let icn = document.querySelectorAll("img");
                 for(let i=0;i<icn.length;i++){
                 icn[i].src = parseData.current.condition.icon;
                }
             }
           }
          
    return (
    <div id='divi'>
        <div className='allinfo d-flex justify-content-around'  style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
            <h4 className='maincontent'>City : <span id='city'></span></h4>
            <h4 className='maincontent'>Country : <span id='coun'></span></h4>
            <h4 className='maincontent'>Latitude : <span id='lat'></span></h4>
            <h4 className='maincontent'>Longitude : <span id='lon'></span></h4>
        </div>
            <div className='data mt-3' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>  
                <h4 className='maincontent  mx-4'>Temperature : <span className='mx-3' id="Tem"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Wind Speed : <span className='mx-3' id="WS"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Wind Degree : <span className='mx-3' id="WD"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Wind Direction : <span className='mx-3' id="WDI"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Pressure : <span className='mx-3' id="Pr"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Humidity : <span className='mx-3' id="Hu"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Rainfall : <span className='mx-3' id="RF"></span></h4>
                <h4 className='maincontent my-4 mx-4'>Cloudy : <span className='mx-3' id="C"></span></h4>
                <h4 className='maincontent  mx-4'>UV : <span className='mx-3' id="UV"></span></h4>
            </div>
            
            <div className='thun'></div>
            <div className='thun2'></div>
                <div className="crds card" style={props.mode==='light'?{width:"400px",height:"300px",backgroundColor:'aliceblue'}:{width:"400px",height:"300px",color:"white",border:"2px solid white",backgroundColor:'rgb(2, 2, 10)'}}>
                <div className="card-header text-center"><h3>Check Weather Stats</h3></div>
                <div className="card-body"> <h5 className='text-center'>Enter Your City below</h5>
                <input type="text" className="mt-4 form-control" id="texts" placeholder="Enter Your City..."/>
                <div className='incorr text-center mt-2'><h5>Enter Proper City Name</h5></div>
                <button className="btn btn-lg btn-info mt-5 form-control" onClick={fetchData}>Check</button>
                </div>
            </div>
            <div className='data2 text-center' id="dta" style={props.mode==='light'?{color:'black',border:'2px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'2px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <h4 className='maincontent weatype'>Current Weather Type : <span id='wea'></span></h4>
                <img className='imag' alt=''/>
                <img className='imag1' alt=''/>
                <img className='imag2' alt=''/>
                <img className='imag3' alt=''/>
                <img className='imag4' alt=''/>
            </div>  
            <div className='astro' id='astr' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <h2 className='my-4 text-center'>Astro</h2>
                <hr/>
                <h4 className='maincontent text-center mt-4'>Sunrise Time  :  <span id='sunr'></span></h4>
                <h4 className='maincontent text-center mt-4'>Sunset Time  :  <span id='suns'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moonrise Time  :  <span id='moonr'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moonset Time  :  <span id='moons'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moon Illumination  :  <span id='mooni'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moon Phase  :  <span id='moonp'></span></h4>
                <h4 className='maincontent text-center mt-4'>Chances of Rain  :  <span id='rainch'></span></h4>
            </div>
            <div className='fore my-3' id='forecas' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <div className='my-3 d-flex justify-content-around'>
                        <figure>
                        <figcaption className="fs-3 text-center">Today</figcaption>
                        <div className='text-center'><img id='image1' alt=""/></div>
                        <figcaption className="fw text-center" id='day1'></figcaption>
                        </figure>
                        <figure>
                        <figcaption className="fs-3 text-center">Tomorrow</figcaption>
                        <div className='text-center'><img id='image2' alt=""/></div>
                        <figcaption className="fw text-center" id='day2'></figcaption>
                        </figure>
                        <figure>
                        <figcaption className="fs-3 text-center">Day 3</figcaption>
                        <div className='text-center'><img id='image3' alt=""/></div>
                        <figcaption className="fw text-center" id='day3'></figcaption>
                        </figure>
                        <figure>
                        <figcaption className="fs-3 text-center">Day 4</figcaption>
                        <div className='text-center'><img id='image4' alt=""/></div>
                        <figcaption className="fw text-center" id='day4'></figcaption>
                        </figure>
                        <figure>
                        <figcaption className="fs-3 text-center">Day 5</figcaption>
                        <div className='text-center'><img id='image5' alt=""/></div>
                        <figcaption className="fw text-center" id='day5'></figcaption>
                        </figure>
                        <figure>
                        <figcaption className="fs-3 text-center">Day 6</figcaption>
                        <div className='text-center'><img id='image6' alt=""/></div>
                        <figcaption className="fw text-center" id='day6'></figcaption>
                        </figure>
                </div>
            </div>
    </div>
    )
}

export default About;