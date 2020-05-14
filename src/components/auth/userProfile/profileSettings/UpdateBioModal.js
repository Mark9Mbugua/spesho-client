import React, { useRef, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import autosize from "autosize";
import { updateUserProfile } from '../../../../actions/auth';
import { CreateReplyFormContainer } from '../../../commentSection/createReplyForm.styles';


const UpdateBioModal = (props) => {
    const bioRef = useRef()
    let [bio, setBio] = useState(props.bio);
    console.log(props);
    console.log(bio);

    useEffect(() => {
        bioRef.current.focus();
        bioRef.current.setSelectionRange(bioRef.current.value.length, bioRef.current.value.length);
        autosize(bioRef.current);
    });
    
    const handleSubmit = e => {
        e.preventDefault();
        bio = {bio: bio};
        // update bio via updateUser action
        props.updateUserProfile(bio);

        //hide form on submission
        props.toggleBioForm()
    
    };

    return (
        <CreateReplyFormContainer>
            <form className="reply-form" onSubmit={handleSubmit}>
                <textarea
                    className="reply-input" 
                    type='textarea'
                    name='bio'
                    id='bio'
                    ref={bioRef}
                    placeholder="Edit Bio..."
                    rows={1}
                    value={bio}
                    onChange={e => setBio(e.target.value)} 
                />
                <div className="reply-buttons">
                    <button 
                        className="cancel-button"
                        onClick={e => props.toggleBioForm}
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

export default connect(null, { updateUserProfile })(UpdateBioModal);


