import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'

export default function Person(props) {
  const {username} = props.match.params
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
      async function fetchData() {
        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);
        
        if (response.status > 200) {
          console.log(response.statusText);
        } else {
          
          const data = await response.json();
          setUserData(data);
        }
      }
      fetchData();
    });

    if(!userData) return <p>Loading</p> 
    
    return (
      <Avatar 
        avatar_url={userData.avatar_url} 
        login={userData.login} 
        location={userData.location} 
        />
    )
}