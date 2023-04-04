import React from 'react'
import './Bookmarks.css'

const Bookmarks = () => {
  return (
    <>
        <div className='headerB'>
                <h3 id='homeB'>Home</h3>
                <h3 id='bookmarkB'>Bookmarks</h3>
            </div>
            <div className='bookmarks'>
                <div className='bookmarkContainer'>
                    <h3>The human spirit must prevail over technology</h3>
                    <h5>-Albert Einstein</h5>
                </div>
                <div className='bookmarkContainer'>
                    <h3>The human spirit must prevail over technology</h3>
                    <h5>-Albert Einstein</h5>
                </div>
                <div className='bookmarkContainer'>
                    <h3>The human spirit must prevail over technology</h3>
                    <h5>-Albert Einstein</h5>
                </div>
            </div>
    </>
  )
}

export default Bookmarks