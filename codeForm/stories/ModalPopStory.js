import React from 'react';
import { FieldArray } from 'redux-form';
import style from './../src/Component/ModalForm/ModalForm.module.css';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import ButtonIconBox from '../src/common/ButtonIconBox';
import ButtonBox from '../src/common/ButtonBox';
import ListElementArrays from '../src/Component/ListArrays/ListArrays';
import { storiesOf } from '@storybook/react';


export default {
    title: 'Modal',
};


storiesOf('Modal', module)
    .add('ModalPopUp', () => <Modal>
        <Fade>
            <form className={style.modal}>
                <Box p={2} fontSize={24} fontWeight="fontWeightMedium" className={style.head}>
                    Структура номера
                <ButtonIconBox id={"btnClose"} color={"inherit"} />
                </Box>
                <FieldArray name="list" component={ListElementArrays} />
                <Grid container direction="row">
                    <ButtonBox xs={3} variant={"contained"} color={"primary"} type={"submit"} id={style.btnSave} text={"Сохранить"} />
                    <ButtonBox xs={3} text={"Отмена"} />
                </Grid>
            </form>
        </Fade>
    </Modal>)