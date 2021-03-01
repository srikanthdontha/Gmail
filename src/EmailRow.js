import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("./mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">--{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
