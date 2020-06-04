import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { updateUserProfile } from '../../../../actions/auth';
import { 
    DateForm,
    DateButton,
    SetDate
} from './updateBirthDate.styles'; 
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateBirthDate extends Component {
    constructor (props) {
        super(props)
        this.state = {
            birth_date: new Date()
        };
    }

    formatDate = date => {
        let d = date;
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    };

    handleSubmit = e => {
        e.preventDefault();
        let { birth_date } = this.state; 
        const birthDate = this.formatDate(birth_date);
        birth_date = {birth_date: birthDate};
        console.log(birth_date);
        
        // update birth date via updateUser action
        this.props.updateUserProfile(birth_date);

    };

    handleChange = date => {
        this.setState({
            birth_date: date
        })
    };
 
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <DateForm>
                    <SetDate>
                        <DatePicker
                            selected={ this.state.birth_date }
                            onChange={ this.handleChange }
                            name="birthDate"
                            dateFormat="yyyy-MM-dd"
                        />
                    </SetDate>
                    <DateButton>Update</DateButton>
                </DateForm>
            </form>
        );
    }
  
}

const mapStateToProps = state => ({
    profile: state.auth.profile,
    error: state.errors
});

export default connect(mapStateToProps, { updateUserProfile })(UpdateBirthDate)