import React from 'react';
import T from 'prop-types'

import { iconsConfig   } from "./iconConfig";

export const Icon = ({ name, ...props }) => {
    const IconsC = iconsConfig[name];
    return <IconsC {...props} />
}


Icon.propTypes = {
    name: T.string.isRequired,
    size: T.string,
    color: T.string
}

Icon.defaultProps = {
    color: '#000000',   
    size: "30px"    
}