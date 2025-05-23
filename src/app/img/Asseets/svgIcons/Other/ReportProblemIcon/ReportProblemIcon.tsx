import React from 'react';
import { ISvg } from '../../SvgPropsType';

export const ReportProblemIcon: React.FC<ISvg> = ({
  color = '#292D32',
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={w}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill={color} />
          </svg>
        );
    }
  };
  return renderIcon();
};
