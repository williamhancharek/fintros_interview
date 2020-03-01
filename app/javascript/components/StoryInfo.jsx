import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StoryInfo extends Component {
    constructor() {
        super();
        this.state = {story: {}};
        this.handleDelete = this.handleDelete.bind(this);
    }

componentdidMount() {
    fetch(`api/stories/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({story: data});
    })
    .catch(error => console.log('error', error));
}

handleDelete() {
    fetch(`api/stories/${this.props.match.params.id}`, {method: 'DELETE'})
    .then(() => {
        this.props.history.push("/stories")
    })
    .catch(error => console.log('error', error));
}

render() {
    return (
        <div>
            <h2>{this.state.story.id}: {this.state.story.title}</h2>
            <p>
                <Link to={`/stories/${this.state.story.id}/edit`} className="btn btn-outline-dark">Edit</Link>
                <button onClick={this.handleDelete}
                className="btn btn-outline-dark">Delete</button>
                <Link to="/stories" className ="btn bnt-outline-dark">Close</Link>
            </p>
            <hr/>
        </div>
    )
    }
}

export default StoryInfo;