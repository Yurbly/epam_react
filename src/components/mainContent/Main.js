import React, {useCallback} from "react";
import "./index.css";
import Counter from "./counter/Counter";
import sidebarItems from "../../consts/sidebarItems";
import Search from "./search/Search";
import Toggler from "./toggler/Toggler";

const Main = ({currentScreen}) => {

    const renderContent = useCallback(() => {
        switch (currentScreen) {
            case sidebarItems.search:
                return <Search/>;
            case sidebarItems.toggler:
                return <Toggler/>;
            default:
                return <Counter/>;
        }
    }, [currentScreen]);

    return (
        <div className="main-content">
            {renderContent()}
        </div>
    );
}

export default Main

