import React from 'react'

const HobbyList = () => {
    const hobbyLinks = [
        'https://www.dndbeyond.com/',
        'https://www.homeofpoi.com/us/'
    ]

    return (
        <>
            <h3>My Favorite Hobbies</h3>
            <a href={hobbyLinks[0]}>D&D Beyond</a>
            <a href={hobbyLinks[1]}>Home of Poi</a>
        </>
    )
}

export default HobbyList