import React, { Component, useEffect, useState, useRef,useContext,useLayoutEffect } from 'react'
import {useSpring, animated} from 'react-spring'
import { getAllColors, getFullName } from 'nba-color';

import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom'


import usePosition from '../utils/usePosition.js';

import styles from '../css/viz.module.css';

import {csv} from 'd3-fetch'
import {packSiblings} from 'd3-hierarchy'
import {scaleSqrt} from 'd3-scale'
import {format} from 'd3-format'

import logo from '../img/logo-dark.svg'
import '../css/Basketball.scss'


const Tooltip = ({ tooltip, top, left}) => {
    return (
        <div className={[styles.Tooltip, styles.Tooltipposition].join(' ')} style={{left:`${left + tooltip.pos[0]}px`, top: `${top + tooltip.pos[1]}px`}}>
            {!!tooltip.contents && (
                <div className={styles.Tooltipcontents}>
                    <p className={styles.tooltipname}>{tooltip.contents.name }</p>
                    <p className={styles.tooltipdesc}>Salary: {tooltip.contents.val }</p>
                    <p className={styles.tooltipdesc}>Signed Using: {tooltip.contents.signed }</p>
                    <p className={styles.tooltipdesc}>Age: {tooltip.contents.age }</p>
                </div>
            )}
        </div>
    )
}

///TOOLTIP START
const tooltipContext = React.createContext();
const tooltip_init = (contents,pos,active) => { 
		
	let obj = {contents, pos} 

	return obj

}

function useTooltip(){
  const [tooltip, setTooltip]= useState(tooltip_init(null,[0,0]));


  const resetTooltip = () => setTooltip(tooltip_init(null, [0,0]))

  return { tooltip, setTooltip, resetTooltip};
}

//TOOLTIPEND


const colorMap = getAllColors()

const moneyConverter = (d) => {
	let val = (d === "" ? 0 : Number(d.replace(/[^0-9\.]+/g, "")))

	return val
}

const formatMoney = format(".4s");

const PADDING = 3;


const size = scaleSqrt()
		.domain([0, 30000000])
		.range([0,50]);

const CircleLabel = ({name,r}) => {
	let size = '.9em',
		height = 15;
	if(r < 29){
		size = '.7em';
		height = 10
	}

 return (<text x="0" y="0" dy="0" fontSize={size} className={styles.namelabel}>
	 {name.split(' ').map((d,i) => <tspan key={i} x={0} dy={i*height}>{d}</tspan> )}
	 </text>)
}

function Circle({x,y,r, name,age,signed, showname, mainColor, secColor,active}){


	const {setTooltip, resetTooltip} = useContext(tooltipContext)

	const or = r < 0 ? 0 : r;

	const ox = x === undefined ? 0 : x;
	const oy = y === undefined ? 0 : y;


	const {dr, transform} = useSpring({to:{dr:or, transform:`translate(${ox},${oy})`}})


// onMouseOver={() => setTooltip({contents:name, pos:[ox + 175,oy + 175] })} 


	return (<animated.g 
						onMouseOver={() => {
							setTooltip({contents:{name,age,signed, val: formatMoney(size.invert(r + PADDING)) }, pos:[20,300], active:name }) 
						}} 
						onTouchStart={() => {
							if(active === name) {
								resetTooltip();
							} else
							setTooltip({contents:{name,age,signed, val: formatMoney(size.invert(r + PADDING)) }, pos:[20,300], active:name }) 
						}} 
						onMouseOut={() => resetTooltip()} 
						className="circle-group" 
						transform={transform}>	
				
				<animated.circle className={styles.node} fill={mainColor} opacity={name === active ?  .8 : .6} stroke={secColor} r={dr}>
				</animated.circle>
				{showname  ? <CircleLabel r={r} name={name}/> : null}
				</animated.g>)

}

function TeamCircles({width, height, salaries, year, isVisible,active}){

	const [data, setData] = useState(salaries)

	useEffect(() => {

		var newdata = {}
			newdata.mainColor = salaries.mainColor;

			newdata.secColor = salaries.secColor; 
			newdata.totals = salaries[salaries.length-1]

		newdata.children = salaries.children.map(d => {
			let obj = {...d}
			obj.r = size(obj[year])
			obj.showname = obj.r > 20 ? true : false;


			return obj
		})

		 packSiblings(newdata.children)

		 setData(newdata)

	},[year])

return isVisible ? (<g transform={`translate(${width/2},${height/2})`}> 
			{data && data.children.map((d,i)=> 

				<Circle mainColor={data.mainColor} secColor={data.secColor} 
						showname={d.showname} 
						name={d.Player} 
						key={i} 
						x={d.x} 
						y={d.y} 
						r={d.r - PADDING}
						age={d.age}
						signed={d.signed}
						active={active} />
		
				) }
		</g>) : null
}

const convertName = (n) => {

	let index = n.indexOf('\\');



	return n.substring(0,index)

}


const openBasketballRef = (name) => {

	window.open(`https://www.basketball-reference.com/contracts/${name}.html`)
}

