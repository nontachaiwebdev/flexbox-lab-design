import React, { Component } from 'react'
import './topNavigation.css'
import backIcon from './asset/back.png'
import cancelIcon from './asset/cancel.png'
import starIcon from './asset/star.png'

export default class TopNavigation extends Component {
  render () {
    return (
      <div>
        <div className='topbarContainer'>
	  <div className='inputControl'>
            <input type='text' value='Chalong' />
	    <div className='inputIconControl'>
	      <div className='backIcon'><img src={backIcon} /></div>
	      <div className='cancelIcon'><img src={cancelIcon} /></div>
            </div>
	  </div>
        </div>
        <div className='contentContainer'>
	  <div className='contentHeader'>Result by search 200 attractions</div>
	  <div className='resultContainer'>
            <div className='resultBox'>
	      <div className='resultImage'></div>
	      <div className='result'>
	        <div className='resultName'>Chalong Temple</div>
	        <div className='resultZone'>Phuket Town</div>
	        <div className='resultStar'>
	          <img src={starIcon} />
	          <img src={starIcon} />
	          <img src={starIcon} />
	          <img src={starIcon} />
	          <img src={starIcon} />
	        </div>
	      </div>
	      <div className='resultDistance'>
	        0.5 km
	      </div>
	    </div>
          </div>
        </div>
      </div>
    )
  }
}
