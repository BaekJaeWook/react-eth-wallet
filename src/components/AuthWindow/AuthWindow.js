import React, { Component } from 'react';

import Modal from './../../components/UI/Modal/Modal';
import classes from './AuthWindow.css';

class auth extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    CloseHandler = () => {
        this.props.closeCb(false);
    }

    render(){

        let modalData = null;
        if(this.props.showAuthWindow){
            modalData = (
                <Modal showBackDrop={this.props.showAuthWindow}>
                    <div className={classes.Header}>
                        <div className={classes.Title}>Please provide password</div>
                        <a className={classes.closeBtn} onClick={this.CloseHandler}><i className="fa fa-close"></i></a>
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.flexy}>
                            <input required placeholder="Your Acc Password" type="password" className={classes.AuthPwd} />
                        </div>
                        <div className={classes.SingCentered}>
                            <a onClick={this.UnlockAccount} className={classes.btnSuccess}> Submit</a>
                        </div>
                    </div>
                    <div></div>
                </Modal>
            );
        }
        return (
            modalData
        );
    };
}

export default auth;

