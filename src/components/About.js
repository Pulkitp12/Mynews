import React, {useState} from 'react';
import '../components/css/about.css';
import Loader from '../components/Loader';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;

const About = (props)=> {           
    const [loading,setLoading] = useState(false);
            const fetchData = async() => {
                if(document.getElementById('btncheck').textContent==="Clear"){
                    document.getElementById('texts').removeAttribute("disabled");
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
                        document.getElementById('CO').textContent="";
                        document.getElementById('NO').textContent="";
                        document.getElementById('O').textContent="";
                        document.getElementById('SO').textContent="";
                        document.getElementById('PM2').textContent="";
                        document.getElementById('PM10').textContent="";
                        document.getElementById('EPA').textContent="";
                        document.querySelector(".graph").style.display="none";
                        document.querySelector(".barg").style.display="none";
                        document.querySelector(".mixgraph").style.display="none";
                        document.querySelector(".data").style.display="none";
                    document.querySelector(".airq").style.display="none";
                    document.querySelector(".astro").style.display="none";
                    document.getElementById('btncheck').textContent="Check";
                }
              else 
              {  setLoading(true);
             let a = document.getElementById('texts').value;
             let url = `http://api.weatherapi.com/v1/forecast.json?key=${props.apikey}&q=${a}&days=6&aqi=yes&alerts=no`;
             let data = await fetch(url);
             let parseData= await data.json(); 
             setLoading(false);
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
                    document.getElementById('CO').textContent="";
                    document.getElementById('NO').textContent="";
                    document.getElementById('O').textContent="";
                    document.getElementById('SO').textContent="";
                    document.getElementById('PM2').textContent="";
                    document.getElementById('PM10').textContent="";
                    document.getElementById('EPA').textContent="";
                    document.querySelector(".graph").style.display="none";
                    document.querySelector(".barg").style.display="none";
                    document.querySelector(".mixgraph").style.display="none";
                    document.querySelector(".data").style.display="none";
                document.querySelector(".airq").style.display="none";
                document.querySelector(".astro").style.display="none";
                document.querySelector(".incorr").style.visibility="visible";
                setTimeout(()=>{
                    document.querySelector(".incorr").style.visibility="hidden";
                },3000)
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
                document.getElementById('CO').textContent=parseData.current.air_quality.co;
                document.getElementById('NO').textContent=parseData.current.air_quality.no2;
                document.getElementById('O').textContent=parseData.current.air_quality.o3;
                document.getElementById('SO').textContent=parseData.current.air_quality.so2;
                document.getElementById('PM2').textContent=parseData.current.air_quality.pm2_5;
                document.getElementById('PM10').textContent=parseData.current.air_quality.pm10;
                document.getElementById('EPA').textContent=parseData.current.air_quality["us-epa-index"];
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
                document.getElementById('dta').style.display="flex";
                Showgraph();
                const Bargraph=()=>{
                    let mintem = parseData.forecast.forecastday[0].day.mintemp_c;
                    let maxtem = parseData.forecast.forecastday[0].day.maxtemp_c;
                    var chart =new CanvasJS.Chart("barg",{
                      animationEnabled: true,
                      exportEnabled: true,
                      theme: `${props.mode+"1"}`, // "light1", "dark1", "dark2"
                      title:{
                          text: "Daily Temperature Variation"
                      },
                      axisY: {
                          title: "Temperature",
                          suffix: " degree C"
                      },
                      axisX: {
                          title: "Today",
                      },
                      data: [{
                          type: "bar",
                          dataPoints: [
                              { x: 1, y: mintem },
                              { x: 2, y: maxtem }        
                          ]
                      }]});
                      chart.render();
                }
                const mgraph=()=>{
                    let h2 = parseData.forecast.forecastday[1].day.maxwind_kph;
                    let h3 = parseData.forecast.forecastday[2].day.maxwind_kph;
                    let h1 = parseData.forecast.forecastday[0].day.maxwind_kph;
                    let h4 = parseData.forecast.forecastday[3].day.maxwind_kph;
                    let h5 = parseData.forecast.forecastday[4].day.maxwind_kph;
                    let h6 = parseData.forecast.forecastday[5].day.maxwind_kph;
                    let w1 = parseData.forecast.forecastday[0].hour[19].gust_kph;
                    let w2 = parseData.forecast.forecastday[1].hour[19].gust_kph;
                    let w3 = parseData.forecast.forecastday[2].hour[19].gust_kph;
                    let w4 = parseData.forecast.forecastday[3].hour[19].gust_kph;
                    let w5 = parseData.forecast.forecastday[4].hour[19].gust_kph;
                    let w6 = parseData.forecast.forecastday[5].hour[19].gust_kph;
                    var chart =new CanvasJS.Chart("mgraph",{
                      animationEnabled: true,
                      exportEnabled: true,
                      theme: `${props.mode+"1"}`, // "light1", "dark1", "dark2"
                      title:{
                          text: "Weekly Wind & Gust Variation"
                      },
                      axisY: {
                          title: "Wind",
                          suffix: "Kmph"
                      },
                      axisX: {
                          title: "Days",
                      },
                      data: [{
                          type: "spline",
                          name: "wind",
					      showInLegend: true,
                          dataPoints: [
                              { x: 1, y: h1 },
                              { x: 2, y: h2 },
                              { x: 3, y: h3 },
                              { x: 4, y: h4 },
                              { x: 5, y: h5 },
                              { x: 6, y: h6 }        
                          ]
                      },{
                        type: "spline",
                        name: "gust",
				    	showInLegend: true,
                          dataPoints: [
                              { x: 1, y: w1 },
                              { x: 2, y: w2 },
                              { x: 3, y: w3 },
                              { x: 4, y: w4 },
                              { x: 5, y: w5 },
                              { x: 6, y: w6 }        
                          ]
                      }]});
                      chart.render();
                }
                mgraph();
                Bargraph();
                document.querySelector(".graph").style.display="block";
                document.querySelector(".barg").style.display="block";
                document.querySelector(".mixgraph").style.display="block";
                document.querySelector(".data").style.display="flex";
                document.querySelector(".airq").style.display="block";
                document.querySelector(".astro").style.display="flex";
                 let icn = document.querySelectorAll("img");
                 for(let i=0;i<icn.length;i++){
                 icn[i].src = parseData.current.condition.icon;
                }}
                
             document.getElementById('btncheck').textContent="Clear"; 
             document.getElementById('texts').setAttribute("disabled","");
             }         }
           var tem1,tem2,tem3,tem4,tem5,tem6;
          const Showgraph=()=>{
              let temp1 = document.getElementById('day1').textContent.split('/')[1];
              tem1 = Number(temp1.split('o')[0]);
              let temp2 = document.getElementById('day2').textContent.split('/')[1];
              tem2 = Number(temp2.split('o')[0]);
              let temp3 = document.getElementById('day3').textContent.split('/')[1];
              tem3 = Number(temp3.split('o')[0]);
              let temp4 = document.getElementById('day4').textContent.split('/')[1];
              tem4 = Number(temp4.split('o')[0]);
              let temp5 = document.getElementById('day5').textContent.split('/')[1];
              tem5 = Number(temp5.split('o')[0]);
              let temp6 = document.getElementById('day6').textContent.split('/')[1];
              tem6 = Number(temp6.split('o')[0]);
              var chart =new CanvasJS.Chart("graph",{
                animationEnabled: true,
                exportEnabled: true,
                theme: `${props.mode+"1"}`, // "light1", "dark1", "dark2"
                title:{
                    text: "Weekly Temperature Variation"
                },
                axisY: {
                    title: "Temperature",
                    suffix: " degree C"
                },
                axisX: {
                    title: "Days",
                },
                data: [{
                    type: "line",
                    dataPoints: [
                        { x: 1, y: tem1 },
                        { x: 2, y: tem2 },
                        { x: 3, y: tem3 },
                        { x: 4, y: tem4 },
                        { x: 5, y: tem5 },
                        { x: 6, y: tem6 }           
                    ]
                }]});
                chart.render();
          }
          
    return ( 
    <div id='divi text-center py-5'>
        <div className='allinfo d-flex justify-content-around mx-3 px-4'  style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
            <h4 className='maincontent'>City : <span id='city'></span></h4>
            <h4 className='maincontent'>Country : <span id='coun'></span></h4>
            <h4 className='maincontent'>Latitude : <span id='lat'></span></h4>
            <h4 className='maincontent'>Longitude : <span id='lon'></span></h4>
        </div>
        {loading && <Loader/>}
           <div className='boxF'>
            <div className='data my-4 mx-3 boxS' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>  
                <h4 className='my-3 mx-3 maincontent'>Temperature : <span className='' id="Tem"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Wind Speed : <span className='' id="WS"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Wind Degree : <span className='' id="WD"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Wind Direction : <span className='' id="WDI"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Pressure : <span className='' id="Pr"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Humidity : <span className='' id="Hu"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Rainfall : <span className='' id="RF"></span></h4>
                <h4 className='my-3 mx-3 maincontent'>Cloudy : <span className='' id="C"></span></h4>
                <h4 className='my-3 mx-3 maincontent '>UV : <span className='' id="UV"></span></h4>
            </div>
            
             <div className=''>
                <div className="crds card my-4" style={props.mode==='light'?{width:"400px",height:"300px",backgroundColor:'aliceblue'}:{width:"400px",height:"300px",color:"white",border:"2px solid white",backgroundColor:'rgb(2, 2, 10)'}}>
                <div className='thun'></div>
                <div className="card-header text-center"><h3>Check Weather Stats</h3></div>
                <div className="card-body"> <h5 className='text-center'>Enter Your City below</h5>
                <input type="text" className="mt-4 form-control" id="texts" placeholder="Enter Your City..."/>
                <div className='incorr text-center mt-2'><h5>Enter Proper City Name</h5></div>
                <button className="btn btn-lg btn-info mt-2 form-control" id='btncheck' onClick={fetchData}>Check</button>
                </div>
            </div>
            <div className='data2' id="dta" style={props.mode==='light'?{color:'black',border:'2px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'2px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <h4 className='maincontent text-center'>Current Weather Type : <span id='wea'></span></h4>
            </div>  
            </div>
            <div className='astro my-4 boxS mx-3' id='astr' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <h2 className='my-3 text-center'>Astro</h2>
                <hr/>
                <h4 className='maincontent text-center mt-4'>Sunrise Time  :  <span id='sunr'></span></h4>
                <h4 className='maincontent text-center mt-4'>Sunset Time  :  <span id='suns'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moonrise Time  :  <span id='moonr'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moonset Time  :  <span id='moons'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moon Illumination  :  <span id='mooni'></span></h4>
                <h4 className='maincontent text-center mt-4'>Moon Phase  :  <span id='moonp'></span></h4>
                <h4 className='maincontent text-center mt-4'>Chances of Rain  :  <span id='rainch'></span></h4>
            </div>
            </div>
            <div className='my-3 mx-5' id='forecas' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                <div className='my-3 fore'>
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
            <div className='boxF my-4 mx-2'>
                <div className='airq mx-2' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                    <h2 className='text-center'>Air Quality</h2>
                        <ul>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>CO</h4>
                            <span className="" id='CO'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                            <h4>NO<sub>2</sub></h4>
                            <span className="fw2" id='NO'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>SO<sub>2</sub></h4>
                            <span className="fw2" id='SO'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>O<sub>3</sub></h4>
                            <span className="fw2" id='O'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>Particulate Matter<sub>2.5</sub></h4>
                            <span className="fw2" id='PM2'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>Particulate Matter<sub>10</sub></h4>
                            <span className="fw2" id='PM10'></span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                        <h4>US EPA index </h4>
                            <span className="fw2" id='EPA'></span>
                        </li>
                        </ul>
                </div>
              <div className='graph my-4 mx-2' id='graph' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}>
                
                </div>
                
            </div>
            <div className='boxF my-4 mx-2'>
            <div className='barg my-4 mx-2' id='barg' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}></div>
            <div className='mixgraph my-4 mx-2' id='mgraph' style={props.mode==='light'?{color:'black',border:'1px solid black',backgroundColor:'aliceblue'}:{color:'white',border:'1px solid white',backgroundColor:'rgb(2, 2, 10)'}}></div>
            </div>
    </div>
    )
}

export default About;