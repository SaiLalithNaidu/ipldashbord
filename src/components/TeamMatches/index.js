import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './index.css';
import LatestMatch from '../LatestMatch';

const TeamMatches = () => 
{

  const params = useParams(); // Access route parameters directly
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => 
  {
    fetchDetails();
  }, []);

  const fetchDetails = async() =>
    {
        try 
        {
            const apiUrl = `https://apis.ccbp.in/ipl/${params.id}`
            const response = await fetch(apiUrl);
 
            const data = await response.json();
            console.log("Team Matches Data: ", data);
            setTeamsData(data);   
        } 
        catch (error) 
        {
            console.log(`Exception error in fetchDetails ${error.message}`);    
        }
    }
  

  return (
    <div>
      <LatestMatch teamsData={teamsData} teamId={params.id}/>
    </div>
  );
};

export default TeamMatches;
