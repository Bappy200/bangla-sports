import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './TeamDetails.css'

function TeamDetails() {
    const {id} = useParams()
    const [team,setTeam] = useState({})

    useEffect(()=>{
        fetch(`https://thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[id]);

    console.log(team)
    const {strDescriptionEN,strTeamBadge,strTeamBanner} = team;
    return (
        
        <div className='team-deteails'>
            <div className ='team-deteails-header'>
                <img className='banner' src={strTeamBanner} alt=""/>
                <img className='logo' src={strTeamBadge} alt=""/>
            </div>
            <div className='deteails'>
                <div className='team-info'>
                    
                </div>
                <div className='team-img'>

                </div>
            </div>
        </div>
    )
}

export default TeamDetails
