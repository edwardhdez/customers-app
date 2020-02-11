import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = ({ children }) => {
    return (
        <div className="customers-actions">
            <div>{children}</div>
        </div> 
    );
}

CustomersActions.prototype = {
    children: PropTypes.node.isRequired,
}

export default CustomersActions;