function Team({team_data,team_names,width,height,year, isVisible}) {

	const [salaries, setSalaries] = useState(null)
	const ref = useRef()


	let {top, left} = usePosition(ref)

	useEffect(()=> {

		const my_team = team_data.Team;

		const abrv = team_names[my_team],
		     mainColor = colorMap[abrv].mainColor,
		     secColor = colorMap[abrv].secondaryColor;


		csv(`/data/teams/${team_data.Team}.csv`, function(d) {
				  return {

				   	Player: convertName(d.Player),
				   	age: d.Age,
				   	signed: d['Signed Using'],
				   	r: size(moneyConverter(d[year])),
				   	showname: size(moneyConverter(d[year])) > 20 ? true : false,
				   	'2018-19': moneyConverter(d["2018-19"]),
				   	'2019-20': moneyConverter(d["2019-20"]),
				   	'2020-21': moneyConverter(d["2020-21"]),
				   	'2021-22': moneyConverter(d["2021-22"]),
				   	'2022-23': moneyConverter(d["2022-23"]),
				   	'2023-24': moneyConverter(d["2023-24"]),
				  };
			}).then(d => {

			let root = {children: d.slice(0,d.length-1)};
	       

			let width = 300;
			  let height = 300;

			  	root.mainColor = mainColor;
			  	root.secColor = secColor;
			  	root.totals = d[d.length-1]

				setSalaries(root)
		}) 		

	},[])


	const tooltip_state = useTooltip()

	return (
		<tooltipContext.Provider value={tooltip_state}>
		<svg className={styles.bballteamsvg} width={width} height={height} ref={ref}>
			<text className={styles.titlelabel} onClick={() => openBasketballRef(team_names[team_data.Team])} dx="10" dy="20"> 
				{team_data.Team} - {salaries && `$${formatMoney(salaries.totals[year])} mil`} 
			</text>
				{salaries !== null && <TeamCircles active={tooltip_state.tooltip.active}  {...{year,width,height, isVisible}} salaries={salaries}/>}
		</svg>
		<Tooltip tooltip={tooltip_state.tooltip} top={top} left={left}/>
		</tooltipContext.Provider>)
}

const years = ['2018-19','2019-20','2020-21','2021-22','2022-23','2023-24']


const formatYear = (y) => {
	// if(window.innerWidth < 768){
		let y1 = y.substring(2,4),
			y2 = y.substring(y.length-2,y.length);

		return `'${y1}-'${y2}`
	// }
	// else return y
}

const YearClicker = ({year, setYear}) => { 

	return (<div className={styles.stepcontainer}>
		{years.map( (d,i) => <h2 key={i} className={styles.steptitle}onClick={() => setYear(i)} style={d === year ? {"textDecoration":"underline",color:'lightblue'} : null}>{formatYear(d)}</h2> )}
		</div>)
}

const LandingPage = ({next}) => {


	return <div>
				<h2> Welcome to the NBA salaries visualization </h2>
		 	</div>
}

class Basketball extends Component {


	state = {year: '2018-19',index:0,t:null, landing: true}


	setYear = (i) => {
		if(i !== -1){
			clearInterval(this.state.t)
			this.setState({year:years[i], index:i, t:null, })
		}
		else {

			this.setState(state => state.index === years.length - 1 ? {year:years[0], index:0} : {year:years[state.index + 1],index: state.index+1 })
		}
	}

	componentDidMount(){


		csv(`/data/all_salaries.csv`).then((data) => {
			csv(`/data/team_abrv.csv`).then((team_names) => {


				var map = {}

				team_names.forEach((d)=>{

					map[d.long] = d.short

				})

				this.setState({all_salaries: data, team_names: map})
			})		
		})



		var t = setInterval(()=>{
			this.setYear(-1)
		},3000)

		this.setState({t})

	}

	pauseOrPlay = () => {
		if(this.state.t !== null) {
			clearInterval(this.state.t)
			this.setState({t:null})
		}else {
			var t = setInterval(()=>{
				this.setYear(-1)
			},3000)
			this.setState({t})
		}
	}

	render(){
		return (<div id="basketball-viz"> 
					
					{this.state.landing ? 
					<>
						<YearClicker setYear={this.setYear} year={this.state.year}/>
						<p className={styles.pause} onClick={this.pauseOrPlay}>{this.state.t ? 'Pause' : 'Play'}</p>
						<div className={styles.vizcontainer}>
						{this.state.all_salaries && this.state.team_names && this.state.all_salaries.map( (d,i) => 
						<TrackVisibility offset={200} style={{"width":"370px", "display":"inline"}} partialVisibility key={i} >
							<Team team_names={this.state.team_names} year={this.state.year}  width={350} height={350} team_data={d}/>
						</TrackVisibility>
						)}
						</div> 
					</>
					: <LandingPage next={() => this.setState({landing: true})}/> }

					<Link to="/"> <img className="website-logo" src={logo}/> </Link>

				</div>)
	}
}

export default Basketball

