import React from 'react';
import { ISvg } from '../../SvgPropsType';

interface ChIcon extends ISvg {
  open?: boolean;
}

export const ChevronIcon: React.FC<ChIcon> = ({
  color,
  className,
  iconType = 'linear',
  open = false,
  w = 24,
  direction = open ? 'down' : 'up',
}) => {
  const renderIcon = () => {
    const getRotation = () => {
      switch (direction) {
        case 'down':
          return 'rotate(270deg)';
        case 'left':
          return 'rotate(0deg)';
        case 'right':
          return 'rotate(180deg)';
        default:
          return 'rotate(90deg)';
      }
    };

    switch (iconType) {
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={w}
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: getRotation(),
              transition: 'transform 0.3s ease',
              flexShrink: 0,
              color: color,
            }}
            className={`bearishSvg ${className}`}
          >
            <path
              d="M14.7062 8.11538C15.095 7.72569 15.0947 7.09466 14.7054 6.70538C14.3158 6.31581 13.6842 6.31581 13.2946 6.70538L9.41421 10.5858C8.63317 11.3668 8.63316 12.6332 9.41421 13.4142L13.2946 17.2946C13.6842 17.6842 14.3158 17.6842 14.7054 17.2946C15.0947 16.9053 15.095 16.2743 14.7062 15.8846L12.2396 13.4127C11.4606 12.632 11.4606 11.368 12.2396 10.5873L14.7062 8.11538Z"
              fill="currentColor"
            />
          </svg>
        );
    }
  };
  return renderIcon();
};
