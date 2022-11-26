import { Grid, Stack, Button, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { listOfEquipment, listOfTargetMuscle } from '../../../Utils';
import ListItem from './ListItem';
const HelpUs = () => {
  const [active, setActive] = useState('equipment');

  const renderList = (list) => {
    return (
      <Grid container spacing={5}>
        {list.map((name) => {
          return (
            <Grid item lg={2} md={3} sm={6} xs={12} key={name}>
              <ListItem name={name} />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderActiveComponent = () => {
    return active === 'equipment'
      ? renderList(listOfEquipment)
      : renderList(listOfTargetMuscle);
  };
  return (
    <Grid container pt={15} spacing={5}>
      <Grid item xs={12}>
        <Stack gap={3}>
          <Typography variant={'h5'} textTransform={'capitalize'} gutterBottom>
            On the comment selection menu, copy from the list and search in the
            search section
          </Typography>
          <Stack
            sx={{
              diplay: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant={`${active === 'equipment' ? 'contained' : 'text'}`}
              color="info"
              size={'large'}
              sx={{ flexGrow: 1 }}
              onClick={() => setActive('equipment')}
            >
              equipment
            </Button>
            <Button
              color="info"
              variant={`${active === 'targetMuscle' ? 'contained' : 'text'}`}
              size={'large'}
              sx={{ flexGrow: 1 }}
              onClick={() => setActive('targetMuscle')}
            >
              target muscle
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {renderActiveComponent()}
      </Grid>
    </Grid>
  );
};

export default HelpUs;
