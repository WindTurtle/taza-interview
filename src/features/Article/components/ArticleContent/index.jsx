import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

ArticleContent.propTypes = {
  article: PropTypes.object,
};

function ArticleContent({ article }) {
  return <Box pt={5}></Box>;
}

export default ArticleContent;
