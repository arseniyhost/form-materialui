import React from 'react';
import { Field } from 'redux-form';
import style from './../ModalForm/ModalForm.module.css';
import { renderInput, renderSelect } from '../../common/utils';
import { Grid } from '@material-ui/core';
import { require, maxLengthSymbols } from './../../validate/validate';
import ButtonBox from '../../common/ButtonBox';
import ButtonIconBox from '../../common/ButtonIconBox';
import Container from '@material-ui/core/Container';

let max = maxLengthSymbols(4);

const ListElementArrays = ({ fields }) => {


    return (
        <ul>
            {fields.map((ing, id) => {
                return <Container key={ing}>
                    <Grid justify={"space-between"} spacing={1} container direction="row" >
                        <Grid item xs={4}>
                            <Field validate={[require]} component={renderSelect} name={ing + "colors"} />
                        </Grid>
                        <Grid item xs={4}>
                            <Field validate={[require, max]}
                                name={ing + "number"}
                                type="number"
                                component={renderInput}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonIconBox color={"secondary"} size={"small"} onClick={() => fields.remove(id)} />
                        </Grid>
                    </Grid>
                </Container>
            })}
            <li>
                <ButtonBox color="primary"
                    disabled={fields.length + 1 > 5 ? true : false}
                    className={style.btnPush}
                    type={"button"}
                    onClick={() => fields.push()}
                    text={"Добавить"}
                />

            </li>
        </ul>
    )
}

export default ListElementArrays;