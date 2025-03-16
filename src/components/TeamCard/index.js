// import {link} from 'react-router-dom'
import './index.css'

const TeamCard = ({ team }) => {

  return (
    <li className="team-card">
        <div className='cardDiv'>
            <img src={team.team_image_url} alt={team.name} />
            <p>{team.name}</p>
        </div>
    </li>
  )
}

export default TeamCard
