import React from "react";
import { Box, Container, makeStyles, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import articleApi from "api/article";
import ArticleSkeleton from "../components/ArticleSkeleton";
import ArticleList from "../components/ArticleList";
import ArticleController from "../components/ArticleController";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
  },
  data: {},
  controller: {
    position: "fixed",
    bottom: "150px",
    right: "0",
  },
}));
function ListArticle() {
  const classes = useStyle();
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await articleApi.getAll();
        setArticleList(data);
      } catch (err) {
        console.log("failed to get article list", err);
      }
      setLoading(false);
    };
    fetchArticle();
  }, []);
  return (
    <Box className={classes.root}>
      <Container className={classes.data}>
        <Paper elevation={0}>
          {loading ? (
            <ArticleSkeleton length={10} />
          ) : (
            <ArticleList data={articleList} />
          )}
        </Paper>
      </Container>

      <Box className={classes.controller}>
        <ArticleController />
      </Box>
    </Box>
  );
}

export default ListArticle;
