import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { getItem } from '../../actions/items';
import { getVotes, createItemVote, deleteItemVote } from '../../actions/votes';


const CreateLikeVote = ({ id, getItem, getVotes, votes, user, createItemVote, deleteItemVote }) => {
    const [voteType] = useState(1);
    const [bgColor, setBgColor] = useState('');
    const [click, setClick] = useState(false);
    const likes = votes.filter(vote => vote.vote_type === 1);
    const userId = user ? user.id : null;

    const onLikeClick = id => {
        // const voters = votes.map(vote => vote.user);
        const userId = user ? user.id : null;
        if (!userId || voteType === 1 ) {
            createItemVote(id, voteType);
            setBgColor('blue');
            setClick(true);
        }
    };

    const onLikeUnclick = () => {
        if(userId || voteType === 1) {
            const voteIds = votes.map(vote => vote.user.id === userId ? vote.id : null);
            const voteId = voteIds[0];
            //console.log(voteId);
            deleteItemVote(voteId);
            setBgColor('');
            setClick(false);
            console.log(click);
        }
    };

    useEffect(() => {
        console.log(likes);
        getItem(id);
        getVotes(id);
    },[JSON.stringify(likes)]);
 
    return (
        <div>
            <ThumbUpAltOutlinedIcon 
                onClick={() => click === false ? onLikeClick(id): onLikeUnclick()}
                style={{color: bgColor}} 
            /><span> {likes.length}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    votes: state.votes.votes,
    user: state.votes.user,
    userVoteType: state.votes.voteType,
    item: state.items.item
});

export default connect(mapStateToProps, { getVotes, getItem, createItemVote, deleteItemVote })
(CreateLikeVote);
