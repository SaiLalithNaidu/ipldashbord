import { useEffect, useState } from 'react'
import '../Home/index.css'
import TeamCard from '../TeamCard'

const Home = () => {
  const [isLoading, setLoading] = useState(true) // Start with loading true
  const [teamsList, setTeamsList] = useState([])

  useEffect(() => {
    const fetchTeamsList = async () => {
      try {
        const url = "https://apis.ccbp.in/ipl"
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const jsonData = await response.json()
        console.log('Fetched Data:', jsonData) // Debugging log
        
        // Ensure the teams list is available
        if (jsonData.teams) {
          setTeamsList(jsonData.teams)
        } else {
          throw new Error("Teams data not found in response")
        }
      } 
      catch (error) {
        console.error(`Error: ${error}`)
        alert('Failed to fetch teams list. Please try again later.') // Debugging alert
        setTeamsList([]) // Set to empty array if an error occurs
      } 
      finally {
        setLoading(false) // Stop loading state
      }
    }

    fetchTeamsList()
  }, [])

  const renderTeamsList = () => (
    <div className='TeamsListDiv'>
      {teamsList.length > 0 ? (
        <ul className='teamsUl'>
          {teamsList.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </ul>
      ) : (
        <p>No teams found</p>
      )}
    </div>
  )

  const renderLoadingDiv = () => (
    <div className="loading-spinner" data-testid="loader">
      <div className="spinner"></div>
      <p>Loading teams...</p>
    </div>
  )

  return (
    <div className="homeMainDiv">
      <div className="headerDiv">
        <img 
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" 
          alt="ipl logo"
        />
        <h1>IPL Dashboard</h1> 
      </div>
      <div className="content-container">
        {isLoading ? renderLoadingDiv() : renderTeamsList()}
      </div>
    </div>
  )
}

export default Home
