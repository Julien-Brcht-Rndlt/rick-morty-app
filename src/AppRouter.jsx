import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //install React Router: npm i react-router-dom
import Home from './components/Home'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'

export default function AppRouter() {

    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route exact path="/characters" component={CharacterList}/>

                    <Route path="/characters/:id" component={CharacterDetail}/>
                </Switch>
            </div>
        </Router>
    )
}