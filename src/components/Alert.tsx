import React from 'react';
import { Alert as AlertNotification, Collapse, IconButton } from '@mui/material';

const Alert = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <Collapse in={open}>
      <AlertNotification
        style={{ marginTop: '20px' }}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <img src="close_icon_green.svg" />
          </IconButton>
        }
        sx={{ mb: 2 }}>
        Close me!
      </AlertNotification>
    </Collapse>
  );
};

export default Alert;
