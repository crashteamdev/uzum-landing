import { FormikErrors } from "formik";
import { ValuesForm } from "../types/types";

export const validate = (values: ValuesForm): FormikErrors<ValuesForm> => {
    const errors: FormikErrors<ValuesForm> = {};
    if (!values.name) {
        errors.name = 'Обязательно:)';
    } else if (values.name.length > 15) {
        errors.name = 'Не более 15 символов:(';
    }

    if (!values.phone) {
        errors.phone = 'Обязательное поле:)';
    } else if (values.phone.length > 15) {
        errors.phone = "Не более 15 символов:(";
      }

    if (!values.email) {
        errors.email = 'Обязательное поле:)';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Не верный адрес:(';
    }

    return errors;
};