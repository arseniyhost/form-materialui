import React from 'react';
import Input from '@material-ui/core/Input';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import style from './utils.module.css';


export const renderInput = ({ label, input, meta: { touched, error } }) => {
    let hasError = touched && error;

    return <div className={hasError ? style.error : ""}>
        <Input
            label={label}
            placeholder={label}
            {...input}
            type="number"
        />
        {touched && error && <span className={style.error}>{error}</span>}
    </div>
}


export const renderSelect = ({ input, meta: { touched, error } }) => {
    let hasError = touched && error;
    let color = ['red', 'green', 'blue', 'yellow', 'grey', 'white', 'orange'];
    return <div className={hasError ? style.error : ""}>
        <FormControl>
            <Select p={2}
                {...input}
            >
                <MenuItem>Выберите</MenuItem>
                {
                    color.map(c => {
                        return <MenuItem value={c} key={c}>{c}</MenuItem>
                    })
                }
            </Select>
            {touched && error && <span className={style.error}>{error}</span>}

        </FormControl>
    </div>
}