import React from "react";
import './App.css';
import { Route, Link, Switch} from "react-router-dom"
import Drink from "./pages/Drink.js"
import Syrup from "./pages/Syrup.js"
import Tool from "./pages/Tool.js"
import Video from "./pages/Video.js"
import Home from "./pages/Home.js";
import { AppBar, IconButton, Typography, Button } from "@material-ui/core"
import  ToolBar  from "@material-ui/core/ToolBar"




function App() {
  //Backend URL
  const url = "https://express-bar-bible-api.herokuapp.com"

  const [drink, setDrink] = React.useState([])
  const [syrup, setSyrup] = React.useState([])
  const [tool, setTool] = React.useState([])
  const [video, setVideo] = React.useState([])


  // fetching from the gear API
  const getDrink = () => {
    fetch(url + "/drinks/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDrink(data);
      })
  }
  const getSyrup = () => {
    fetch(url + "/syrups/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSyrup(data);
      })
  }

  const getVideo = () => {
    fetch(url + "/videos/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setVideo(data);
      })
  }
  const getTool = () => {
    fetch(url + "/tools/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTool(data);
      })
  }


   // UseEffect to do initial fetch of gear
   React.useEffect(() => getDrink(), []);
   React.useEffect(() => getSyrup(), []);
   React.useEffect(() => getVideo(), []);
   React.useEffect(() => getTool(), []);
   

  return (
    <div>
        <AppBar postion='static'>
          <ToolBar>         
            <nav>
              <div>
                <a>Bar Bible</a>
                    <Link to="/">
                    <a>Home</a>
                    </Link>

                    <Link to="/drinks">
                      <a>Cocktail Recipes</a>
                    </Link>

                    <Link to="/syrups">
                      <a>Syrup Recipes</a>
                    </Link>

                    <Link to="/tools">
                      <a>Bar Gear</a>
                    </Link>

                    <Link to="/videos">
                      <a>Tutorials</a>
                    </Link>
              </div>
            </nav>
          </ToolBar>
        </AppBar>          
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Home/>} />
          <Route exact path="/drinks" render={(rp) => <Drink {...rp} drink={drink}/>} />
          <Route exact path="/syrups" render={(rp) => <Syrup {...rp} syrup= {syrup}/>}/>          
          <Route exact path="/tools" render={(rp) => <Tool {...rp} tool= {tool}/>}/>          
          <Route exact path="/videos" render={(rp) => <Video {...rp} video={video}/>}/>
        </Switch>
      </main>      
    </div>
  );
}

export default App;
