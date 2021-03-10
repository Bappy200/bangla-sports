import React from 'react'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Team({idTeam, strAlternate, strTeam, strTeamBadge}) {
    return (
        <div className='team'>
            <div className='team-logo'>
                <img src={strTeamBadge} alt="logo"/>
            </div>
            <div className='team-info'>
                <h2>{strTeam}</h2>
                <p>{strAlternate}</p>
                <Link to={`/team/${idTeam}`}>
                    <button className='explorer-btn'>Explorer  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
            </div>
        </div>
    )
}

export default Team
