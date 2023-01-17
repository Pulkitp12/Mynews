import React from 'react';
import {Link}  from "react-router-dom";
import {Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import "../components/css/sidebar.css";

const Side=(props)=> {
    const { collapseSidebar, toggleSidebar, toggled} = useProSidebar();
    const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
    }
    const active=(e)=>{
      let a=document.getElementsByClassName('mnt');
      let i=0;
      while(i<a.length){
        a[i].style.backgroundColor="";
        i=i+1;
      }
      e.currentTarget.style.backgroundColor="gainsboro";
    }
  
  return (
    <div className='sidebar'>
               <Sidebar style={{height: "100vh"}} defaultCollapsed={true} onMouseEnter={toggle} onMouseLeave={toggle} backgroundColor={props.mode==='light'?'#adad85':'gray'} transitionDuration={400}>
                    <Menu>
                      <div className='element'>
                    <h2 className='text-center category'><i className='fa fa-fw fa-hand-o-down'></i></h2>
                        <MenuItem component={<Link className='mnt' to="/business" onClick={active} />} ><i className="fa fa-fw fa-bitcoin"></i>Business</MenuItem>
                        <MenuItem component={<Link className='mnt' to="/entertainment" onClick={active} />} ><i className="fa fa-fw fa-television"></i> Entertainment</MenuItem>
                      <MenuItem component={<Link className='mnt' to="/general" onClick={active} />} ><i className="fa fa-fw fa-globe"></i> General</MenuItem>
                      <MenuItem component={<Link className='mnt' to="/health" onClick={active} />} ><i className="fa fa-fw fa-heartbeat"></i>Health</MenuItem>
                        <MenuItem component={<Link className='mnt' to="/science" onClick={active} />} ><i className="fa fa-fw fa-lightbulb-o"></i>Science</MenuItem>
                        <MenuItem component={<Link className='mnt' to="/sports" onClick={active} />}><i className="fa fa-fw fa-futbol-o"></i>Sports</MenuItem>
                      <MenuItem component={<Link className='mnt' to="/technology" onClick={active} />} ><i className="fa fa-fw fa-gears"></i>Technology</MenuItem>
                      </div>
                    </Menu>
                  </Sidebar>
          </div>
  )
}

export default Side;