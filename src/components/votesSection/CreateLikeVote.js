import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { getItem } from '../../actions/items';
import { getVotes, createItemVote } from '../../actions/votes';

class CreateLikeVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteType: 1,
            bgColor: ''
        };
    }

    componentDidMount() {
        const { id } = this.props;
        //this.props.getItem(id);
        this.props.getVotes(id);
    };

    onLikeClick = id => {
        const { voteType } = this.state;
        this.props.createItemVote(id, voteType);
        this.setState({
            bgColor: 'blue'
        })
    };

    render() {
        const { id, votes, user, userVoteType } = this.props;
        const likes = votes.filter(vote => vote.vote_type === 1);
        console.log(this.props);
          
        return (
            <div>
                <ThumbUpAltOutlinedIcon 
                    onClick={this.onLikeClick.bind(this, id)}
                    style={{color:this.state.bgColor}} 
                /> <span>{likes.length}</span>
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
