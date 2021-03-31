import React, { useEffect, useState } from 'react'


const style = {
    main: {
        backgroundColor: 'white',
        width: '50%',
        height:'20vh',
        borderRadius: '30px'
    },
   friend: {
    padding: '25px',
    color: 'black'
    }
}

const AddFriends = () => {
    const [suggestedFriends, setSuggestedFriends] = useState()
    useEffect(()=> {
        const {suggestedFriends: friends} = {
            suggestedFriends:['Jaylen', 'Nick']
        }
        setSuggestedFriends(friends)
    },[null])
    return (
        <div style={style.main}>
            {['Jaylen', 'Nick'].map(friend => <label style={style.friend}>{friend}</label> )}
        </div>
    )
}

export default AddFriends