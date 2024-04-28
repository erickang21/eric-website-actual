import React from 'react';

export type SocialLinkProps = {
    icon: React.ReactElement,
    name: string,
    url: string,
}

export type SocialLinksProps = {
    elements: SocialLinkProps[],
}
