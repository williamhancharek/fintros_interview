// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Start extends React.Component {
  render() {
    return (
      <h1>ellsfdo</h1>
    );
  }
}

const Startt = props => (
  <div>Hello {props.name}!</div>
)

Start.defaultProps = {
  name: 'Davddid'
}

Start.propTypes = {
  name: PropTypes.string
}

ReactDOM.render(<Start />, document.getElementById('root'));
