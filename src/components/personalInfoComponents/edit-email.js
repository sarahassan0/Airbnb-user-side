import { Formik, Field, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const EditEmail = () => {
  const { t, i18n } = useTranslation();

  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email().required("Email address is invalid"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));

    console.log("values:", values);
    resetForm();
  };
  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-12 form-floating mb-3">
              <Field
                name="email"
                id="email"
                type="text"
                className={`form-control ${
                  formik.touched.email && !formik.errors.email
                    ? "is-valid"
                    : !formik.touched.email
                    ? ""
                    : "is-invalid"
                }`}
                placeholder={t("Email address")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <label
                htmlFor="email"
                className={`${
                  !formik.errors.email ? "text-dark" : "text-danger"
                }`}
              >
                {t("Email address")}
              </label>
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{t(formik.errors.email)}</div>
              ) : null}{" "}
            </div>
          </div>
          <button type="submit" className="btn btn-dark fw-bold mb-4">
            {t("save")}
          </button>
        </form>
      </Formik>{" "}
    </>
  );
};

export default EditEmail;
