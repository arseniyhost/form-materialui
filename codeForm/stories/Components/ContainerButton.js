import React from 'react';
import CloseIcon from '@material-ui/icons/Close';


export const ContainerButton = ({Component, ...props}) => {
    return(
        <Component color={props.color} size={props.size} color={props.color} style={props.style}>
            <CloseIcon />
        </Component>
    )
}