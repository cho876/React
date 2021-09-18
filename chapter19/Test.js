import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

function Test({name,ram,cpu,homeButton}){

    if(homeButton){
        homeButton = 'true';
    }else{
        homeButton = 'false';
    }

    return(
        <div>
            <p>name: {name}</p>
            <p>ram: {ram}</p>
            <p>cpu: {cpu}</p>
            <p>homeButton: {homeButton}</p>
            <p>-----------------------</p>
        </div>
    )
}

Test.defaultProps={
    cpu:'cpu is empty'
};

Test.propTypes={
    name:PropTypes.string.isRequired,
    ram:PropTypes.number.isRequired,
    homeButton:PropTypes.string
};

export default Test;