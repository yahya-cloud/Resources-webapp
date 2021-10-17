import React from 'react'

import './ProfileCard.css'
import ActionButtons from '../ActionButtons/ActionButtons'

const ProfileCard = (props) => {
  return (
    <aside class='profile-card'>
      <header>
        <a target='_blank' href='#'>
          <div
            style={{ backgroundImage: `url(${props.photo})` }}
            class='hoverZoomLink'
          />
        </a>

        <h1>{props.name}</h1>

        <h2>+91 {props.number}</h2>
      </header>

      <div class='profile-bio'>
        <div className='resourceInfo'>
          <h4>Remdesivir:</h4>
          <h5>{props.resources.remdesivir}</h5>
        </div>

        <div className='resourceInfo'>
          <h4>DOLO:</h4>
          <h5>{props.resources.dolo}</h5>
        </div>
      </div>

      <ActionButtons userInfo={props} />
      <button
        onClick={() => props.btnFunction(props.otherUserId)}
        className='requestBtn'>
        Resource Request
      </button>
    </aside>
  )
}

export default ProfileCard
