import "./App.css";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        // BEM naming convention
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Router>
                        <Sidebar />

                        <Route path="/rooms/:roomId">
                            <Chat />
                        </Route>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
