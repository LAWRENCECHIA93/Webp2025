import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const MultiButton = () => {
    return (
        <div>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
        </div>
    );
};

export default MultiButton;
