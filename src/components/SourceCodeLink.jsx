import React from 'react';
import Tooltip from './Tooltip';
import { PropTypes } from 'prop-types';

const SourceCodeLink = ({ url }) => {
    // component
    const TooltipContent = () => <><span>Launch github.dev* to see this page&apos;s source code.</span><br /><small>*github.com auth req&apos;d.</small></>

    return (
        <span className="relative">
            {/* Code Button */}
            {/* <TooltipContent /> is an ELEMENT or the instantiation of the component. */}
            <Tooltip position='bottom' content={<TooltipContent />}>
                <a
                    rel='noreferrer'
                    href={url}
                    target="_blank"
                    className="items-center justify-center py-1 px-1 bg-gray-800 text-gray-400 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 relative"
                >
                    <span className="text-lg font-bold">&lt;/&gt;</span>
                </a>
            </Tooltip>
        </span>
    );
};

SourceCodeLink.propTypes = {
    url: PropTypes.string.isRequired
}

export default SourceCodeLink;