import React from 'react';
import axios from 'axios';
import Image from "../cardimage.svg"
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
} from 'reactstrap';

class Posts extends React.Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState(() => ({ posts : response.data})))
    };
    render(){
        return(
            <div className="list">
                <h2>All Posts</h2>
                <div className="row">
                    {
                        this.state.posts.map(post => {
                            return (
                                <div className="col-xs-12 col-sm-6 col-md-3 column" key={post.id}>
                                    <Link to={`/posts/${post.id}`}>
                                        <Card>
                                            <CardImg top width="100%" src={Image} height="200px" alt="Card image cap" />
                                            <CardBody>
                                                <CardText>{post.title}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Posts