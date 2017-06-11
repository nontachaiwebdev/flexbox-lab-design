import React, { Component } from 'react'
import './topNavigation.css'
import backIcon from './asset/back.png'
import cancelIcon from './asset/cancel.png'
import starIcon from './asset/star.png'
import searchIcon from './asset/search.png'
import likeIcon from './asset/like.png'
import paperIcon from './asset/paper.png'
import inboxIcon from './asset/bubble.png'
import userIcon from './asset/user.png'

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
	<div className='bottomMenu'>
	  <div className='menuButton'>
	    <img src={searchIcon} />
	    <p>EXPLORE</p>
	  </div>
	  <div className='menuButton'>
	    <img src={likeIcon} />
	    <p>SAVED</p>
	  </div>
	  <div className='menuButton'>
	    <img src={paperIcon} />
	    <p>TRIPS</p>
	  </div>
	  <div className='menuButton'>
	    <img src={inboxIcon} />
	    <p>INBOX</p>
	  </div>
	  <div className='menuButton'>
	    <img src={userIcon} />
	    <p>PROFILE</p>
	  </div>
	</div>
      </div>
    )
  }
}
