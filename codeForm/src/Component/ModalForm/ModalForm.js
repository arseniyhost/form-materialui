import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../hooks/hookStyles';
import { FormList } from '../FormList/FormList';
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
            alert("Error");
        }

        else if (formData.list) {
            if (formData.list.length === 0 || !formData.list) {
                console.log("Error123");
            }
            else {
                console.log(formData);
                setModelActive(false);
                
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

const mapStateToProps = (state) => ({
    form: state.form
})

export default connect(mapStateToProps, null)(ModalForm);
