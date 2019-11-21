import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { FormControl, Select, MenuItem, Input } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

export default {
    title: 'FormButton',
};

export const FormList = () => {
    return (
        <Box>
            <Button variant="contained" color="primary" onClick={action("clicked")}>Open</Button>
        </Box>
    )
}

export const renderInput = ({ label, input }) => {
    return <Input
        label={label}
        placeholder={label}
        {...input}
        type="number"
    />
}

export const renderSelect = () => {
    let color = ['red', 'green', 'blue', 'yellow'];
    return <FormControl>
        <Select>
            <MenuItem value={10}>Выберите</MenuItem>
            {
                color.map(c => {
                    return <MenuItem value={c} key={c}>{c}</MenuItem>
                })
            }
        </Select>
    </FormControl>
}