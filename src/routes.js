import { Switch } from 'react-router-dom'
import RouterHandler from './components/routerHandler'
import Home from './pages/home'
import Crud from './pages/crud'
import NotFound from './pages/NotFound'

const Route = () => {
  return <Switch>

    <RouterHandler loggedAuthorize exact path="/">
            <Home />
    </RouterHandler>

        <RouterHandler authorize exact path="/crud">
                <Crud />
        </RouterHandler>

        <RouterHandler>
            <NotFound />
        </RouterHandler>

        </Switch>
}

export default Route
