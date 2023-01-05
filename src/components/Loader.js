import React from 'react'
import loading from './loading.gif';

const loader =()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt={"loading..."}></img>
      </div>
    )
}
export default loader;