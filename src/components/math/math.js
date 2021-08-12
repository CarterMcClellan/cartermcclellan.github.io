import React from 'react'
import Masonry from 'react-masonry-css'
import CardDemo from '../card/card'

function MathProjects() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };      
  
  const cardMock = [
    {title : 'Project Euler 1', description : 'Project Description'},
    {title : 'Project Euler 2', description : 'Project Description'},
    {title : 'Project Euler 3', description : 'Project Description'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Project Description'},
    {title : 'Project Euler 1', description : 'Project Description'},
    {title : 'Project Euler 2', description : 'Project Description'},
    {title : 'Project Euler 3', description : 'Project Description'},
    {title : 'Project Euler 4', description : 'Project Description'},
    {title : 'Project Euler 5', description : 'Project Description'},
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

export default MathProjects