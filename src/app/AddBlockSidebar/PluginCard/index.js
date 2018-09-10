import React from "react";
import { withStyles } from "@material-ui/core/styles";
import nanoid from "nanoid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import classnames from "classnames";

const styles = () => ({
  media: {
    height: 140
  },
  cardActionArea: {
    width: "100%"
  },
  fullHeight: {
    height: "100%"
  }
});

class AddBlockSidebar extends React.Component {
  addBlock = () => {
    const {
      addItemAfter,
      item: { defaultState },
      currentId
    } = this.props;

    if (addItemAfter != null) {
      addItemAfter({
        id: currentId,
        content: {
          ...defaultState,
          id: nanoid(),
          content:
            defaultState.content == null
              ? defaultState.content
              : Array.isArray(defaultState.content)
                ? defaultState.content.map(item => ({ ...item, id: nanoid() }))
                : { ...defaultState.content, id: nanoid() }
        }
      });
    }
  };
  render() {
    const {
      item: { preview, name, description },
      classes: { media, cardActionArea, fullHeight }
    } = this.props;
    return (
      <Card classes={{ root: fullHeight }}>
        <CardActionArea
          onClick={this.addBlock}
          className={classnames(cardActionArea, fullHeight)}
        >
          {preview && (
            <CardMedia className={media} image={preview} title={name} />
          )}
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {name}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(AddBlockSidebar);
