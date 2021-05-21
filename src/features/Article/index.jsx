import React from "react";
import { Box } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function ArticleFeature() {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:articleId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ArticleFeature;
