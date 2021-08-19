import React from 'react'
import Masonry from 'react-masonry-css'
import CardDemo from '../card/card'

function Projects() {
    const breakpointColumnsObj = {
        default: 7,
        1100: 5,
        700: 3,
        500: 1
      };      
  
  const cardMock = [
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title : 'Project Euler 2', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {title : 'Project Euler 3', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Project Description'},
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 2', description : 'Project Description'},
    {title : 'Project Euler 3', description : 'Project Description'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title : 'Project Euler 2', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {title : 'Project Euler 3', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Project Description'},
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 2', description : 'Project Description'},
    {title : 'Project Euler 3', description : 'Project Description'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {title : 'Project Euler 2', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {title : 'Project Euler 3', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Project Description'},
    {title : 'Project Euler 1', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
    {title : 'Project Euler 2', description : 'Project Description'},
    {title : 'Project Euler 3', description : 'Project Description'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  ]
  return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cardMock.map(item => {
          return <CardDemo title={item.title} description={item.description}/>
        })}
        
      </Masonry>
  )
}

export default Projects