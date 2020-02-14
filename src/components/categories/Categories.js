import React, { Component, Fragment } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categories';

export class Categories extends Component {

    state = {
        modal: false,
    };

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <Fragment>
                <NavLink onMouseOver={this.toggle} href='#'>
                    Categories
                </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Categories</ModalHeader>
                    <ModalBody>
                        { this.props.categories.map(category =>(
                                <NavLink key={category.id} 
                                href={`api/v1/items/category/${category.id}/`}>
                                    {category.category_name}
                                </NavLink>      
                        )) }
                    </ModalBody>
                </Modal>
            </Fragment>
        );    
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })
(Categories);  