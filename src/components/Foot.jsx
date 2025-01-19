import React from 'react'
import '../css/foot.css'

import RetroPC from '../assets/images/image-retro-pcs.jpg'
import TopLaptop from '../assets/images/image-top-laptops.jpg'
import GamingGrowth from '../assets/images/image-gaming-growth.jpg'


const Foot = () => {
  return (
    <div className='foot-container'>
        <div className="foot-item-1">
            <div className="foot-image">
                <img src={RetroPC} alt="Retro PC" />
            </div>
            <div className="foot-article">
                <p className='foot-id'>
                    01
                </p>
                <p className='foot-title'>
                    Reviving Retro PCs
                </p>
                <p className='foot-text-1'>
                    Whappens when old PCs are given modern upgrades?
                </p>
            </div>
        </div>
        <div className="foot-item-2">
            <div className="foot-image">
                <img src={TopLaptop} alt="Closeup keyboard" />
            </div>
            <div className="foot-article">
                <p className='foot-id'>
                    02
                </p>
                <p className='foot-title'>
                    Top 10 Laptops 2022
                </p>
                <p className='foot-text-2'>
                    Our best picks for various needs and budgets.
                </p>
            </div>
        </div>
        <div className="foot-item-3">
            <div className="foot-image">
                <img src={GamingGrowth} alt="Gaming controller" />
            </div>
            <div className="foot-article">
                <p className='foot-id'>
                    03
                </p>
                <p className='foot-title'>
                    The Growth of Gaming
                </p>
                <p className='foot-text-3'>
                    How the pandemic has sparked fresh opportunities
                </p>
            </div>
        </div>
    </div>
  )
}

export default Foot