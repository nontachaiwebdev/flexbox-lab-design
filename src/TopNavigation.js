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

        <div className='topbarContainer'>
	  <div className='inputControl'>
            <input type='text' value='Chalong' />
	    <div className='inputIconControl'>
	      <div className='backIcon'><img src={backIcon} /></div>
	      <div className='cancelIcon'><img src={cancelIcon} /></div>
            </div>
	  </div>
        </div>

    )
  }
}
