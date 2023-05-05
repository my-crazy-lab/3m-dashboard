import { Formik, FormikConfig, FormikValues } from "formik";
import React from "react";

export interface FormProviderProps<T = FormikValues> extends FormikConfig<T> {}

function FormProvider<T = FormikValues>({ ...props }: FormProviderProps<T>) {
  return <Formik {...props} />;
}

export default FormProvider;
