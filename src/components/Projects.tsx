import React from 'react';
import "../css/components/Projects.css";


interface ProjectEntryProps {
    text: string;
    url: string;
    details: string[];
}

const ProjectEntry = ({ text, url, details }: ProjectEntryProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <span className="project-heading">►</span>
                <a className="project-heading" href={url} target="_blank">{text}</a>
            </div>
            <div className="flex flex-col">
                {details.map((detail, index) => <span key={index}>{`• ${detail}`}</span>)}
            </div>
        </div>
    );
};

const Projects = () => {
    const projectDetails: ProjectEntryProps[] = [
        {
            text: "uwu bot",
            url: "https://top.gg/bot/520682706896683009",
            details: [
                "A fun, anime-themed Discord bot designed to make communities a lot more fun!",
                "An extremely popular hit among Discord server owners! Used in 26,300 servers and a collective total of 1.3 million users.",
                "Tech Stack: Node.js, MongoDB, Google Cloud"
            ]
        },
        {
            text: "uwu cafe",
            url: "https://top.gg/bot/520682706896683009",
            details: [
                "An active community with over 1300 members in total!",
                "A REST API with key-based authentication built in Node.js and Express.",
                "Tech Stack: Node.js, Express, MongoDB, Canvas"
            ]
        },
    ]
    return (
        <div className="projects">
            {projectDetails.map((entry) => <ProjectEntry text={entry.text} url={entry.url} details={entry.details} />)}

        </div>
    );
};

export default Projects;
