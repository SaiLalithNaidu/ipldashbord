import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({ team }) => {

  return (
    <li className="team-card">
        <Link to={`/${team.id}`} className='cardDiv'>
            <img src={team.team_image_url} alt={team.name} />
            <p>{team.name}</p>
        </Link>
    </li>
  )
}

export default TeamCard
