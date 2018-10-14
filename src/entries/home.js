import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home'

// import Categories from './src/playlist/components/categories';
// import Playlist from './src/playlist/components/playlist';
// import Media from './src/playlist/components/media';
import data from '../api.json'

const HomeContainer = document.getElementById('home-container');

// const holaMundo = <h1>Hola Mundo!</h1>;

//ReactDOM.render(que render, donde render)
// render(<Media type="audio" title="Super Titulo" author="Nacho" image="./images/covers/bitcoin.jpg"/>, app);
render(<Home data={data}/>, HomeContainer);

// ReactDOM.render();

