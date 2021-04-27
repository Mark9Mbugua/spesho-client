import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import { getItemVotes } from '../../actions/votes';

import { ItemCardContainer } from './itemCard.styles';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 245,
      maxHeight: 360,
    },
    media: {
      height: 0,
      paddingTop: '75%', // 16:9
    },
    buttons: {
        paddingTop: 0,
        marginTop: 0,
        width: '100%',
    },
    icon: {
        paddingTop: 0,
        width: '30%',
    },
    divider: {
        paddingRight: '10%',
        width: '70%',
    },
  }));

const ItemCard = ({ id, imageSrc, title, price, oldPrice, votes, getItemVotes, likes}) => {
    //console.log(votes)    
    const classes = useStyles();
    
    useEffect(() => {
        getItemVotes(id);
    }, []);

    return (
        <ItemCardContainer>
            <Card className={classes.root}>
                <CardActions className={classes.actions}>
                    <Link to={`/items/${id}`}>  
                        <CardMedia
                            className={classes.media}
                            image={imageSrc}
                            title={title}
                        />
                        <CardContent className={classes.content}>
                            <Typography variant="body2" color="textPrimary" component="p" display="block">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" display="block">
                                Price: Ksh.{price}
                            </Typography>
                            <Typography variant="body2" color="error" component="p" display="block">
                                Original Price: Ksh.{oldPrice}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActions>
                <CardActions className={classes.buttons}>
                    <IconButton className={classes.icon}>
                    <ThumbUpAltOutlinedIcon className={classes.divider} />
                    <span>{ likes }</span>
                    </IconButton>
                </CardActions>
            </Card>
        </ItemCardContainer>
    )
}

const mapStateToProps = state => ({
    votes: state.votes.votes
});

export default connect(mapStateToProps, { getItemVotes })(ItemCard);
