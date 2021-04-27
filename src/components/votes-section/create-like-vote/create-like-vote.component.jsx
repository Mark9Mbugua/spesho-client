import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { getItem } from '../../../actions/items';
import { getItemVotes, createItemVote, deleteItemVote } from '../../../actions/votes';


const CreateLikeVote = ({ id, getItem, getItemVotes, votes, user, createItemVote, deleteItemVote, likes, modelType }) => {
    const [voteType] = useState(1);
    const [bgColor, setBgColor] = useState('');
    const [click, setClick] = useState(false);

    const userId = user ? user.id : null;

    // console.log('comment votes', votes);
    
    useEffect(() => {
        // console.log(likes);
        getItem(id);
        getItemVotes(id);
    },[JSON.stringify(likes)]);

    const onLikeClick = id => {
        const userId = user ? user.id : null;
        if (!userId || voteType === 1 ) {
            createItemVote(id, voteType, modelType);
            setBgColor('blue');
            setClick(true);
        }
    };

    const onLikeUnclick = () => {
        if(userId || voteType === 1) {
            const voteIds = votes.map(vote => vote.user.id === userId ? vote.id : null);
            const voteId = voteIds[0];
            console.log(voteId);
            deleteItemVote(voteId);
            setBgColor('');
            setClick(false);
        }
    };
 
    return (
        <div>
            <ThumbUpAltOutlinedIcon 
                onClick={() => click === false ? onLikeClick(id): onLikeUnclick()}
                style={{color: bgColor}} 
            />
            <span > {likes}</span>
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
(CreateLikeVote);
