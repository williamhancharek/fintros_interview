import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {stories:[],
                      hasMoreItems:true,
                      nextOffset: null};
    }

    loadItems(page) {
      var self = this;
      this.state.nextOffset = page*30
      var url = 'api/stories' + '?offset=' + this.state.nextOffset

      fetch(url)
      .then(response => response.json())
      .then(data => {
        var stories = self.state.stories
        data.stories.map((story) => {
          stories.push(story);
        });
        this.setState({hasMoreItems: data.hasMoreItems});
      })
    }

    render() {
      const loader = <div className="loader" key="unique">Loading...</div>;
      var items = [];
      
      this.state.stories.map((story,i) => {
        items.push(
        <div key={i}>
          <p><a target={story.url} href={story.url}>{story.title}</a></p>
        </div>
      );
    });
    
    return (
      <div style={{overflow:"auto"}}>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}>

          <div className="stories">
            {items}
          </div>
        </InfiniteScroll>
      </div>

    );
  }
}

export default StoryList;