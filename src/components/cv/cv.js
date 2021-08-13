import React from 'react'

function CV() {
  return (
    <div className="resume">
      <div className="sectionHeader"> 
          Finesse 
          <br></br>
          08/2021 - Present 
      </div>
      <br></br>
      <div className="experience"> 
        Currently, I work as a <b>Machine Learning Engineer</b> at <a href="https://www.forbes.com/sites/brookerobertsislam/2021/01/27/zara-meets-netflix-the-fashion-house-where-ai-replaces-designers-eliminating-overstock/?sh=392da03a33ed">Finesse</a>, 
        in Los Angeles, California. Within the Finesse Engineering department, we treat Fashion like any equities research department on Wall Street, predicting
        a bull or a bear using signals from across social media (customer alignment, product type, post engagement etc...)
      </div>
      <br></br>
      <div className="experience">
        As the first Engineering hire at Finesse, I've helped to build our department from the ground up.
        <ol>
          <li>Architected the Finesse Data Pipeline. Tokenizing, Encoding and running Inference on over 1 billion comments, in 22 different languages on a cluster
            of 100 different nodes in less than 4 hours.
          </li>
          <li> Partnered with Head of Product to create product recommendation system. Leveraged Deep Neural Nets to select predict best selling collections. </li>
          <li> Researched Graph Neural Networks and applied them over TikTok and Instagram to predict customers, cluster influencers, and rank influencers.
          </li>
        </ol>
        Technologies: Python, PyTorch, PySpark, Docker, AWS
      </div>
      <br></br>


      <div className="sectionHeader"> 
          Janus Henderson Investors 
          <br></br>
          06/2019 - 08/2019 
      </div>
      <br></br>
      <div className="experience"> 
        Prior to Finesse I worked as a "quant" or <b>Multi Asset and Alternatives Intern</b>  as Janus Henderson Investors, inder the direction of Nobel Prize
        Winning economist Myron Scholes. Over my 2 months I
        <ol>
          <li>Authored performance visualization module to test Portfolio Optimizer and improve algorithm visibility to the clients.</li>
          <li>Part of the Portfolio Rebalance Team, responsible for adjusting multi-billion-dollar portfolio holdings according to Quantitative Models.</li>
        </ol>
        Technologies: Python, Pandas, Numpy
      </div>
      <br></br>

      <div className="sectionHeader"> 
          PRGX Labs 
          <br></br>
          05/2018 - 08/2018 
      </div>
      <br></br>
      <div className="experience"> 
        In the summer of 2018, I worked as a <b> Software Engeering Intern </b> at PRGX Labs.
        <ol>
          <li>Introduced a series of Map Reduce jobs in Python as part of a high-performance data ingestion pipeline.</li>
          <li>Co-authored module to bridge data from database to Web Application in parallel speeding up existing code by 1800%.</li>
          <li>Developed scalable Web Application to preview datasets with up to 2,000,000,000 rows.</li>
        </ol>
        Technologies: Python, PySpark, Javascript
      </div>
      <br></br>

      <div className="sectionHeader"> 
          Min.io 
          <br></br>
          05/2017 - 08/2017 
      </div>
      <br></br>
      <div className="experience"> 
        In the summer of 2018, I worked as a <b> Software Engeering Intern </b> at Min.io.
        <ol>
          <li>Proposed and developed a unix-like find command for the MinIO client</li>
          <li>Collaborated with team of interns to improve code coverage by 5%</li>
          <li>Developed several Min.io sample REST applications</li>
        </ol>
        Technologies: Go, Docker
      </div>
      <br></br>


    </div>
    
  )
}

export default CV