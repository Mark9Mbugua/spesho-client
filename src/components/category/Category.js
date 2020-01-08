import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategory } from '../../actions/category';

export class Category extends Component {
    static propTypes = {
        category: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getCategory(this.props.category.id);
    };

    render() {
        return (
            <div>
               <h1>{this.props.category.category_name}</h1>
               <p>{this.props.category.description}</p>
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    category: state.category.category
});

export default connect(mapStateToProps, { getCategory })
(Category);  