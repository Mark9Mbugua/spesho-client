import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getItem } from '../../actions/items';
import {getItemVotes, createItemVote, deleteItemVote } from '../../actions/votes';


const CreateDislikeVote = ({ id, getItem, getItemVotes, votes, user, createItemVote, deleteItemVote, dislikes, modelType }) => {
    const [voteType] = useState(2);
    const [bgColor, setBgColor] = useState('');
    const [click, setClick] = useState(false);
    const userId = user ? user.id : null;
    //console.log(userId);
    // console.log(votes);
    useEffect(() => {
        // console.log(dislikes);
        getItem(id);
        getItemVotes(id);
    },[JSON.stringify(dislikes)]);


    const onDislikeClick = id => {
        if (!userId || voteType === 2 ) {
            createItemVote(id, voteType, modelType);
            setBgColor('red');
            setClick(true);
        }
    };

    const onDislikeUnclick = () => {
        if(userId || voteType === 2) {
            const voteIds = votes.map(vote => vote.user.id === userId ? vote.id : null);
            const voteId = voteIds[0];
            //console.log(voteId);
            deleteItemVote(voteId);
            setBgColor('');
            setClick(false);
        
        }
    };

    return (
        <div>
            <ThumbDownAltOutlinedIcon 
                onClick={() => click === false ? onDislikeClick(id): onDislikeUnclick()}
                style={{color: bgColor}} 
            /><span> {dislikes}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    votes: state.votes.votes,
    user: state.votes.user,
    userVoteType: state.votes.voteType,
    item: state.items.item
});

export default connect(mapStateToProps, { getItemVotes, getItem, createItemVote, deleteItemVote })
(CreateDislikeVote);
