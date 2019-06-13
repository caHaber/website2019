import React, { useRef, useState, useEffect,Component } from 'react'
import { Illustration, useZdog, Polygon, Shape, RoundedRect, useRender, Hemisphere, Path } from 'react-zdog'
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog'

import '../css/style.css'

const TAU = Math.PI /2

const StarPath = [{"x":0,"y":20},{"x":0,"y":20},{"x":23.511,"y":32.361},{"x":23.511,"y":32.361},{"x":23.511,"y":32.361},{"x":19.021,"y":6.18},{"x":19.021,"y":6.18},{"x":19.021,"y":6.18},{"x":38.042,"y":-12.361},{"x":38.042,"y":-12.361},{"x":38.042,"y":-12.361},{"x":11.756,"y":-16.18},{"x":11.756,"y":-16.18},{"x":11.756,"y":-16.18},{"x":0,"y":-40},{"x":0,"y":-40},{"x":0,"y":-40},{"x":-11.756,"y":-16.18},{"x":-11.756,"y":-16.18},{"x":-11.756,"y":-16.18},{"x":-38.042,"y":-12.361},{"x":-38.042,"y":-12.361},{"x":-38.042,"y":-12.361},{"x":-19.021,"y":6.18},{"x":-19.021,"y":6.18},{"x":-19.021,"y":6.18},{"x":-23.511,"y":32.361},{"x":-23.511,"y":32.361},{"x":-23.511,"y":32.361},{"x":0,"y":20},{"x":0,"y":20}]

 // <Polygon radius={6} sides={8} stroke={2} color={'#EA0'} />
    // <Polygon radius={3} sides={5} stroke={1} color={'#EA0'} />

console.log(window.innerHeight)

const Star = ({x,y}) => {

  const [up, setUp] = useState(true)

  const [rotatepeed,setRotatespeed] = useState((Math.random() * .005) + .02 )

  useEffect(() => void setInterval(() => setUp(previous => !previous), Math.floor(Math.random() * 3000) + 1500 ), [])
  
  const { color, size } = useSpring({ size: up ? .3 : 0.025, color: up ? '#fff' : 'maroon'})
  

  const ref = useRef();
  let t = 0;

  useRender(() => {
    (ref.current.rotate.y = ((t += rotatepeed)));
    (ref.current.rotate.x = ((t += rotatepeed)));
  })


return (<a.Shape ref={ref} translate={{x:x, y:y}}  
    scale={size} 
    path={StarPath} 
    fill 
    stroke={.3} 
    color={color}/>)

}

// <a.Shape translate={{x:-5, y:-5}} ref={ref} scale={.05} path={StarPath} fill stroke={.3} color={'maroon'}/>
    

const StarsContainer = ({stars}) => {

  return (
    <div>
        {[...Array(stars).keys()].map(d => <Star key={d} x={Math.floor(Math.random() * 50) - 0 } y={Math.floor(Math.random() * 50) - 0 }/>) }     
    </div>)
}


function FirstAnimaton() {
 const [up, setUp] = useState(true)

  useEffect(() => void setInterval(() => setUp(previous => !previous), 1350), [])
  // Turn static values into animated values
  const { rotation, color, size } = useSpring({ size: up ? .8 : 0.2, color: up ? '#fff' : '#222', rotation: up ?  Math.PI : 0 })
  // useRender allows us to hook into the render-loop
  const ref = useRef();
  let t = 0;

  useRender(() => {
    (ref.current.rotate.y = Math.cos((t += 0.01)));
    (ref.current.rotate.x = Math.cos((t += 0.01)));
  })

  return (
         <a.Shape rotation={rotation} ref={ref} path={[{ x: -50 },{y:-20}, { x: 50 }, {y:20}, { z: -10 }, { z: 10 }]}  stroke={1} color={'purple'}>
            <a.Shape scale={size} path={[{ x: -10 },{y:0}, { x: 20 }, {y:20}, { z: 30 }, { z: -20 }]} stroke={1} color={color}/>
         </a.Shape>
          )
}




class Animations extends Component {
  render() {

    return (
      <div>
        <Illustration dragRotate element="canvas" zoom={8}>
          <StarsContainer stars={2}/>
        </Illustration>
      </div>
  );
  }
}



// Made by Chriss Gannon
// https://twitter.com/0xca0a/status/1138364751761870848

function makeZdogBezier(path) {
  let arr = []
  arr[0] = { x: path[0].x, y: path[0].y }
  for (let i = 1; i < path.length; i++)
    if (i % 3 === 0) arr.push({ bezier: [{ x: path[i - 2].x, y: path[i - 2].y }, { x: path[i - 1].x, y: path[i - 1].y }, { x: path[i].x, y: path[i].y }] })
  const maxX = Math.max(...path.map(d => d.x))
  const maxY = Math.max(...path.map(d => d.y))
  return [arr, { x: -maxX / 2, y: -maxY / 2 }]
}


export default Animations