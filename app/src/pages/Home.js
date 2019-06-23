import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../css/Home.scss"

import logo from '../img/logo.svg'

class Home extends Component {

    render() {
        return (
            <div id="home">

    <div className="container-fluid" id="main">


      <div className="row">

        <div className="col-md-5 content">

            <div className="paraT">
                   
                  
                      <img className="logo" src={logo}/>
                        <br/>
                    <p className="bio bio0">
                        {/* My name is Casey Haber. I’m an engineer, designer and visualization specialist. I am focused on creating unique experiences that communicate the human perspective.  I have a long history in design and graphics. During my time at university, I quickly discovered my passion for using visualization as a storytelling medium. With this discovery I switched majors from design to computer science and began integrating technology and design in innovative ways. Currently I work as a Data Visualization Scientist and Research Engineer at Two Six Labs, where I am honing my ability to convey complex information as narrative-driven stories. */}
                        Engineer, designer, and visualization specialist. Focused on creating unique experiences that communicate a human perspective. 
                        <br/>
                    
                    </p>
                     {/* <h1 className="title-name">casey haber</h1> */}

            </div>


        </div>


         {/* <div className="col-md-7 "></div> */}

        <div className="col-md-7 link-div">


            <div className="iconDiv contact-links col-md-12">

                <h3>CONTACT </h3>
                {/* <br/> */}
                <p className="link"><a className="git" href="http://www.github.com/caHaber" target="_blank">github/caHaber</a></p>
                {/* <br/> */}
                
                <p className="link"><a className="git" href="mailto:haber.casey@gmail.com">haber.casey@gmail.com</a></p>
                {/* <br/> */}
               
                <p className="link"><a className="git" href={process.env.PUBLIC_URL + "/img/CaseyHaber_resume2019.pdf"} target="_blank">Resume / CV</a></p>
                {/* <br/> */}
                <p className="link"><a className="git" href="https://twitter.com/case_sqrd" target="_blank">twitter</a></p>
                
            </div>

             <div className="iconDiv recent-links col-md-12">
                <h3> 2018 - 2019 </h3>
                {/* <br/> */}
                 <p className="link"><Link className="git" to="/basketball">NBA Salaries</Link></p>
                {/* <br/> */}
                <p className="link"><a className="git" href="https://osf.io/j28ev/" target="_blank">
                VISSOFT '19 (Preprint)</a></p>
                {/* <br/> */}
                <p className="link"><a className="git" href="https://www.twosixlabs.com/visualizing-programming-behaviors-with-stack-overflow/" target="_blank">
                Programming Behaviors Blog Post</a></p>
                {/* <br/> */}
                <p className="link"><a className="git" href="https://www.muse-portal.net/tools/reversecrowd" target="_blank">
                MUSE ReverseCrowd</a></p>
            </div>


             <div className="iconDiv archive-links col-md-12">
            <h3>2016 - 2017 </h3>
            {/* <br/> */}
            <p className="link"><a className="git" href="archive/SUYI" target="_blank">Exploring Academic Outcomes</a></p>
            {/* <br/> */}


            <p className="link"><a className="git react" href="archive/ZillowRenderDemo" target="_blank">Housing Render Demo</a></p>
            {/* <br/> */}

            <p className="link"><a className="git react" title="Simple React transitioning, filter and search" href="archive/Reactd3" target="_blank">Simple ReactD3 Demo</a></p>
            {/* <br/> */}

            <p className="link"><a className="git" href="archive/draw" target="_blank">SVG Draw!</a></p>
            {/* <br/> */}

            <p className="link"><a className="git" href="archive/ReactAnimate" target="_blank">React Animations</a></p>
            {/* <br/> */}

            <p className="link"><a className="git react" href="archive/GitReact" target="_blank">Github Fetch</a></p>
            {/* <br/> */}
                       
            <p className="link"><a className="git" href="archive/project-docs/TranquilityTracker/" target="_blank">Tranquility Tracker</a></p>
            {/* <br/> */}

            <p className="link"><a className="git react" target="_blank" href="https://twitter.github.io/twitteross-metrics/">Twitter OSS Metrics Prototype</a></p>
            {/* <br/> */}
        </div>

          
        </div>



    </div>
</div>
</div>);
    }

}

export default Home;