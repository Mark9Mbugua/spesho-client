import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import { getItem } from '../../actions/items';
import { getVotes } from '../../actions/votes';
import { 
    ItemDetailContainer,
    ItemSection,
    Header,
    BrandName,
    Main,
    MainLeft,
    Prices,
    Price,
    OriginalPrice,
    Discount,
    CommentsCount,
    Description,
    MainRight,
    ImageContainer,
    Image,
    DealButton,
    DealVote,
    Votes
} from './itemDetail.styles';
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
        let { id, item, votes, user, isAuthenticated } = this.props;
        const likes = votes.filter(vote => vote.vote_type === 1);
        const dislikes = votes.filter(vote => vote.vote_type === 2);

        return (
            <div>
                <ItemDetailContainer>
                    <ItemSection>
                        <Header>
                            <h2 className="menu">{item.deal_title}</h2>
                            <BrandName>{item.brand}</BrandName>
                        </Header>
                        <Main>
                            <MainLeft className='main-left'>
                                <Prices>
                                    <Price>
                                        <p>Ksh {item.price}</p>
                                    </Price>
                                    <OriginalPrice>
                                        <p>Ksh {item.original_price}</p>
                                    </OriginalPrice>
                                    <Discount>
                                        <p>{item.discount}% off</p>
                                    </Discount>
                                </Prices>
                                <CommentsCount>
                                    <p><InsertCommentTwoToneIcon /> {item.comments_count} comments</p>
                                </CommentsCount>
                                <Description>
                                    <p>{item.description}</p>
                                </Description>
                            </MainLeft>
                            <MainRight className="main-right">
                                <ImageContainer>
                                    <Image src={item.src} alt="nav icon" />
                                    <DealButton>See Deal</DealButton>
                                    <hr />
                                </ImageContainer>
                                <DealVote>
                                    <p>Good Deal?</p>
                                </DealVote>
                                <Votes>
                                    <CreateDislikeVote id={id} />
                                    <CreateLikeVote id={id}/>
                                    <hr />
                                </Votes>  
                            </MainRight>
                        </Main>
                        <CommentsList 
                            objectId={this.props.id} 
                            commentsCount={item.comments_count}
                            user={user} 
                        />
                    </ItemSection>                                         
                </ItemDetailContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    item: state.items.item,
    votes: state.votes.votes
});

export default connect(mapStateToProps, { getItem, getVotes })
(ItemDetail);
