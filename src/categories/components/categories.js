import React from 'react';
import Category from './category';
import './categories.css'
import SearchContainers from '../../widgets/containers/search.js'


function Categories(props){
  return(
    <div className="Categories">
      <SearchContainers/>
      {
        props.categories.map((item)=> {
          return (
            <Category 
              handleOpenModal={props.handleOpenModal} 
              key={item.id}
              {...item}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
