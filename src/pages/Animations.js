import React, { useRef, useState, useEffect,Component } from 'react'
import { Illustration, useZdog, Polygon, Shape, RoundedRect, useRender, Hemisphere, Path } from 'react-zdog'
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog'

import '../css/style.css'

const TAU = Math.PI /2

const StarPath = [{"x":0,"y":20},{"x":0,"y":20},{"x":23.511,"y":32.361},{"x":23.511,"y":32.361},{"x":23.511,"y":32.361},{"x":19.021,"y":6.18},{"x":19.021,"y":6.18},{"x":19.021,"y":6.18},{"x":38.042,"y":-12.361},{"x":38.042,"y":-12.361},{"x":38.042,"y":-12.361},{"x":11.756,"y":-16.18},{"x":11.756,"y":-16.18},{"x":11.756,"y":-16.18},{"x":0,"y":-40},{"x":0,"y":-40},{"x":0,"y":-40},{"x":-11.756,"y":-16.18},{"x":-11.756,"y":-16.18},{"x":-11.756,"y":-16.18},{"x":-38.042,"y":-12.361},{"x":-38.042,"y":-12.361},{"x":-38.042,"y":-12.361},{"x":-19.021,"y":6.18},{"x":-19.021,"y":6.18},{"x":-19.021,"y":6.18},{"x":-23.511,"y":32.361},{"x":-23.511,"y":32.361},{"x":-23.511,"y":32.361},{"x":0,"y":20},{"x":0,"y":20}]



 const PathString = [{"x":5.63671875,"y":382.078125},{"x":33.5980335,"y":350.958189},{"x":57.8572121,"y":318.470802},{"x":84.3789063,"y":286.492188},{"x":91.0675667,"y":278.427314},{"x":98.0348478,"y":270.46068},{"x":106.097656,"y":263.769531},{"x":108.338778,"y":261.909673},{"x":111.966132,"y":260.086333},{"x":114.527344,"y":261.472656},{"x":116.591855,"y":262.590127},{"x":115.488708,"y":266.248389},{"x":114.851563,"y":268.507813},{"x":113.938984,"y":271.743969},{"x":111.133793,"y":274.194495},{"x":110.042969,"y":277.375},{"x":104.6864,"y":292.993094},{"x":101.556151,"y":303.585685},{"x":101.8125,"y":319.28125},{"x":101.81956,"y":319.713484},{"x":102.895559,"y":319.656961},{"x":103.109375,"y":319.28125},{"x":109.913299,"y":307.325585},{"x":119.78893,"y":298.634042},{"x":127.265625,"y":286.457031},{"x":176.400889,"y":206.432284},{"x":48.3917061,"y":392.375595},{"x":178.488281,"y":212.347656},{"x":182.766179,"y":206.427892},{"x":183.274144,"y":191.437857},{"x":190.179688,"y":193.816406},{"x":197.23114,"y":196.245212},{"x":191.339137,"y":208.925232},{"x":189.625,"y":216.183594},{"x":182.853156,"y":244.858365},{"x":170.348724,"y":255.379256},{"x":172.539063,"y":283.316406},{"x":172.750965,"y":286.019161},{"x":174.716701,"y":278.244717},{"x":176.53125,"y":276.230469},{"x":182.169005,"y":269.972253},{"x":189.475569,"y":265.280612},{"x":194.722656,"y":258.691406},{"x":206.482087,"y":243.924107},{"x":208.796847,"y":208.951558},{"x":227.355469,"y":212.40625},{"x":249.546274,"y":216.537074},{"x":217.198999,"y":270.621206},{"x":230.355469,"y":286.582031},{"x":233.146415,"y":289.96788},{"x":232.82627,"y":277.633295},{"x":236.140625,"y":274.757813},{"x":250.943231,"y":261.915302},{"x":261.055489,"y":266.427089},{"x":271.582031,"y":246.730469},{"x":272.569994,"y":244.881853},{"x":271.295341,"y":241.387018},{"x":273.265625,"y":240.671875},{"x":279.721746,"y":238.328534},{"x":286.993281,"y":239.772242},{"x":293.773438,"y":238.675781},{"x":295.734036,"y":238.358721},{"x":297.628479,"y":237.526206},{"x":299.304688,"y":236.460938},{"x":301.898261,"y":234.812663},{"x":303.704051,"y":232.021539},{"x":306.441406,"y":230.625},{"x":308.951563,"y":229.344373},{"x":312.136219,"y":229.889993},{"x":314.65625,"y":228.628906},{"x":316.86819,"y":227.521996},{"x":318.009955,"y":224.824097},{"x":320.226563,"y":223.726562},{"x":321.328857,"y":223.180771},{"x":322.924238,"y":223.304958},{"x":323.902344,"y":224.050781},{"x":325.876316,"y":225.555971},{"x":327.29423,"y":227.759203},{"x":328.417969,"y":229.972656},{"x":333.227148,"y":239.445408},{"x":320.700774,"y":225.317757},{"x":332.257813,"y":234.675781},{"x":333.097497,"y":235.355695},{"x":333.96151,"y":236.353153},{"x":333.960938,"y":237.433594},{"x":333.88967,"y":371.993037},{"x":320.404986,"y":285.862458},{"x":341.339844,"y":344.367188},{"x":341.82547,"y":345.724324},{"x":340.325681,"y":347.667138},{"x":341.339844,"y":348.691406},{"x":346.16056,"y":353.560158},{"x":352.007298,"y":357.344475},{"x":357.804688,"y":360.996094},{"x":361.374669,"y":363.244728},{"x":365.899613,"y":363.798836},{"x":369.296875,"y":366.300781},{"x":376.028358,"y":371.258245},{"x":381.400283,"y":377.860901},{"x":387.878906,"y":383.144531},{"x":391.941441,"y":386.457725},{"x":396.78643,"y":388.725149},{"x":400.851563,"y":392.035156},{"x":402.988188,"y":393.77489},{"x":405.339978,"y":395.637053},{"x":406.363281,"y":398.195312},{"x":407.407622,"y":400.806164},{"x":406.579427,"y":403.815104},{"x":406.6875,"y":406.625}]


const LandScape = () => {
const ref = useRef();

return (<a.Shape ref={ref}  
    scale={.2} 
    path={makeZdogBezier(PathString)[0]} 
    // fill 
    stroke={2} 
    color={"blue"}/>)

}

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

const Switch = ({index}) => {
    switch(index) {
  case 0:
    return <FirstAnimaton/>
    break;
  case 1:
    return <StarsContainer stars={2}/>
    break;
  case 2:
    return <LandScape/>
  default:
    return <StarsContainer stars={20}/>
    // code block
} 
}


class Animations extends Component {
  state = {index: 0, total: 3}

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { index, total } = this.state

    console.log(e.keyCode)
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 37 && index > 0) {
      this.setState( prevState => ({
        index: prevState.index - 1
      }))
    } else if (e.keyCode === 39 && index < total - 1) {
      this.setState( prevState => ({
        index: prevState.index + 1
      }))
    }
  }
  render() {
    return (
      <div>
        <Illustration dragRotate element="canvas" zoom={8}>
          <Switch index={this.state.index}/>
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