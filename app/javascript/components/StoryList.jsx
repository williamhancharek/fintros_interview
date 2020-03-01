import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class StoryList extends Component {
    constructor() {
        super();
        this.state = {stories:[],
                      hasMoreItems:true,
                      nextOffset: null};
    }

    loadItems(page) {
      var self = this;
      var url = 'api/stories'
      if(this.state.nextOffset) {
        url = url + this.state.nextOffset
      }
      fetch(url)
      .then(response => response.json())
      .then(data => {
        var stories = self.state.stories
        this.setState({nextOffset: data.nextOffset,
                      hasMoreItems: data.hasMoreItems})

      })
      .catch(error => console.log('error', error));
    }

componentDidMount() {
    fetch('api/stories')
    .then(response => response.json())
    .then(data => {
        this.setState({stories:data.stories});
    })
    .catch(error => console.log('error', error));
}

render() {
    return (
      <div>
        {this.state.stories.map((story) => {
          return(
            <div key={story.id}>
              <p><a target={story.url} href={story.url}>{story.title}</a></p>
              <hr/>
            </div>
          )
        })}
        <Link to="/stories/new" className="btn btn-outline-primary">Create Story</Link> 
      </div>
    );
  }
}

export default StoryList;