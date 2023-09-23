import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  language: Yup.string().required(" Language is required"),
  title: Yup.string().required(" Query Title is required"),
  details: Yup.string().max(300, "Description is too long"),
  From: Yup.string()
    .required("Time is required")
    .matches(
      /^(0[1-9]|1[0-2]):[0-5][0-9]( (AM|PM))?$/i,
      "Invalid time format (hh:mm AM/PM)"
    ),
  till: Yup.string()
    .required("Time is required")
    .matches(
      /^(0[1-9]|1[0-2]):[0-5][0-9]( (AM|PM))?$/i,
      "Invalid time format (hh:mm AM/PM)"
    ),

});

const Form = () => {

  const navigate = useNavigate()
  // All Queries
  const cancelPage=()=>{
   navigate('/portal/dashboard')
  }


  const formik = useFormik({
    initialValues: {
      category: "",
      language: "",
      title: "",
      details: "",
      From: "",
      till: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const queries = await axios.post(
          "https://zen-server.onrender.com/create-query",
          values
        );
        alert("Successfully created");
        console.log(queries);
      } catch (err) {
        console.log(err);
      }
      navigate('/portal/allQuery')
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="main-card">
        <label className="card-lable">Topic</label>
        <label htmlFor="category" className="card-sublable">
          Category:
        </label>
        <select
          className="select-one"
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        >
          <option value="" label=" ---Select Category---">
            <DownOutlined className="downoutlined-icon" />
          </option>
       
          <option value="Zen-Class Doubt" label="Zen-Class Doubt" />
          <option value="Placement-Related" label="Placement-Related" />
          <option value="Coordination-Related" label="Coordination-Related" />
          <option value="Pre-Bootcamp Related" label="Pre-Bootcamp Related" />
        </select>
        {formik.touched.category && formik.errors.category ? (
          <div className="error">{formik.errors.category}</div>
        ) : null}

        <div>
          <label htmlFor="language" className="card-sublable">
            {" "}
            Prefered Voice Communication Language:
          </label>
          <select
            className="select-one"
            id="language"
            name="language"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.language}
          >
            <option value="" label="---Select Language---">
              {" "}
              <DownOutlined className="downoutlined-icon" />
            </option>
            <option value="Tamil" label="Tamil" />
            <option value="English" label="English" />
            <option value="Hindi" label="Hindi" />
          </select>
          {formik.touched.language && formik.errors.language ? (
            <div className="error">{formik.errors.language}</div>
          ) : null}
        </div>

        <div>
          <label className="card-lable">Details</label>
          <label htmlFor="title" className="card-sublable">
            {" "}
            Query Title
          </label>
          <input
            placeholder="Enter the query title"
            className="query-input"
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
          {/* description */}
          <label htmlFor="details" className="card-sublable">
            Query Description
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Enter your Query"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
            className="query-textarea"
          />
          {formik.touched.details && formik.errors.details ? (
            <div className="error">{formik.errors.details}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="From" className="card-lable">
            Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
          </label>
          <label className="card-sublable">From</label>
          <input
            className="formInputs"
            type="text"
            id="From"
            name="From"
            placeholder="hh:mm AM/PM"
      
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.From}
          />
          {formik.touched.From && formik.errors.From ? (
            <div className="error">{formik.errors.From}</div>
          ) : null}
          {/* till */}

          <label className="card-sublable" htmlFor="till">
            Till
          </label>
          <input
            className="formInputs"
            type="text"
            id="till"
            name="till"
            placeholder="hh:mm AM/PM"
   
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.till}
          />
          {formik.touched.till && formik.errors.till ? (
            <div className="error">{formik.errors.till}</div>
          ) : null}
        </div>
        <div className="querybtn-flex">
          <Button type="submit" className="querybtn-cancel" onClick={cancelPage}>Cancel</Button>
        <button type="submit" className="querybtn-create">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
