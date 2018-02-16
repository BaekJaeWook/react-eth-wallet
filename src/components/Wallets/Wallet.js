import React, { Fragment } from 'react';

import withWeb3 from './../../hoc/web3/withWeb3'



const wallet = (props) => {

    const str = "Web3 Loaded Succesfully, Version: " + props.web3.version;
    return (
        <Fragment>
        <h1>My Dapp</h1>
        <h5>{str}</h5>
        <p>Get Creative with your own imagination !!</p>
        </Fragment>
    )
    
};

export default withWeb3(wallet);