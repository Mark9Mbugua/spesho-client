import React, { useRef, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import autosize from "autosize";
import { updateUserProfile } from '../../../../actions/auth';
import { CreateReplyFormContainer } from '../../../commentSection/createReplyForm.styles';


const UpdateGenderModal = (props) => {
    const genderRef = useRef()
    let [gender, setGender] = useState(props.gender);
    console.log(props);
    console.log(gender);

    useEffect(() => {
        genderRef.current.focus();
        genderRef.current.setSelectionRange(genderRef.current.value.length, genderRef.current.value.length);
        autosize(genderRef.current);
    });
    
    const handleSubmit = e => {
        e.preventDefault();

        gender = {gender: gender};

        // update bio via updateUser action
        props.updateUserProfile(gender);

        //hide form on submission
        props.toggleGenderForm()
    
    };

    return (
        <CreateReplyFormContainer>
            <form className="reply-form" onSubmit={handleSubmit}>
                <textarea
                    className="reply-input" 
                    type='textarea'
                    name='bio'
                    id='bio'
                    ref={genderRef}
                    placeholder="Edit Gender..."
                    rows={1}
                    value={gender}
                    onChange={e => setGender(e.target.value)} 
                />
                <div className="reply-buttons">
                    <button 
                        className="cancel-button"
                        onClick={e => props.toggleGenderForm}
                    >
                        Cancel
                    </button>
                    <div className="divider" />
                    <button 
                        className='reply-button' 
                        type='submit' 
                        value='submit'
                    >
                        Save
                    </button>
                </div>
            </form>
        </CreateReplyFormContainer>
    )
}

export default connect(null, { updateUserProfile })(UpdateGenderModal);



