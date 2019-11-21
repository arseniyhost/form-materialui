import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ModalPop from './ModalPop/ModalPop';

export const FormList = ({ offModelActive, onModelActive, modelActive, handleSubmit, classes }) => {
    return (
        <div className="container">
            <Box>
                <Button p={2} fontSize={22} variant="contained" color="primary" onClick={onModelActive}>Open</Button>
                <ModalPop classes={classes} modelActive={modelActive} offModelActive={offModelActive} handleSubmit={handleSubmit} />
            </Box>
        </div>
    )
}