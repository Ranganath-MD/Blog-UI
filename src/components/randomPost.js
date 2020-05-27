import React from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"
import Image from "../cardimage.svg"
import {
    Card, CardImg, CardText, CardBody,
} from 'reactstrap';
class RandomPost extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: [],
            pending: false
        }
    }

    componentDidMount() {
        this.setState({ pending: true})
        var id = Math.round((Math.random()) * 10)
        if (id === 0) {
            id=1
        }
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => this.setState(() => ({ posts: response.data, pending: false })))
    }
    render(){
        return(
            <div className="list">
                <div className="row">
                    {
                        this.state.pending && <h2>Loading.........</h2>
                    }
                    {
                        this.state.posts.map(post => {
                            return (
                                <div className="col-xs-12 col-sm-6 col-md-3 column" key={post.id}>
                                    <Link to={`/posts/${post.id}`}>
                                        <Card>
                                            <CardImg top width="100%" src={Image} height="200px" alt="Card image cap" />
                                            <CardBody>
                                                <h4>{post.title}</h4>
                                                <CardText>{post.body}</CardText>
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

export default RandomPost