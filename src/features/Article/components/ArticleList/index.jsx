import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import Article from "../Article";

ArticleList.propTypes = {
  data: PropTypes.array,
};

ArticleList.defaultProps = {
  data: [],
};
function ArticleList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={6} lg={6}>
            <Article article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ArticleList;
