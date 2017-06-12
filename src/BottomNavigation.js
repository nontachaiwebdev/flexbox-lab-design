import React, { Component } from 'react'
import './bottomNavigation.css'
import searchIcon from './asset/search.png'
import likeIcon from './asset/like.png'
import paperIcon from './asset/paper.png'
import inboxIcon from './asset/bubble.png'
import userIcon from './asset/user.png'

export default class BottomNavigation extends Component{
  render () {
    return (
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
    )
  }
}
