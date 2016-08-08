import React from 'react';
import FilterLink from '../containers/FilterLink';
import * as actionTypes from '../actions/actionTypes';

const getFilterLink = (filterAction, child, prefix = ' ') => {
    return (
        <FilterLink filter={filterAction}>
            {child}
        </FilterLink>
    );
};

const Footer = () => {
    return (
        <p>
            Show:
            {" "} {getFilterLink(actionTypes.ACTION_SHOW_ALL, 'All')}
            {", "} {getFilterLink(actionTypes.ACTION_SHOW_ACTIVE, 'Active')}
            {", "} {getFilterLink(actionTypes.ACTION_SHOW_COMPLETED, 'Completed')}
        </p>
    );
};

export default Footer
