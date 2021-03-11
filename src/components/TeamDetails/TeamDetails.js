import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './TeamDetails.css'
import teamBanner from '../../image/team.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSign, faMapMarkerAlt, faTransgenderAlt,faFutbol} from '@fortawesome/free-solid-svg-icons'
import maleImage from '../../image/male.png'
import femaleImage from '../../image/female.png'
import facebook from '../../image/Facebook.png'
import twitter from '../../image/Twitter.png'
import youtube from '../../image/YouTube.png'


function TeamDetails() {
    const {id} = useParams()
    const [team,setTeam] = useState({})

    useEffect(()=>{
        fetch(`https://thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[id]);

    const {strDescriptionEN,strDescriptionES,strTeamBadge,strTeamBanner,intFormedYear,strCountry,strFacebook,strTwitter,strYoutube,strTeam,strGender,strStadium} = team;
    return (

        // Team Details Section
        <div className='team-deteails'>
            <div className ='team-deteails-header'>
                {
                    strTeamBanner ? <img className='banner' src={strTeamBanner} alt=""/> : <img className='banner' src={teamBanner} alt=""/>
                }
                <img className='logo' src={strTeamBadge} alt=""/>
            </div>
            <div className='deteails'>
                <div className='team-content'>

                    <div className='team-information'>
                        <h2>{strTeam}</h2>
                        <p>{<FontAwesomeIcon icon={faSign}></FontAwesomeIcon>} Founded : {intFormedYear}</p>
                        <p>{<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>} Country : {strCountry}</p>
                        <p>{<FontAwesomeIcon icon={faTransgenderAlt}></FontAwesomeIcon>} Gender : {strGender}</p>
                        <p>{<FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>} Stadium : {strStadium}</p>
                    </div>

                    <div className='team-img'>
                        {
                            strGender === 'Male' ? <img src={maleImage} alt="img"/> : <img src={femaleImage} alt="img" />
                        }
                    </div>
                </div>
                <div className='description'>
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <br/>
                    <p>{strDescriptionES}</p>
                </div>
                <footer>
                    <li><a href={strFacebook}><img src={facebook} alt="icon"/></a></li>
                    <li><a href={strTwitter}><img src={twitter} alt="icon"/></a></li>
                    <li><a href={strYoutube}><img src={youtube} alt="icon"/></a></li>
                </footer>
            </div>
            
        </div>
    )
}

export default TeamDetails
