import React from 'react';
import settingSlider from './setting';
import Slider from 'react-slick';
import BodyOfPart from '../BodyOfPart';
import { Grid } from '@mui/material';
import { IconsListOfBodyPart } from '../../Utils';
const HScrollBodyPart = ({ data }) => {
  const renderBodyOfPart = () => {
    return data.map((item, index) => {
      return (
        <BodyOfPart
          item={item}
          key={item}
          source_Img={IconsListOfBodyPart[index]}
        />
      );
    });
  };
  return (
    <Grid container className="hsScroll__BodyOfPart">
      <Grid item xs={12}>
        <Slider {...settingSlider}>{renderBodyOfPart()}</Slider>
      </Grid>
    </Grid>
  );
};

export default React.memo(HScrollBodyPart);
