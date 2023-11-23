
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import routes from "./routes";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="container">
                <Switch>
                    {
                        routes.map((item) => {
                            return (
                                <Route key={item.path} path={item.path} component={item.component} exact></Route>
                            )
                        })
                    }
                </Switch>
            </div>
        </Router>
    );
}
export default App;
