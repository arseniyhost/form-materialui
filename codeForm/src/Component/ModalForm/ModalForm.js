import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../hooks/hookStyles';
import { FormList } from '../FormList/FormList';
import { getFormData } from './../../redux/formDataReducer';
import { connect } from 'react-redux';


const ModalForm = (props) => {
    const classes = useStyles();
    const [modelActive, setModelActive] = useState(false);


    const onModelActive = () => {
        setModelActive(true);
    }

    const offModelActive = () => {
        setModelActive(false);
    }

    const onSubmit = (formData) => {
        if (!formData || !formData.list) {
            return
        }

        else {
            if (formData.list.length === 0 || !formData.list) {
                return
            }
            else {
                props.getFormData(formData.list);
                setModelActive(false);
                console.log(formData);
            }
        }

    }

    return (
        <Container>
            <ListFormRedux classes={classes} onSubmit={onSubmit} onModelActive={onModelActive} offModelActive={offModelActive} modelActive={modelActive} />
        </Container>
    )
}

const ListFormRedux = reduxForm({
    form: "test"
})(FormList);

let mapStateToProps = state => {
    return {
        formInfo: state.form
    }
}


export default connect(mapStateToProps, { getFormData })(ModalForm);
