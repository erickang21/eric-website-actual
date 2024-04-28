import React from 'react';
import "../css/components/SocialLinks.css";
import { SocialLinkProps, SocialLinksProps } from "../types/types";



const SocialLink = ({ icon, name, url }: SocialLinkProps): React.ReactElement => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="social-link">
            {icon}
            {name}
        </div>
    </a>
);

const SocialLinks = ({ elements }: SocialLinksProps): React.ReactElement => (
    <div className="social-links">
        {elements.map((element) => <SocialLink icon={element.icon} name={element.name} url={element.url} />)}
    </div>
);

export default SocialLinks;
