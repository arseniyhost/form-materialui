import React from 'react';
import { FieldArray } from 'redux-form';
import style from './../../ModalForm/ModalForm.module.css';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import ListElementArrays from './../../ListArrays/ListArrays';
import Box from '@material-ui/core/Box';
import ButtonBox from '../../../common/ButtonBox';
import { Grid } from '@material-ui/core';
import ButtonIconBox from '../../../common/ButtonIconBox';


const ModalPop = ({ classes, modelActive, offModelActive, handleSubmit }) => {
    return (
        <Modal className={classes.modal} open={modelActive}>
            <Fade in={modelActive}>
                <form onSubmit={handleSubmit} className={style.modal}>
                    <Box p={2} fontSize={24} fontWeight="fontWeightMedium" className={style.head}>
                        Структура номера
                        <ButtonIconBox id={"btnClose"} color={"inherit"} onClick={offModelActive} />
                    </Box>
                    <FieldArray name="list" component={ListElementArrays} />
                    <Grid container direction="row">
                        <ButtonBox xs={3} variant={"contained"} color={"primary"} type={"submit"} id={style.btnSave} text={"Сохранить"} />
                        <ButtonBox xs={3} onClick={offModelActive} text={"Отмена"} />
                    </Grid>
                </form>
            </Fade>
        </Modal>
    )
}

export default ModalPop;