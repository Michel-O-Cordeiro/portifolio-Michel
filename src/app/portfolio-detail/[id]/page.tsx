'use client';
import React from 'react';
import PortfolioDetailDesign from '@/app/page/portfolio-detail-design';
import { DataArray } from '@/app/utils/data';

const Portfolio = (props: any) => {
  return (
    <React.Fragment>
      <PortfolioDetailDesign
        data={DataArray[props.params.id]}
        id={props.params.id}
        DataArray={DataArray}
      />
    </React.Fragment>
  );
};

export default Portfolio;
