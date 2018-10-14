import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';


// component functional
// class Playlist extends Component {
function Playlist(props) {

  // render() {
    // const playlist = props.playlist;
    // const title = props.title;
    // const description = props.description;

    // console.log(props);
    // console.log(playlist);
    return(
      <div className="Playlist">
        {
          props.playlist.map((item) => {
            // return <Media key={item.id} image={item.cover} title={item.title} author={item.author} type={item.type}/>
            return(
              <Media 
                handleClick={props.handleOpenModal}
                key={item.id}
                {...item}
              />
            )
          })
        }
      </div>
    )
  // }
}

export default Playlist;
