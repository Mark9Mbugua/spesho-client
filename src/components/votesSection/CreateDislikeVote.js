import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { getItem } from '../../actions/items';
import { getVotes, createItemVote } from '../../actions/votes';

class CreateLikeVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteType: 2,
            bgColor: ''
        };
    }

    componentDidMount() {
        const { id } = this.props;
        this.props.getItem(id);
        this.props.getVotes(id);
    };

    onDislikeClick = id => {
        const { voteType } = this.state;
        this.props.createItemVote(id, voteType);
        this.setState({
            bgColor: 'red'
        })
    };
    
    render() {
        let { id, votes, user, userVoteType } = this.props;
        const { voteType } = this.state;
        const dislikes = votes.filter(vote => vote.vote_type === 2);  
        return (
            <div>
                <ThumbDownAltOutlinedIcon 
                    onClick={this.onDislikeClick.bind(this, id)}
                    style={{color:this.state.bgColor}} 
                /><span> {dislikes.length}</span>
            </div>   
        )
    }
}

const mapStateToProps = state => ({
    votes: state.votes.votes,
    user: state.votes.user,
    userVoteType: state.votes.voteType,
    item: state.items.item
});

export default connect(mapStateToProps, { getVotes, getItem, createItemVote })
(CreateLikeVote);
