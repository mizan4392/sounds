import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MyButton from '../utils/MyButton'

const styles = theme => ({
    root: {
        maxWidth: 250,
    },
    media: {
        height: 80,
    },
});

class Card_Block_Shop extends Component {


    render() {

        const { classes } = this.props

        console.log("//////////////////", this.props.list)

        const renderCard = this.props.list === undefined ? null : this.props.list.map((item, i) => {

            return (
                <Grid sm={4} xs={6} key={item._id}>
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

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>

                            <div style={{ width: '80%' }}>
                                <MyButton
                                    title="View Product"
                                    type="default"
                                    altClass="card_link"
                                    linkTo={`product_detailes/${item._id}`}
                                    addStyles={{
                                        margin: '10px 0 0 0'
                                    }}
                                >

                                </MyButton>

                            </div>
                            <div >
                                <MyButton
                                    type="bag_link"
                                    runAction={() => {
                                        console.log("somthing")
                                    }}
                                    altClass="card_link"
                                    linkTo={`product_detailes/${item._id}`}
                                    addStyles={{
                                        margin: '10px 0 0 0'
                                    }}
                                >

                                </MyButton>
                            </div>
                        </div>

                    </Card>

                </Grid>
            )
        })

        return (
            <div className="card_block_shop">
                <div>
                    <div>
                        {this.props.list ?
                            this.props.list.length === 0 ?
                                <div className="no_results">
                                    Sorry,No Results
                                </div>
                                : null
                            : null}
                        <Grid container spacing={1}>
                            {renderCard}
                        </Grid>

                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Card_Block_Shop)