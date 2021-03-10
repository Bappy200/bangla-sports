import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Team from '../Team/Team'

function Home() {
    const [teams, setTeams] = useState({})
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => console.log(data.teams))
        .catch(error => console.log(error))
    },[])
    return (
        <>
            <Header></Header>
            <Team></Team>
        </>
    )
}

export default Home
