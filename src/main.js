import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from './router'
import NestedRoutes from './components/nestedRoutes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map((route) => (
                            // 嵌套路由
                            <NestedRoutes {...route} key={route.path} />
                        ))
                    }
                    <Redirect from='/' to='/' />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
