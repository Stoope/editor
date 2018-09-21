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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  root: {
    width: 250
  },
  fullHeight: {
    height: "100%"
  }
});

class AddBlockSidebar extends React.Component {
  addBlock = () => {
    const {
      addItemAfter,
      // resizeItems,
      item: { defaultState },
      closeAddBlockSidebar,
      currentId,
      type,
      props
    } = this.props;

    if (addItemAfter != null) {
      if (type === "item") {
        addItemAfter({
          id: currentId,
          content: {
            type: "Grid",
            only: [],
            item: true,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            ...props,
            id: nanoid(),
            content: Array.isArray(defaultState)
              ? defaultState.map(item => ({ ...item, id: nanoid() }))
              : [{ ...defaultState, id: nanoid() }]
          }
        });
        // if (resizeItems != null) {
        //   resizeItems(currentId);
        // }
      } else if (type === "container") {
        addItemAfter({
          id: currentId,
          content: {
            type: "Grid",
            only: [],
            id: nanoid(),
            item: true,
            container: true,
            alignItems: "stretch",
            justifyContent: "flex-start",
            flexDirection: "row",
            xs: 12,
            section: true,
            content: [
              {
                type: "Grid",
                only: [],
                item: true,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                ...props,
                id: nanoid(),
                content: Array.isArray(defaultState)
                  ? defaultState.map(item => ({ ...item, id: nanoid() }))
                  : [{ ...defaultState, id: nanoid() }]
              }
            ]
          }
        });
      }
      if (closeAddBlockSidebar != null) {
        closeAddBlockSidebar();
      }
    }
  };
  render() {
    const {
      item: { preview, name, description },
      classes: { media, cardActionArea, fullHeight, root }
    } = this.props;
    return (
      <Card classes={{ root: classnames(fullHeight, root) }}>
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
