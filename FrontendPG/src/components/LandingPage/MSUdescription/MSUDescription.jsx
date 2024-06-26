import React from 'react'
import techo from '../../../assests/techo-home.png';

import './MSUdescription.css';


const MSUDescription = () => {
  return (
    <div className='container-desc'>
    <div className="container-om grid grid-two-column">
      
      <div className="desc-image">
        <img src={techo} alt="techo image" className='techo-img'/>
      </div>

      <div className="desc-data">
        <h1 className='desc-head'>THE MAHARAJA SAYAJIRAO UNIVERSITY OF BARODA</h1>
        <p className='desc-para'>
        The Faculty of Technology and Engineering as its stands today was formed along with the establishment of The Maharaja Sayajirao University in 1949. It  is an outgrowth of what was popularly known as the Kala Bhavan Technical Institute (KBTI) established in June 1890 by late His Highness The Maharaja Sayajirao Gaekwad III of Baroda State. 
        {/* Initially the idea was to teach drawing, bleaching, dyeing, calico printing and carpentry, thus starting the School of Weaving in the year 1897 which subsequently expanded to  a course on dyeing. Prof. T. K. Gajjar was the first Principle of KBTI who built it with passion. */}
          </p>
          <button className='trview_moreee'>
            <a href="https://msubaroda.ac.in/academics/FTE" target='_blank'>Read More</a>
          </button>
      </div>
    </div>
    </div>
  )
}

export default MSUDescription;
