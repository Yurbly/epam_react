import './App.css';
import React, {useState} from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/mainContent/Main";
import sidebarItems from "./consts/sidebarItems";

const App = () => {

    const [currentScreen, setCurrentScreen] = useState(sidebarItems.counter)

    return (<div className="App">
        {Header}
        <div className="main-section">
            <Sidebar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}/>
            <Main currentScreen={currentScreen}/>
        </div>
    </div>)
};

export default App;
