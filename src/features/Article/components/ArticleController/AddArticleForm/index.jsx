import { React, useState } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

AddArticleForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(4),
  },
  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },

  linearProgress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
  },
}));
function AddArticleForm(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    alias: "",
    title: "",
    articletext: "",
    catid: 100,
    language: "*",
    metadesc: "",
    metakey: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h5">
        Tạo tin tức
      </Typography>
      <form>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Alias"
          name="alias"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Title"
          name="title"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Content"
          name="articletext"
          onChange={handleChange}
        />
        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit}
        >
          Tạo
        </Button>
      </form>
    </div>
  );
}

export default AddArticleForm;
