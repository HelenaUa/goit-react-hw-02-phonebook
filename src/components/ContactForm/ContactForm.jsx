// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { FormCon, Input, Btn, LabelStyle } from './ContactForm.styled';


const initialValues = {
    name: '',
    number: '',
}

export const ContactForm = () => {
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const { name } = e.target.elements;
    //     console.log(name.value);
    // };

    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        // console.log(actions);
        resetForm();
}

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormCon autoComplete="off">
            <LabelStyle htmlFor="name">
                Name
                <Input type="text" name="name"/>
            </LabelStyle>
            <LabelStyle htmlFor="number">
                Number
                <Input type="number" name="number"/>
            </LabelStyle>
            <Btn type="submit">Add contact</Btn>
        </FormCon>
        </Formik>
        
    )
}