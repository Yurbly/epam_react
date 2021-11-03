import React from "react";
import "./index.css";
import SidebarItem from "./SidebarItem";
import sidebarItems from "../../consts/sidebarItems";

const items = [
    {key: "unique id 1", title: sidebarItems.counter},
    {key: "unique id 2", title: sidebarItems.search},
    {key: "unique id 3", title: sidebarItems.toggler}
]

class Sidebar extends React.Component {
    render() {
        const {currentScreen, setCurrentScreen} = this.props;

        return (
            <aside className="sidebar">
                {items.map(e =>
                    <SidebarItem
                        key={e.key}
                        title={e.title}
                        onClick={() => setCurrentScreen(e.title)}
                        isActive={currentScreen === e.title}
                    />)}
            </aside>
        );
    }
}

export default Sidebar

