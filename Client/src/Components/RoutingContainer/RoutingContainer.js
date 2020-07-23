import React from 'react';
import { BrowserRouter as Router, NavLink as Link, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Team from '../Team/Team';

const RoutingContainer = (props) => {
    return (
        <Router>
            <div className="route_container">
                <ul className="navigation">
                    <li>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/team">
                            Team
                        </Link>
                    </li>
                </ul>

                <div className="route_content">
                    <Route path="/">
                        <Redirect to="/dashboard" />
                    </Route>
                    <Switch>
                        <Route exact path="/dashboard"
                            component={Dashboard}
                        />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/team" component={Team} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default RoutingContainer;