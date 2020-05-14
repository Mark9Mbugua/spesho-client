import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import autosize from "autosize";
import { editComment } from '../../actions/comments';
import { EditCommentFormContainer } from './editCommentForm.styles';
import CommonEditForm from './CommonEditForm';

const EditCommentForm = (props) => {
    const contentRef = useRef()
    const [content, setContent] = useState(props.content);

    useEffect(() => {
        contentRef.current.focus();
        contentRef.current.setSelectionRange(contentRef.current.value.length, contentRef.current.value.length);
        autosize(contentRef.current);
    });
    
    const handleSubmit = e => {
        e.preventDefault();

        // edit comment via editComment action
        props.editComment(content, props.id);

        props.toggleEditForm();
    
    };

    return (
        <CommonEditForm 
            handleSubmit={handleSubmit}
            contentRef={contentRef}
            content={content}
            setContent={setContent}
            toggleEditForm={props.toggleEditForm}
        />
    )
}

export default connect(null, { editComment })(EditCommentForm);

