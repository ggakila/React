import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find Friends' />
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?cs=srgb&dl=pexels-regina-trissteria-13623557.jpg&fm=jpg" alt="" />
            <div className="userChatInfo">
                <span className="displayName">Asake</span>
            </div>
        </div>
       
    </div>
  )
}

export default Search