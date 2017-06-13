import React, { Component } from 'react'
import TopNavigation from './TopNavigation'
import './favorite.css'
import starIcon from './asset/star.png'
import heartIcon from './asset/heart.png'

export default class Favorite extends Component {
  render(){
    return(
      <div>
        <div className='topNavigation'>
	  <p>FAVORITE</p>
	</div>
	<div className='favoriteContainer'>
	  <p className='title' >Favorite</p> 
	  <div className='favoriteResultBox'>
	    <div className='image'>
	      <div className='img'></div>
	    </div>
	    <div className='content'>
	      <div className='contentRow1'>
	        <div className='boxLeft'>
	          <p className='name'>Wanon Restaurant</p>
	          <p className='zone'>Phuket Town</p>
	          <p className='star'>
	            <img src={starIcon} />
	            <img src={starIcon} />
	            <img src={starIcon} />
	            <img src={starIcon} />
	            <img src={starIcon} /> 
	          </p>
	        </div>
	        <div className='boxRight'>
	          <img src={heartIcon} />	          
	          <div className='from'>
	            <p className='col1'>from</p>
	            <p className='money'>THB 500</p>
	          </div>
	        </div>
	      </div>
	      <div className='contentRow2'>
	        Add to my plan
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    )
  }
}
