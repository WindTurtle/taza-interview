import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { THUMBNAIL_PLACEHOLDER } from "constants/index";
import { useHistory } from "react-router";
import moment from "moment";
Article.propTypes = {
  article: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  root: {},
  dateUpload: {
    marginRight: theme.spacing(1),
    fontSize: "12px",
    color: "#70706e",
    fontStyle: "italic",
  },
  author: {
    marginRight: theme.spacing(2),
    fontSize: "14px",
  },
}));
function Article({ article }) {
  const classes = useStyle();
  const history = useHistory();
  const thumbnailUrl = article.attributes.images.image_intro
    ? `${article.attributes.images?.image_intro}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/article/${article.id}`);
  };
  return (
    <Box
      padding={1}
      onClick={handleClick}
      style={{ textAlign: "left", cursor: "pointer" }}
    >
      <Box padding={1} minHeight={300}>
        <img
          src={thumbnailUrl}
          alt={article.id}
          style={{ height: "300px", objectFit: "cover", borderRadius: "10px" }}
          width="100%"
        />
      </Box>
      <Box padding={1}>
        <Typography padding={1} variant="h5" style={{ fontWeight: "bold" }}>
          {article.attributes.title}
        </Typography>
      </Box>
      <Box style={{ paddingLeft: "10px" }}>
        <Box component="span" className={classes.dateUpload}>
          {moment(article.attributes.created).format("DD/MM/YYYY HH:MM")}
        </Box>
        {" | "}
        <Box component="span" className={classes.author}>
          {article.attributes.created_by_alias ? (
            <span>{article.attributes.created_by_alias}</span>
          ) : (
            <span style={{ fontStyle: "italic" }}>N/A</span>
          )}
        </Box>
      </Box>
      <Box padding={1}>
        <Typography padding={1} style={{ opacity: "0.9" }} variant="body2">
          {article.attributes.text.length > 50
            ? article.attributes.text.substring(0, 200 - 3) + " ..."
            : article.attributes.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default Article;
