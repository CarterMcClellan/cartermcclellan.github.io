import React from 'react'

function CV() {
  return (
    <div className="resume">
      <div className="sectionHeader"> 
          Hive.ai 
          <br></br>
          10/2021 - Present 
      </div>
      <br></br>
      <div className="experience"> 
        Currently, I work as a <b>Machine Learning Engineer</b> at <a href="https://thehive.ai/">Hive.ai</a>, 
        in San Fransisco, California. At Hive I am a part of the <a href="https://docs.thehive.ai/reference/web-intelligence-reverse-image-search-1">Web Intelligence</a> team, building, scalable, fast, and affordable vector database solutions.
      </div>
      <div className="experience">
        <ol>
          <li>By writing performant and scalable C++, I first made our existing Reverse Image Search solution 
            200% cheaper by reducing the memory footprint and memory mapping from disk. My team and I then 
            made the existing cheaper solution 3 times faster by writing a simple, scalable, distributed
             system in GoLang.
          </li>
          <li> By leveraging Apache Airflow, and Spark, my team was able to build a data pipeline
             which could scrape and serve a 10 billion image index daily. Our Data Pipeline
              ran in a heterogenous Hadoop Cluster, utilizing both GPU and CPU nodes simultaneously.
          </li>
        </ol>
        Technologies: Hadoop, Spark, Airflow
      </div>
      <br></br>

      <div className="sectionHeader"> 
          Finesse 
          <br></br>
          08/2020 - 10/2021  
      </div>
      <br></br>
      <div className="experience"> 
        Previously, I worked as a <b>Machine Learning Engineer</b> at <a href="https://www.forbes.com/sites/brookerobertsislam/2021/01/27/zara-meets-netflix-the-fashion-house-where-ai-replaces-designers-eliminating-overstock/?sh=392da03a33ed">Finesse</a>, 
        in Los Angeles, California. Within the Finesse Engineering department, we treated Fashion like any equities research department on Wall Street, predicting
        a bull or a bear using signals from across social media (customer alignment, product type, post engagement etc...)
      </div>
      <br></br>
      <div className="experience">
        As the first Engineering hire at Finesse, I helped to build our department from the ground up.
        <ol>
          <li>Architected the Finesse Data Pipeline. Tokenizing, Encoding and running Inference on over 1 billion comments, in 22 different languages on a cluster
            of 100 different nodes in less than 4 hours.
          </li>
          <li> Partnered with Head of Product to create product recommendation system. Leveraged Deep Neural Nets to select predict best selling collections. </li>
          <li> Researched Graph Neural Networks and applied them over TikTok and Instagram to predict customers, cluster influencers, and rank influencers.
          </li>
        </ol>
        Technologies: AWS Glue, PySpark
      </div>
      <br></br>


      <div className="sectionHeader"> 
          Janus Henderson Investors 
          <br></br>
          06/2019 - 08/2019 
      </div>
      <br></br>
      <div className="experience"> 
        Prior to Finesse I worked as a "quant" or <b>Multi Asset and Alternatives Intern</b> at Janus Henderson Investors, under the direction of Nobel Prize
        Winning economist Myron Scholes. Over my 2 months I
        <ol>
          <li>Authored performance visualization module to test Portfolio Optimizer and improve algorithm visibility to the clients.</li>
          <li>Part of the Portfolio Rebalance Team, responsible for adjusting multi-billion-dollar portfolio holdings according to Quantitative Models.</li>
        </ol>
        Technologies: Pandas, Numpy
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
          <li>Introduced a series of PySpark as part of a high-performance data ingestion pipeline.</li>
          <li>Developed scalable Web Application to preview datasets.</li>
        </ol>
        Technologies: PySpark
      </div>
      <br></br>

      <div className="sectionHeader"> 
          Min.io 
          <br></br>
          05/2017 - 08/2017 
      </div>
      <br></br>
      <div className="experience"> 
        In the summer of 2017, I worked as a <b> Software Engeering Intern </b> at Min.io.
        <ol>
          <li>Proposed and developed a unix-like find command for the MinIO client</li>
          <li>Collaborated with team of interns to improve code coverage by 5%</li>
          <li>Developed several Min.io sample REST applications</li>
        </ol>
        Technologies: GoLang, Minio
      </div>
      <br></br>


    </div>
    
  )
}

export default CV