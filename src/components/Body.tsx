import React from 'react';
import "../css/components/Body.css";
import Projects from "./Projects";

const Body = (): React.ReactElement => {
    return (
        <div className="select">
            <Projects />
        </div>
    );
}

export default Body;
