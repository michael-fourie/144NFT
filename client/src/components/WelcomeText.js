import React, { Component } from "react";
import '../style/WelcomeText.css'
import logo from '../img/144.JPG'
class WelcomeText extends Component{
    
    render(){
        return(
            <div>
                <h1 className='title'>144NFT</h1>
                <p className="desc">A Collaborative Pixel Art Masterpiece on Ethereum</p>
            </div>
        )
    }
}

export default WelcomeText