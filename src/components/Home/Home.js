import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Team from '../Team/Team'
import './Home.css'

function Home(props) {  
    const footballTeams = props.footballTeams;
    return (
        
        <>
            <Header></Header>
            <div className='football-temas'>
                {
                   footballTeams.map(team => <Team {...team} key={team.idTeam}></Team>)
                }
            </div>
           
        </>
    )
}

export default Home
