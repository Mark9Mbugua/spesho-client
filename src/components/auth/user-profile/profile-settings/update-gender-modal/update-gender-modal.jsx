import React, { useRef, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import autosize from "autosize";
import { updateUserProfile } from '../../../../../actions/auth';
import { 
    CreateReplyFormContainer,
    ReplyForm,
    ReplyInput,
    ReplyButtons,
    Divider,
    ReplyButton,
    CancelButton
} from '../../../../comment-section/create-reply-form/create-reply-form.styles';


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
            <ReplyForm onSubmit={handleSubmit}>
                <ReplyInput
                    type='textarea'
                    name='bio'
                    id='bio'
                    ref={genderRef}
                    placeholder="Edit Gender..."
                    rows={1}
                    value={gender}
                    onChange={e => setGender(e.target.value)} 
                />
                <ReplyButtons>
                    <CancelButton 
                        onClick={e => props.toggleGenderForm}
                    >
                        Cancel
                    </CancelButton>
                    <Divider />
                    <ReplyButton 
                        type='submit' 
                        value='submit'
                    >
                        Save
                    </ReplyButton>
                </ReplyButtons>
            </ReplyForm>
        </CreateReplyFormContainer>
    )
}

export default connect(null, { updateUserProfile })(UpdateGenderModal);



