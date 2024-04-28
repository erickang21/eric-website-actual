import React from 'react';
import "../css/components/Header.css";
import { SocialLinkProps } from "../types/types";
import GithubIcon from "../icons/github.png";
import SocialLinks from "./SocialLinks";
import { ReactComponent as SpotifyIcon } from "../icons/spotify.svg";

const Header = (): React.ReactElement => {
    const socialLinks: SocialLinkProps[] = [
        {
            name: "GitHub",
            url: "https://github.com/erickang21",
            icon: <GithubIcon />
        }
    ]
    return (
        <div className="header">
            <SpotifyIcon />
            <span className="title-text">eric kang</span>
            <span className="title-subtext">a full-stack developer with 7+ years of experience!</span>
        </div>
    )
}

export default Header;
