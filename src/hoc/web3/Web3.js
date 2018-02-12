import React from 'react'
import getWeb3 from './confWeb3'

const withWeb3 = PassedComponent => class extends React.Component {
  constructor(props){
    super(props);
    this.state = {web3:null};
  }



  render () {
    const { web3 } = this.state;
    const Loading = <div>Loading Web3</div>;
    return web3?<Loading />:<PassedComponent web3={web3} />;
  }


  //Todo Today

  async componentDidMount () {
    try {
      console.log("first");
      const web3 = await getWeb3();
      this.setState({web3: web3});
    } catch (error) {
      alert(`Failed to load web3.`)
      console.log(error)
    }
  }






};

export default withWeb3;