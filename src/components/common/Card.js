import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { ItemCardContainer } from './itemCard.styles';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 245,
      maxHeight: 360,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

const ItemCard = ({ imageSrc, title, price, oldPrice, discount, description}) => {    
    const classes = useStyles();
    return (
        <ItemCardContainer>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={imageSrc}
                    title={title}
                />
                <CardContent>
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
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined">
                        View Details
                    </Button>
                </CardActions>
            </Card>
        </ItemCardContainer>
    )
}

export default ItemCard
