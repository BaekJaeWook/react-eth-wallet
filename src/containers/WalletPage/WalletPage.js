import React, { Fragment, Component } from 'react';

import WalletInfo from '../../components/Wallets/Wallet';
import AuthWindow from './../../components/AuthWindow/AuthWindow';
//import ErrorBoundary from './../../hoc/withErrorHandler/errorBoundary'

class WalletPage extends Component {

  state={
    showAuthWindow : false
  }

  showAuthWindow = (modalCurrState) => {
    this.setState({ showAuthWindow: modalCurrState });
  }

  render(){

    return (
      <Fragment>
        <WalletInfo />
        {this.state.showAuthWindow?<AuthWindow showAuthWindow={this.state.showAuthWindow} closeCb={this.showAuthWindow}/>:null}
      </Fragment>
    );
  }
}

export default WalletPage;