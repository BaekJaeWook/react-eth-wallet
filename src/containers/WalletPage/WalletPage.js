import React, { Fragment, Component } from 'react';

import WalletInfo from '../../components/Wallets/Wallet';
import AuthWindow from './../../components/AuthWindow/AuthWindow';

class WalletPage extends Component {

  state={
    showAuthWindow : true
  }

  showAuthWindow = (modalCurrState) => {
    this.setState({ showAuthWindow: modalCurrState });
  }

  render(){

    return (
      <Fragment>
          <WalletInfo />
          {/*{this.state.showAuthWindow?<AuthWindow showAuthWindowCb={this.showAuthWindow}/>:null} */}
          <AuthWindow showAuthWindow={this.state.showAuthWindow} closeCb={this.showAuthWindow}/>
      </Fragment>
    );
  }
}

export default WalletPage;