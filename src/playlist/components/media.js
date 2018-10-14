import React, { PureComponent } from 'react';
// import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './media.css';


// class Media extends Component {
class Media extends PureComponent {
  

  //modo es6
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     author: props.author
  //   }
  //   // this.handleClick = this.handleClick.bind(this);
  // }


  //modo es7
  state = {
    author: this.props.author,
  }

//Arrow function toma el contexto del padre y permite usar this.props.title
  // handleClick = (event) => {
  //   console.log(this.props.title);

  //   this.setState({
  //     author: 'nachelloho',
  //   })
  // }

  render() {
    // const styles = {
    //   container: {
    //     color: '#44546b',
    //     cursor: 'pointer',
    //     width: 260,
    //     border: '1px solid red',
    //   }
    // }

    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" 
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
        </div>
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes ={
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
}

export default Media;
