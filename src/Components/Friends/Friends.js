import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';


const Friends = () => {
    const [friends , setFriends]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])
    return (

        <div> 
            <h1>Hello here all Of my Beloved Friends</h1>
            <div className='grid grid-cols-3 gap-3'>
           

        {
            friends.map(friend=><Friend 
                key={friend.id}
                friend={friend} 
            ></Friend>)
        }

    </div>
    </div>
       
    );
};

export default Friends;