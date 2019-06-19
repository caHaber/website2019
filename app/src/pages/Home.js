import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../css/App.scss"


class Home extends Component {

    render() {
        return (
            <div id="home">

        <div id="legend">
            <p className="emoji">
                📓 school
            </p>
            <p className="emoji">
                💼 work 
            </p>
            <p className="emoji">
                🎨 freetime
            </p>

        </div>
    <div className="container-fluid" id="main">


      <div className="row">

        <div className="col-md-4 offset-md-0">


            <div className="iconDiv col-md-12">

            <h3>CONTACT </h3>
            <br/>
            <p className="link"><a className="git" href="http://www.github.com/caHaber" target="_blank">github/caHaber</a></p>
            <br/>
            
            <p className="link"><a className="git" href="mailto:haber.casey@gmail.com">haber.casey@gmail.com</a></p>
            <br/>
           
            <p className="link"><a className="git" href={process.env.PUBLIC_URL + "/img/CaseyHaber_resume2019.pdf"} target="_blank">Resume / CV</a></p>
            <br/>
            <p className="link"><a className="git" href="https://twitter.com/case_sqrd" target="_blank">twitter</a></p>
            <br/>

            <h3> 2018 - 2019 </h3>
            <br/>
             <p className="link"><Link className="git" to="/basketball">NBA Salaries 🎨</Link></p>
            <br/>
            <p className="link"><a className="git" href="https://osf.io/j28ev/" target="_blank">
            VISSOFT '19 (Preprint) 💼</a></p>
            <br/>
            <p className="link"><a className="git" href="https://www.twosixlabs.com/visualizing-programming-behaviors-with-stack-overflow/" target="_blank">
            Programming Behaviors Blog Post 💼</a></p>
            <br/>
            <p className="link"><a className="git" href="https://www.muse-portal.net/tools/reversecrowd" target="_blank">
            MUSE ReverseCrowd 💼</a></p>
            <br/>

            <h3>2016 - 2017 </h3>
            <br/>
            <p className="link"><a className="git" href="oldWebsite/SUYI" target="_blank">Exploring Academic Outcomes 📓</a></p>
            <br/>


            <p className="link"><a className="git react" href="oldWebsite/ZillowRenderDemo" target="_blank">Housing Render Demo 🎨</a></p>
            <br/>

            <p className="link"><a className="git react" title="Simple React transitioning, filter and search" href="oldWebsite/Reactd3" target="_blank">Simple ReactD3 Demo 🎨</a></p>
            <br/>

            <p className="link"><a className="git" href="oldWebsite/draw" target="_blank">SVG Draw! 🎨</a></p>
            <br/>

            <p className="link"><a className="git" href="oldWebsite/ReactAnimate" target="_blank">React Animations 🎨</a></p>
            <br/>

            <p className="link"><a className="git react" href="oldWebsite/GitReact" target="_blank">Github Fetch 🎨</a></p>
            <br/>
                       
            <p className="link"><a className="git" href="oldWebsite/project-docs/TranquilityTracker/" target="_blank">Tranquility Tracker 📓</a></p>
            <br/>

            <p className="link"><a className="git react" target="_blank" href="https://twitter.github.io/twitteross-metrics/">Twitter OSS Metrics Prototype 📓</a></p>
            <br/>



            </div>
        </div>

        <div className="col-md-5 content">

            <div className="paraT">
                    <p className="bio bio0">
                        My name is Casey Haber. I’m an engineer, designer and visualization specialist. I am focused on creating unique experiences that communicate the human perspective.  I have a long history in design and graphics. During my time at university, I quickly discovered my passion for using visualization as a storytelling medium. With this discovery I switched majors from design to computer science and began integrating technology and design in innovative ways. Currently I work as a Data Visualization Scientist and Research Engineer at Two Six Labs, where I am honing my ability to convey complex information as narrative-driven stories.
                        <br/>
                    
                    </p>
                    <br/>
                    <p className="bio bio1">
                        My passion for communication stems from my love of learning.  I derive intense satisfaction from helping people communicate their insights and perspectives. I continuously ask myself, “What are they seeing that makes them so driven?” Spending time among passionate people has allowed me to get closer to the core concepts behind that very question. In the future I want to help others communicate their interests and expertise by creating new technology and curricula that enable us all to become advanced storytellers. Shoot me an email if you need visualization prototyping, narrative-driven development, or if you would just like to chat about your passions!
                        <br/>
                    </p>
                    <br/>
                   {/* <br/>
                        <p><a onClick="toggleArchive()" className="textL archive-bio">
                            Click here to see my 2017 bio!
                        </a>
                        </p>
                    <br/>
                    <p className="bio bio2">
                    I am a active member of the <a className="textL" href="http://vgl.cs.usfca.edu/people/" target="_blank"> Visualization and Graphics Lab @ USF </a>. Last fall USF sent me to the VINCI conference to present one of our accepted papers and I have since presented the research in multiple settings. I worked as a Data Visualization intern at a small data-storytelling consulting firm in the summer of 2016 <a className="textL" href="CamusLogoWork/CamusLogoWork2/" target="_blank"> (Check out this interesting use of d3.force!) </a> I was then hired as a Engineering and Design student employee for the Enterprise Systems &amp; Applications division @ USF last year through this summer. Spring 2017, I worked as a teaching assistant for <a className="textL" href="https://github.com/usf-cs360-2017/lectures/wiki" target="_blank"> CS360 (Data Visualization) </a> while simultaneously doing visualization and research work for a USF History professor’s upcoming book, titled Democratizing the Market: Place, Power &amp; Politics in Early Philadelphia. Currently, I am the teaching assistant for CS315 Computer Architecture where we teach ARM v7 CPU implementation. This includes arm assembly programming, complete C emulation and digital design of the Armv7 instruction set. My current task is the creation of a story driven reporting system intended to monitor the health of open source projects. I am the project manager and head developer for this digital narrative. This project is in partnership with the open source program manager at twitter (See Twitter OSS Metrics Prototype.) My name is Casey and I want everyone to think critically about their passions. Shoot me an email for if need web/visualization prototyping, narrative driven development, or if you would just like to chat about similar passions!    
                    </p>*/}
               
            </div>


        </div>


    </div>
</div>
</div>);
    }

}

export default Home;