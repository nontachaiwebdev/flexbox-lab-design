import React, { Component } from 'react'
import './topNavigation.css'
import backIcon from './asset/back.png'
import cancelIcon from './asset/cancel.png'

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
        </div>
      </div>
    )
  }
}
