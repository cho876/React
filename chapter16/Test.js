import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

function Test({name,ram}){
    return(
        <div>
            <p>name: {name}</p>
            <p>ram: {ram}</p>
        </div>
    )
}

Test.propTypes={
    name:PropTypes.string.isRequired,
    ram:PropTypes.number.isRequired,
    homeButton:PropTypes.string
};

export default Test;