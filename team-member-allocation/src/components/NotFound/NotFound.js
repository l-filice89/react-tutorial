import React from 'react';
import PropTypes from 'prop-types';


const NotFound = () => {
    return (
        <div className="row justify-content-center mt-3 mb-4">
            <div className="col-8">
                <h1 className="text-danger">404 - Page not found</h1>
            </div>
        </div>
    );
}

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
