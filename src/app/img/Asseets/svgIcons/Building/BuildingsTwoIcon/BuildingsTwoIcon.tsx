import { ISvg } from '../../SvgPropsType';

export const BuildingsTwoIcon: React.FC<ISvg> = ({
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
              d="M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4m-4 3h4m-2 8v-3"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M10.6 4.15C10.6 4.34 10.44 4.5 10.25 4.5H9.12C6.96 4.5 5.2 6.26 5.2 8.42V17.65C5.2 17.84 5.04 18 4.85 18H4.15C2.96 18 2 17.04 2 15.85V4.15C2 2.96 2.96 2 4.15 2H8.45C9.64 2 10.6 2.96 10.6 4.15Z"
              fill='currentColor'
            />
            <path
              d="M22.0004 4.15V15.85C22.0004 17.04 21.0404 18 19.8504 18H19.2204C19.0304 18 18.8704 17.84 18.8704 17.65V8.42C18.8704 6.26 17.1104 4.5 14.9504 4.5H13.7504C13.5604 4.5 13.4004 4.34 13.4004 4.15C13.4004 2.96 14.3604 2 15.5504 2H19.8504C21.0404 2 22.0004 2.96 22.0004 4.15Z"
              fill='currentColor'
            />
            <path
              d="M14.9502 6H9.1202C7.7802 6 6.7002 7.08 6.7002 8.42V19.58C6.7002 20.92 7.7802 22 9.1202 22H10.7502C11.0302 22 11.2502 21.78 11.2502 21.5V19C11.2502 18.59 11.5902 18.25 12.0002 18.25C12.4102 18.25 12.7502 18.59 12.7502 19V21.5C12.7502 21.78 12.9702 22 13.2502 22H14.9602C16.2902 22 17.3702 20.92 17.3702 19.59V8.42C17.3702 7.08 16.2902 6 14.9502 6ZM14.0002 14.75H10.0002C9.5902 14.75 9.2502 14.41 9.2502 14C9.2502 13.59 9.5902 13.25 10.0002 13.25H14.0002C14.4102 13.25 14.7502 13.59 14.7502 14C14.7502 14.41 14.4102 14.75 14.0002 14.75ZM14.0002 11.75H10.0002C9.5902 11.75 9.2502 11.41 9.2502 11C9.2502 10.59 9.5902 10.25 10.0002 10.25H14.0002C14.4102 10.25 14.7502 10.59 14.7502 11C14.7502 11.41 14.4102 11.75 14.0002 11.75Z"
              fill='currentColor'
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              opacity=".4"
              d="M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity=".4"
              d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4m-4 3h4"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22v-3"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M10.6 4.15V6H9.12C7.51 6 6.7 6.81 6.7 8.42V18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15"
              fill='currentColor'
            />
            <path
              opacity=".4"
              d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42"
              fill='currentColor'
            />
            <path
              d="M22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48V8.42c0-1.61-.8-2.42-2.41-2.42H13.4V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15m-8 7.6h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m0 3h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M12.75 19v3h-1.5v-3c0-.41.34-.75.75-.75s.75.34.75.75"
              fill='currentColor'
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2 4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6M6.7 18H4.15C2.72 18 2 17.28 2 15.85V8.04"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4m-4 3h4m-2 8v-3"
              stroke='currentColor'
              strokeWidth="1.5"
              strokeMiterlimit="10"
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
