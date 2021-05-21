import React from "react";
import { Box, Container, Paper, makeStyles } from "@material-ui/core";
import { useRouteMatch } from "react-router";
import ArticleContent from "../components/ArticleContent";
import useArticleDetail from "../hooks/useArticleDetail";

const useStyle = makeStyles((theme) => ({
  root: {},
}));
function DetailPage() {
  const classes = useStyle();
  const {
    params: { articleId },
  } = useRouteMatch();
  // sử dụng destructuring để lấy articleId

  const { article, loading } = useArticleDetail(articleId);
  if (loading) {
    return <Box>Loading</Box>;
  }
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <ArticleContent article={article} />
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
