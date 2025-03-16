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
            const apiUrl = `https://apis.ccbp.in/ipl/team-matches/${params.id}`
            const response = await fetch(apiUrl); 
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
