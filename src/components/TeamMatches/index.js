import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './index.css';

const TeamMatches = () => 
{

  const params = useParams(); // Access route parameters directly
  useEffect(() => 
  {
    fetchDetails();
  }, []);

  const fetchDetails = async() =>
    {
        try 
        {
            const apiUrl = "https://apis.ccbp.in/ipl"
            const response = await fetch(`${apiUrl}/team-matches/${params.id}`); 
            const data = await response.json();
            console.log("Team Matches Data: ", data);   
        } 
        catch (error) 
        {
            console.log(`Exception error in fetchDetails ${error.message}`);    
        }
    }
  

  return (
    <div>
      Team Match Component
    </div>
  );
};

export default TeamMatches;
