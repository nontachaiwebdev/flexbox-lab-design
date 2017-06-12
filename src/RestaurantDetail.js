import React, { Component } from 'react'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import './restaurantDetail.css'
import starIcon from './asset/star.png'

export default class RestaurantDetail extends Component {
  render () {
    return (
      <div>
        <TopNavigation></TopNavigation>
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
	<BottomNavigation />
      </div>
    )
  }
}
