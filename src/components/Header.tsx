import React from 'react';
import "../css/components/Header.css";
import { SocialLinkProps } from "../types/types";
import SocialLinks from "./SocialLinks";
import GithubIcon from "../icons/github.svg";
import LinkedinIcon from "../icons/linkedin.svg";
import EmailIcon from "../icons/email.svg";
import SpotifyIcon from "../icons/spotify.svg";


const Header = (): React.ReactElement => {
    const socialLinks: SocialLinkProps[] = [
        {
            name: "GitHub",
            url: "https://github.com/erickang21",
            icon: <GithubIcon />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/eric-kang-7052bb121/",
            icon: <LinkedinIcon />
        },
        {
            name: "Email",
            url: "mailto:eric.kang@uwaterloo.ca",
            icon: <EmailIcon />
        },
        {
            name: "Spotify",
            url: "https://open.spotify.com/user/bananaboy2121?si=2cac35b50f4e4eb5",
            icon: <SpotifyIcon />
        }
    ];
    return (
        <div className="header">
            <span className="title-text">eric kang</span>
            <span className="title-subtext">a full-stack developer with 7+ years of experience!</span>
            <SocialLinks elements={socialLinks} />
        </div>
    );
}

export default Header;
