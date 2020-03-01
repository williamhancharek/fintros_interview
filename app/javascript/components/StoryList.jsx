import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

class StoryList extends Component {
    constructor() {
        super();
        this.state = {stories:[],
                      hasMoreItems:true,
                      nextHref: null};
    }

    loadItems(page) {
      var self = this;

      var url = 'api/stories'
      if(this.state.nextHref) {
        url = this.state.nextHref;
      }

      fetch(url)
      .then(response => response.json())
      .then(data => {
        var stories = self.state.stories
        this.setState({stories:data})
      })


    }

componentDidMount() {
    fetch('api/stories')
    .then(response => response.json())
    .then(data => {
        this.setState({stories:data});
    })
    .catch(error => console.log('error', error));
}

render() {
  const loader = <div className="loader">Loading...</div>;

  var items = [];

  this.state.stories.map((story,i)) => {
    items.push(
      <div key={i}>
        <p><a href={story.url}>{story.title}</a></p>
      </div>
    )
  }


    return (
      <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}>

          <div className="tracks">
              {items}
          </div>
      </InfiniteScroll>
    );
    
  }
}

export default StoryList;