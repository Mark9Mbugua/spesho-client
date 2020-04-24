import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import { getItem } from '../../actions/items';
import { getVotes } from '../../actions/votes';
import { ItemDetailContainer } from './itemDetail.styles';
import CommentsList from '../commentSection/CommentsList';
import CreateLikeVote from '../votesSection/CreateDislikeVote';
import CreateDislikeVote from '../votesSection/CreateLikeVote';


class ItemDetail extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getItem(this.props.id);
        this.props.getVotes(this.props.id);
    };

    render() {
        let { id, item, votes } = this.props;
        const likes = votes.filter(vote => vote.vote_type === 1);
        const dislikes = votes.filter(vote => vote.vote_type === 2);
        console.log(this.props)

        return (
            <div>
                <ItemDetailContainer>
                    <div className="item-section">
                        <div className="header">
                            <h2 className="menu">{item.deal_title}</h2>
                            <p className="brand">{item.brand}</p>
                        </div>
                        <div className="main">
                            <div className="main-left">
                                <div className="prices">
                                    <div className="price">
                                        <p>Ksh {item.price}</p>
                                    </div>
                                    <div className="original-price">
                                        <p>Ksh {item.original_price}</p>
                                    </div>
                                    <div className="discount">
                                        <p>{item.discount}% off</p>
                                    </div>
                                </div>
                                <div className="comments-count">
                                    <p><InsertCommentTwoToneIcon /> {item.comments_count} comments</p>
                                </div>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="main-right">
                                <div className="image-container">
                                    <img className="image" src={item.src} alt="nav icon" />
                                    <button className="deal-button">See Deal</button>
                                    <hr />
                                </div>
                                <div className="good-deal">
                                    <p>Good Deal?</p>
                                </div>
                                <div className="votes">
                                    <CreateDislikeVote id={id} />
                                    <CreateLikeVote id={id}/>
                                    <hr />
                                </div>  
                            </div>
                        </div>
                        <CommentsList 
                            objectId={this.props.id} 
                            commentsCount={item.comments_count} 
                        />
                    </div>                                         
                </ItemDetailContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.items.item,
    votes: state.votes.votes
});

export default connect(mapStateToProps, { getItem, getVotes })
(ItemDetail);
