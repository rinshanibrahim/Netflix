import React from 'react'
import './InnerBanner.css'
import { Link } from 'react-router-dom'

const InnerBanner = () => {
  return (
    <div>
        <div className='inner-parent'>
            <div className='inner-wrapper'>
                 <div className='inner-nav'>
                    <div className='inner-nav-child1'>
                        <img src="./images/Logonetflix.png" alt="" />
                    </div>
                        <div className='inner-nav-child2'>
                            <ul>
                                <Link to={'http://localhost:3000/'} className='link-nav'>Home</Link>
                                <Link to={'http://localhost:3000/InnerPage'} className='link-nav'>Movies</Link>
                                <Link to={'#Home'} className='link-nav'>Tv Shows</Link>
                                <Link to={'#Home'} className='link-nav'>My List</Link>
                            </ul>
                        </div>
                        </div>
            <div className='inner-banner'>
                    <div className='inner-banner-child1'>
                        <h3>THRILLER | HORROR | TEEN PROGRAM</h3>
                        <h1>Stranger Things</h1>
                        <h5>2030 | DIRECTOR<b>:</b> <span style={{color: '#747474'}}>Duffer Brothers</span> | SEASONS<b>:</b> <span style={{color: '#747474'}}>15 (20 Episodes)</span></h5>
                        <h6>This thrilling Netflix orginal drama  starts Golden Globe-winning actress <br></br>
                        winona Ryder as joyse Byers, who lives in a small town.</h6>
                        <div className='banner-button'>
                            <Link to={'https://www.youtube.com/watch?v=mVsJXiI60a0'} className='link-btn-a'><button>STREAM NOW</button></Link>
                            <Link to={'https://www.justwatch.com/in/tv-show/stranger-things'} className='link-btn-b'><button>ALL EPISODES</button></Link>
                        </div>
                    </div>
                        </div>
            </div>

        </div>

    </div>
  )
}

export default InnerBanner