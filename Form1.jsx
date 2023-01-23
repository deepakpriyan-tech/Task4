import "./Style.css";
import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.resourcename) {
    errors.resourcename = "Required !";
  } else if (!/^[A-Za-z]+$/.test(values.resourcename)) {
    errors.resourcename = "Invalid resourcename ⚠️";
  }

  if (!values.resourceid) {
    errors.resourceid = "Required";
  } else if (!/^[0-9]+$/.test(values.resourceid)) {
    errors.resourceid = "Invalid Resource id ⚠️";
  }

  if (!values.iscurrency) {
    errors.iscurrency = "Currency!";
  } else if (!/^[0-9]+$/.test(values.iscurrency)) {
    errors.iscurrency = "Invalid Currency value ⚠️ ";
  }
  if (!values.currencycode) {
    errors.currencycode = "Required currencycode!";
  } else if (!/^[A-Za-z]+$/.test(values.currencycode)) {
    errors.currencycode = "Invalid currencycode ⚠️";
  }

  if (!values.ceiling) {
    errors.ceiling = "Required ceiling !";
  } else if (!/^[0-9]+$/.test(values.ceiling)) {
    errors.ceiling = "Invalid ceiling ⚠️";
  }

  if (!values.floor) {
    errors.floor = "Required !";
  } else if (!/^[0-9]+$/.test(values.floor)) {
    errors.floor = "Invalid floor ⚠️";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      resourcename: "",
      resourceid: "",
      iscurrency: "",
      currencycode: "",
      ceiling: "",
      floor: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
    <form
      onSubmit={formik.handleSubmit}
      class=" mx-8 my-8 space-x-4  space-y-4 mt-8 justify-items-center md" 
    >
      <h1 class="font-sansbold ml-5 mt-4  text-4xl"> Create Resource </h1>
      <input
        id="resourcename"
        name="resourcename"
        class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.resourcename}
        placeholder="resourcename"
      />
      {formik.errors.resourcename ? (
        <div>{formik.errors.resourcename}</div>
      ) : null}

      <input
        id="resourceid"
        name="resourceid"
        type="text"
        class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        onChange={formik.handleChange}
        value={formik.values.resourceid}
        placeholder="resourceid"
      />
      <br></br>
      {formik.errors.resourceid ? <div>{formik.errors.resourceid}</div> : null}

      <input
        id="iscurrency"
        name="iscurrency"
        type="text"
        class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        onChange={formik.handleChange}
        value={formik.values.iscurrency}
        placeholder="iscurrency"
      />
      {formik.errors.iscurrency ? <div>{formik.errors.iscurrency}</div> : null}

      <input
        id="currencycode"
        name="currencycode"
        type="text"
        class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        onChange={formik.handleChange}
        value={formik.values.currencycode}
        placeholder="currencycode"
      />
      <br></br>
      {formik.errors.currencycode ? (
        <div>{formik.errors.currencycode}</div>
      ) : null}

      <input
        id="ceiling"
        name="ceiling"
        type="text"
        class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        onChange={formik.handleChange}
        value={formik.values.ceiling}
        placeholder="ceiling"
      />
      {formik.errors.ceiling ? <div>{formik.errors.ceiling}</div> : null}

      <input
        id="floor"
        name="floor"
        type="text"
        class="mt-8 shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline space-x-4  space-y-4"
        onChange={formik.handleChange}
        value={formik.values.floor}
        placeholder="Floor"
      />
      <br></br>
      {formik.errors.floor ? <div>{formik.errors.floor}</div> : null}

      <br></br>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10mx-8 my-8 space-x-4  ">
        Submit
      </button>
    </form>

    
      </div>
  );
};

export default SignupForm;
