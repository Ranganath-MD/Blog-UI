import React from 'react';
import Image from "../back.png"
class Home extends React.Component{
    render() {
        return (
            <div className="home">
                <p>User & User's Posts</p>
                <img src={Image} alt="background" width="100%" height="auto" />
            </div>
        )
    }
}

export default Home;