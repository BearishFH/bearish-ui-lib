import React from 'react';
import { ISvg } from '../../SvgPropsType';

export const CommandSquare: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'linear':
      case 'outline':
      default:
        return (
          <>
            <path
              d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.6 16.2C9.6 17.19 8.79 18 7.8 18C6.81 18 6 17.19 6 16.2C6 15.21 6.81 14.4 7.8 14.4H8.6C9.15 14.4 9.6 14.85 9.6 15.4V16.2ZM9.6 8.6C9.6 9.15 9.15 9.6 8.6 9.6H7.8C6.81 9.6 6 8.79 6 7.8C6 6.81 6.81 6 7.8 6C8.79 6 9.6 6.81 9.6 7.8V8.6ZM14.15 13.25C14.15 13.74 13.75 14.15 13.25 14.15H10.74C10.25 14.15 9.84 13.75 9.84 13.25V10.74C9.84 10.25 10.24 9.84 10.74 9.84H13.25C13.74 9.84 14.15 10.24 14.15 10.74V13.25ZM16.2 18C15.21 18 14.4 17.19 14.4 16.2V15.4C14.4 14.85 14.85 14.4 15.4 14.4H16.2C17.19 14.4 18 15.21 18 16.2C18 17.19 17.19 18 16.2 18ZM16.2 9.6H15.4C14.85 9.6 14.4 9.15 14.4 8.6V7.8C14.4 6.81 15.21 6 16.2 6C17.19 6 18 6.81 18 7.8C18 8.79 17.19 9.6 16.2 9.6Z"
              fill="#3C3C3C"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <g opacity="0.4">
              <path
                d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
                stroke='currentColor'
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
              fill="#3C3C3C"
            />
            <path
              d="M10.7496 14.1501H13.2596C13.7496 14.1501 14.1596 13.7501 14.1596 13.2501V10.7401C14.1596 10.2501 13.7596 9.84009 13.2596 9.84009H10.7496C10.2596 9.84009 9.84961 10.2401 9.84961 10.7401V13.2501C9.84961 13.7501 10.2496 14.1501 10.7496 14.1501Z"
              fill="#3C3C3C"
            />
            <path
              d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V15.3999C9.59998 14.8499 9.14998 14.3999 8.59998 14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
              fill="#3C3C3C"
            />
            <path
              d="M7.79999 9.60001H8.59998C9.14998 9.60001 9.59998 9.15001 9.59998 8.60001V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
              fill="#3C3C3C"
            />
            <path
              d="M15.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V8.60001C14.4004 9.15001 14.8504 9.60001 15.4004 9.60001Z"
              fill="#3C3C3C"
            />
            <path
              d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H15.4004C14.8504 14.3999 14.4004 14.8499 14.4004 15.3999V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
              fill="#3C3C3C"
            />
          </>
        );

      case 'broken':
        return (
          <>
            {' '}
            <path
              d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, color: color }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
