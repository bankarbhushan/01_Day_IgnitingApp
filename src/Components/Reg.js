import { Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { EMTY_CART } from "./constant";

const Reg = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex w-full m-auto items-center ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          Navigate("/");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  w-1/3 rounded-lg justify-center m-auto border p-4 "
          >
            <h1 className=" text-lg text-center font-bold text-gray-500 ">
              WelCome User...
            </h1>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-full m-2 px-10 border border-orange-600 rounded-md py-2  "
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="w-full m-2 px-10 border border-orange-600 rounded-md py-2  "
            />
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full m-2 px-10 border bg-orange-600 text-white border-orange-600 rounded-md py-2"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div className=" animate-pulse">
        <img src={EMTY_CART} />
      </div>
    </div>
  );
};

export default Reg;
