import React, { Component, Fragment } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStores } from '../../actions/stores';

export class Stores extends Component {
    state = {
        modal: false,
    };

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getStores();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <Fragment>
                <NavLink onMouseOver={this.toggle} href='#'>
                    Stores
                </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Stores</ModalHeader>
                    <ModalBody>
                        { this.props.stores.map(store =>(
                                <NavLink key={store.id} href={`api/v1/items/store/${store.id}`}>
                                    {store.store_name}
                                </NavLink>      
                        )) }
                    </ModalBody>
                </Modal>
            </Fragment>
        );    
    }
}

const mapStateToProps = state => ({
    stores: state.stores.stores
});

export default connect(mapStateToProps, { getStores })
(Stores);  