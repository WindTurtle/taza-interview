import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
ArticleSkeleton.propTypes = {
  length: PropTypes.number,
};

ArticleSkeleton.defaultProps = {
  length: 10,
};

function ArticleSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={300} />
              <Skeleton />
              <Skeleton width="80%" />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ArticleSkeleton;
