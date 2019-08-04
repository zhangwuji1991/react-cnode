import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import About from './page/about';
import Api from './page/api';
import Getstart from './page/getstart';
import Topic from './page/topic';
import User from './page/user';
import Fotter from './components/fotter'

class App extends React.Component{
  render(){
    return (
          <BrowserRouter>
            <div>
            	<Header/>
                <Switch>
                	<Route path='/index'  component={Home}></Route>
                	<Route path='/login'  component={Login}></Route>
                  <Route path='/auth'  component={Register}></Route>
                	<Route path='/about'  component={About}></Route>
                  <Route path='/api'  component={Api}></Route>
                  <Route path='/topic/:id'  component={Topic}></Route>
                  <Route path='/user/:id' component={User}></Route>
                  <Route path='/getstart'  component={Getstart}></Route>
                </Switch>
              <Fotter/>
            </div>
        </BrowserRouter>
      )
  }
}

export default App;