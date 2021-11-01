import React from "react";
import "./index.css";
import classnames from "classnames";

class SidebarItem extends React.PureComponent {

    render() {
        const {onClick, title, isActive} = this.props;
        return (
            <div
                className={classnames("sidebar-item", {active: isActive})}
                onClick={onClick}
            >
                {title}
            </div>
        );
    }
}

export default SidebarItem

