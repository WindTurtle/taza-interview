import React from "react";
import PropTypes from "prop-types";
import AddArticleForm from "../AddArticleForm";
import { useSnackbar } from "notistack";
import articleApi from "api/article";

AddArticle.propTypes = {
  closeDialog: PropTypes.func,
};

function AddArticle(props) {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      await articleApi.add(values);
      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("Tạo thành công", { variant: "success" });
    } catch (err) {
      enqueueSnackbar("Có gì đó không ổn", { variant: "error" });
    }
  };
  return (
    <div>
      <AddArticleForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddArticle;
