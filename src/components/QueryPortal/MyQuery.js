import React, { useState } from "react";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popover } from "antd";
import "./MyQuery.css";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate } from "react-router-dom";
import DefaultNav from "../Navbar/DefaultNav";

const MyQuery = ({ query, setQuery }) => {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setPopup(!popup);
  };

  // move to query component
  const moveToQuery = () => {
    setQuery("back");
    navigate("/portal/createquery");
  };
  return (
    <div className="creative-div">
      <div className="main-div">
        <div className="popup">
          <div className="div-nav">
            <h3 className="nav-text">Instant Solution</h3>
            <CloseOutlined className="nav-symbol" onClick={moveToQuery} />
          </div>
          <div>
            <p className="sub-text">
              Is your query anything related to javascript? make use use of this
              area for instant solution
            </p>
          </div>
          <div>
            <label className="query-lable">Enter your query</label>
            <br></br>
            <br></br>
            <TextArea
              rows={4}
              placeholder="Enter your Query"
              maxLength={500}
              className="text-area"
            />
            <Button className="query-btn">Get Answer</Button>
            <label className="query-lable">Solution</label>
            <p className="sub-text">
              If not Satisfied with the solution, press "cancel" to create a New
              query for mentor assistance
            </p>
            <hr className="hr-query" />
          </div>
          <div className="btn-flex">
            <Button className="btn-cancel" onClick={moveToQuery}>
              Cancel
            </Button>
            <Button className="btn-confirm">Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuery;
