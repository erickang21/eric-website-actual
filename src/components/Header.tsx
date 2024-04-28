import React from 'react';
import "../css/components/Header.css";

const Header = (): React.ReactElement => {
    const imgLink: string = "https://media.discordapp.net/attachments/520734295112024064/1234209263128281108/1286139.png?ex=662fe672&is=662e94f2&hm=181b00810677405cdb4ef74a0fec78c206689f66172ca185c1d08e3412fd8b4b&=&format=webp&quality=lossless&width=1100&height=640";
    return (
        <div className="header">
            <span className="title-text">eric kang</span>
            <span className="title-subtext">a full-stack developer with 7+ years of experience!</span>
        </div>
    )
}

export default Header;
