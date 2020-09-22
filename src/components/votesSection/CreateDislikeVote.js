import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getItem } from '../../actions/items';
import {getVotes, createItemVote, deleteItemVote } from '../../actions/votes';


const CreateDislikeVote = ({id, getItem, getVotes, votes, user, createItemVote, deleteItemVote }) => {
    const [voteType] = useState(2);
    const [bgColor, setBgColor] = useState('');
    const [click, setClick] = useState(false);
    const [clickedVote, setClickedVote] = useState(null);
    const dislikes = votes.filter(vote => vote.vote_type === 2);
    const userId = user ? user.id : null;
    //console.log(voteToDeleteId);
    console.log(click);

    const onDislikeClick = id => {
        // const voters = votes.map(vote => vote.user);
        if (!userId || voteType === 2 ) {
            createItemVote(id, voteType);
            setBgColor('red');
            setClick(true);
            console.log(click);
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
            console.log(click);
        }
    };

    useEffect(() => {
        console.log(dislikes);
        getItem(id);
        getVotes(id);
    },[JSON.stringify(dislikes)]);

    return (
        <div>
            <ThumbDownAltOutlinedIcon 
                onClick={() => click === false ? onDislikeClick(id): onDislikeUnclick()}
                style={{color: bgColor}} 
            /><span> {dislikes.length}</span>
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
(CreateDislikeVote);
