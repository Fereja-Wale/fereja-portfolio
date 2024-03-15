import React from 'react'
import introduction from '../images/introduction.png'
import htmlcss from '../images/htmlcss.png'
import javascript from '../images/javascript.png'
import versioncontrol from '../images/versioncontrol.png'
import reactbasics from '../images/reactbasics.png'
export const Certificate = () => {
  return (
    <div className='section-box'>
        <h3 className='section-heading'>Certificates</h3>
        <h2 className='tagline'>
          I am Meta Front-End Developer Professional Certified
          <span className='color'> Developer</span>
        </h2>
        <div className='certificate'>
            <img src={introduction} alt="certificate"/>
        </div>
        {/* <div className='introduction'>
            <img src={introduction} alt="certificate"/>
        </div><br></br> */}
        <div className='certificate'>
            <img src={htmlcss} alt="certificate"/>
        </div><br></br>
        <div className='certificate'>
            <img src={javascript} alt="certificate"/>
        </div><br></br>
        <div className='certificate'>
            <img src={versioncontrol} alt="certificate"/>
        </div><br></br>
        <div className='certificate'>
            <img src={reactbasics} alt="certificate"/>
        </div>
    </div>
  )
}
