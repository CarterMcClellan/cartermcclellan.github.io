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
  
  // pulled from https://github.com/CarterMcClellan/Machine-Learning-Basics/blob/master/toc.py
  const cardMock = [{"title": "Loss", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/Loss/Entropy.ipynb"}, {"title": "NA/Matrix Methods", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/NA/Matrix%20Methods/QR%20Decomposition.ipynb"}, {"title": "DL/architecture", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/DL/architecture/MLP.ipynb"}, {"title": "ML/Support Vector Machine (SVM)", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/ML/Support%20Vector%20Machine%20(SVM"}, {"title": "ML/Bayesian Methods", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/ML/Bayesian%20Methods/Naive%20Bayes.ipynb"}, {"title": "ML/Decision Trees", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/ML/Decision%20Trees/Decision%20Trees%20-%20Overview.ipynb"}, {"title": "ML/Logistic Regression", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/ML/Logistic%20Regression/Logistic%20Regression%20-%20Overview.ipynb"}, {"title": "ML/Linear Regression", "link": "https://nbviewer.org/github/CarterMcClellan/Machine-Learning-Basics/blob/master/ML/Linear%20Regression/Linear%20Regression%20-%20Overview.ipynb"}]

  return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cardMock.map(item => {
          return <CardDemo title={item.title} link={item.link}/>
        })}
        
      </Masonry>
  )
}

export default Projects