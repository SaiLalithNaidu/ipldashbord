import './index.css'

const MatchCard = (props) =>
{
  console.log(props);

    return(
        <div className='realtedmatchesParentDiv'>
            <div className='realtedmatchesDiv'>
            <div className='matchImgaLogo'>
                <img className="matchLogoForSuggestionsImg" src={props.competing_team_logo} alt="logo"/>
            </div>
            <div className='mainHeader'>
                <div>{props.competing_team}</div>
            </div>
            <div>
                <p>{props.result}</p>
            </div>
            <div>
                <p className={props.match_status}>{props.match_status}</p>
            </div>
        </div>
        </div>
        
    )
    
} 
    

export default MatchCard