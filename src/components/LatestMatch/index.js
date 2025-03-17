import MatchCard from '../MatchCard/index'
import NotFound from '../NotFound';
import './index.css';

const LatestMatch = ({ teamsData,teamId }) => {
  const { team_banner_url } = teamsData;
  const {latest_match_details} = teamsData;
  const {recent_matches} = teamsData
  console.log(teamsData);
  // console.log(recent_matches);

  if (!teamsData || !team_banner_url) {
    return <NotFound/>
  }

  return (
    <div className='latestMatchContainer'>
        <div className={teamId}>
            <div className='matchLogo'>
                <img src={team_banner_url} alt="matchLogo"/>
                <h1>Latest Matches</h1>
                <div className='matchDetailsDiv'>
                  <div className='detailsDiv'>
                    <div>
                      <h2>{latest_match_details.competing_team}</h2>
                      <h3>{latest_match_details.date}</h3>
                      <p>{latest_match_details.venue}</p>
                      <p>{latest_match_details.result}</p>
                    </div>
                    <div className='teaamLogo'>
                      <img src={latest_match_details.competing_team_logo} alt=''/>
                    </div>
                  </div>
                    <hr></hr>
                    <h2>First Innings</h2>
                    <p>Runs: {latest_match_details.first_innings}</p>
                    <h2>Second Innings</h2>
                    <p>Runs: {latest_match_details.second_innings}</p>
                    <h2>Man Of The Match </h2>
                    <p>Runs: {latest_match_details.man_of_the_match}</p>
                    <h2>Umpires </h2>
                    <p>{latest_match_details.umpires}</p>
                </div>
                <div className='suggestionsDiv'>
                {recent_matches?.map((match) => (
                  <MatchCard key={match.id} {...match} />
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default LatestMatch;
