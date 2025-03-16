import './index.css';

const LatestMatch = ({ teamsData,teamId }) => {
  const { team_banner_url } = teamsData;
  const {latest_match_details} = teamsData;
  console.log(teamsData);

  if (!teamsData || !team_banner_url) {
    return <div>Missing data</div>;
  }

  return (
    <div className='latestMatchContainer'>
        <div className={teamId}>
            <div className='matchLogo'>
                <img src={team_banner_url} alt="matchLogo"/>
                <h1>Latest Matches</h1>
                <div className=''>
                    <h2>{latest_match_details.competing_team}</h2>
                    <h3>{latest_match_details.date}</h3>
                    <p>{latest_match_details.venue}</p>
                    <p>{latest_match_details.result}</p>
                    <hr></hr>
                    <h3>First Innings</h3>
                    <p>Runs: {latest_match_details.first_innings}</p>
                    <h3>Second Innings</h3>
                    <p>Runs: {latest_match_details.second_innings}</p>
                    <h3>Man Of The Match </h3>
                    <p>Runs: {latest_match_details.man_of_the_match}</p>
                    <h3>Umpires </h3>
                    <p>{latest_match_details.umpires}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LatestMatch;
