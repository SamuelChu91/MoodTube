import React from 'react';
import { connect } from 'react-redux';

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props);
    }

}

const msp = state => {
    // debugger
    return {
        currentUser: state.session.user,
    }
};


export default connect(msp)(DropDownMenu);