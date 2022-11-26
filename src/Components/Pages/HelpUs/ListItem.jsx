import React, { useState } from 'react';
import { Tooltip, Typography, Button } from '@mui/material';
const ListItem = ({ name }) => {
  const [dropToolTip, setDropToolTip] = useState(false);
  const handleOpenTooltip = () => {
    setDropToolTip(true);
    if (setDropToolTip) {
      navigator.clipboard.writeText(name);
      setTimeout(() => {
        setDropToolTip(false);
      }, 600);
    }
  };
  return (
    <>
      <Tooltip
        placement="right"
        open={dropToolTip}
        arrow
        title={
          <Typography variant={'body2'} textTransform={'capitalize'}>
            copy
          </Typography>
        }
      >
        <Button
          onClick={handleOpenTooltip}
          color={'secondary'}
          variant={'contained'}
          sx={{ width: '100%' }}
          size={'large'}
        >
          {name}
        </Button>
      </Tooltip>
    </>
  );
};

export default ListItem;
