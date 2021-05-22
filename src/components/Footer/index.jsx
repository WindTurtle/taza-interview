import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {},
  link: {
    color: "#393c41",
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
}));

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container>
        <Box padding={4}>
          <ul>
            <Link className={classes.link} to="/">
              Taza © 2021
            </Link>
            <Link className={classes.link} to="/">
              Quyền riêng tư và pháp lý
            </Link>
            <Link className={classes.link} to="/">
              Liên hệ
            </Link>
            <Link className={classes.link} to="/">
              Tuyển dụng
            </Link>
            <Link className={classes.link} to="/">
              Tin tức
            </Link>
          </ul>
          <Typography variant="h5">Interview</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
