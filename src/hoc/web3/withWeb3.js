import React, { Component } from 'react';
import getWeb3 from './getWeb3';
import Spinner from './../../components/UI/Spinner/Spinner'

const withWeb3 = ( WrappedComponent ) => {
  return class extends Component {

    state = { web3: null }

    async componentDidMount () {
      try {
        const web3 = await getWeb3();
        this.setState({ web3 });
      } catch (error) {
        alert(`Failed to load web3.`)
        console.log(error)
      }
    }

    render () {
      const {web3}  = this.state;
      return web3 ? <WrappedComponent web3={web3} /> : <Spinner />
    }
  }
}

export default withWeb3