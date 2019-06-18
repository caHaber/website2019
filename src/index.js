import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'


const Home = React.lazy(() => import('./pages/Home'))
const Animations = React.lazy(() => import('./pages/Animations'))
const Basketball = React.lazy(() => import('./pages/Basketball'))

// TODO: Replace with full LoadingMessagg styled app later
const LoadingMessage = () => (
  "I'm loading..."
)

const Main = () => {
	return (
		<Router>
		  <div>
		   <Suspense fallback={<LoadingMessage />}>
        	<Switch>
	          <Route path="/animations">
	            <Animations />
	          </Route>

	          <Route path="/basketball">
	            <Basketball/>
	          </Route>
	  
	          <Route>
	            <Home path="/"/>
	          </Route>
	        </Switch>
	       </Suspense>
		  </div>
		</Router>
		)
}

ReactDOM.render(<Main/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
