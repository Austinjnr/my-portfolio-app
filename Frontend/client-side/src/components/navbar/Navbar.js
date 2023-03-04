import React from "react";
import Menu from "./Menu";
import About from "../card/Aboutme";
import Information from "../template/Infor";
import Resume from "../template/Resume";
import Projects from "../template/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navbar() {
    return (  
        <section>
            <Router>
                <Menu />
                <Switch>

                    <Route path="/" component={About} exact>
                        <About />
                    </Route>

                    <Route path="/about" component={Information} exact>
                        <Information />
                    </Route>

                    <Route path="/resume" component={Resume} exact>
                        <Resume />
                    </Route>

                    <Route path="/skills" component={Projects} exact>
                        <Projects />
                    </Route>

                </Switch>
            </Router>
         </section>
    );
}

export default Navbar;