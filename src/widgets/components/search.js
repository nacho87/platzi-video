import React from 'react';


// function Search(props) {
//   return(
//     <form>
//   )
// }


const Search = (props) => (
  <form 
    onSubmit={props.handlerSubmit}
    className='Search'

  >
    <input 
      type="text"
      placeholder='Busca tu video favorito'
      className='Search-input'
      name='search'
      ref={props.setRef}
      // defaultValue='Luis Fonsi'
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search;
