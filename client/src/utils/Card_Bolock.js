import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme =>({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 80,
    },
  });

class Card_Bolock extends Component {


    render() {


        const {classes} = this.props

        const renderCard = this.props.list && this.props.list.map((item, i) => {
            return (
                <Grid sm={3} xs={6} key={item._id}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="images/featured/featured_home.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
            <Typography variant="body2" color="textSecondary" component="p">Brand: {item.brand.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Wood: {item.wood.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Price:  {item.price}</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                               Shope Now
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
            )
        })
        return (
            <div className="card_block">
                <div className="container">
                    {
                        this.props.title ? (
                            <div className="title">
                                {this.props.title}

                            </div>

                        ) : <></>
                    }

                    <Grid container spacing={2}>
                        {renderCard}
                    </Grid>

                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Card_Bolock)
