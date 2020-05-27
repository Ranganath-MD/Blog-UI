import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css';

class ListAuthor extends React.Component{
    constructor(){
        super()
        this.state = {
            authors : []
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => this.setState(() => ({ authors : response.data })))
    }
    render(){
        return(
            <div className="list-authors">
                <h2 align='center'>Total Authors: {this.state.authors.length}</h2>
                <ul >
                    {
                        this.state.authors.map(author => {
                            return(
                                <div key={author.id}>
                                    <li key={author.id}><Link to={`/author/${author.id}`} className="author">{author.name}</Link></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListAuthor