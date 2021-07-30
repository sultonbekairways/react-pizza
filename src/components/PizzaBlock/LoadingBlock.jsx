import React from 'react'
import ContentLoader from 'react-content-loader';
// #ecebeb
const LoadingBlock = () => (
        <ContentLoader
            speed={1}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="black"
        >
            <circle cx="117" cy="128" r="120" />
            <rect x="0" y="260" rx="3" ry="3" width="240" height="26" />
            <rect x="1" y="298" rx="6" ry="6" width="239" height="100" />
            <rect x="125" y="408" rx="16" ry="16" width="113" height="32" />
            <rect x="3" y="412" rx="3" ry="3" width="75" height="26" />
        </ContentLoader>
    )


export default LoadingBlock
