import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
        <div className='header'>
            <h3 id='home'>Home</h3>
            <h3 id='bookmark'>Bookmarks</h3>
        </div>
        <div className='container'>
            <div className='quoteContainer'>
                <h3>The human spirit must prevail over technology</h3>
                <h5>-Albert Einstein</h5>
            </div>
            <select id='dropdown'>
                <option> </option>
                <option>quote1</option>
                <option>quote2</option>
                <option>quote3</option>
                <option>quote4</option>
            </select>
            <button>Next Quote</button>
        </div>
    </>
  )
}

export default Home