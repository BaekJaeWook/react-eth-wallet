import React from 'react';
import withWeb3 from './../../hoc/web3/Web3';


const wallet = (props, { web3 }) => {


    return(

        <div>
                <h1>My Dapp</h1>
                <pre>{JSON.stringify(web3, null, 4)}</pre>
        </div>
            
    );
    
}

export default withWeb3(wallet);