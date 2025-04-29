import { ISvg } from '../../SvgPropsType';

export const CalendarEditIcon: React.FC<ISvg> = ({
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
              d="M8 2v3m8-3v3M3.5 9.09h17m-1.29 6.68-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7 16.28c.3 1.08 1.14 1.92 2.22 2.22M12 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bold':
        return (
          <>
            <path
              d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
              fill="currentColor"
            />
            <path
              d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM14.84 14.9898L14.34 15.4998H14.33L11.3 18.5298C11.17 18.6598 10.9 18.7998 10.71 18.8198L9.36 19.0198C8.87 19.0898 8.53 18.7398 8.6 18.2598L8.79 16.8998C8.82 16.7098 8.95 16.4498 9.08 16.3098L12.12 13.2798L12.62 12.7698C12.95 12.4398 13.32 12.1998 13.72 12.1998C14.06 12.1998 14.43 12.3598 14.84 12.7698C15.74 13.6698 15.45 14.3798 14.84 14.9898Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M8 2v3m8-3v3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity=".4"
              d="M3.5 9.09h17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.21 15.77-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7 16.28c.3 1.08 1.14 1.92 2.22 2.22M12 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity=".4"
              d="M11.996 13.7h.008m-3.71 0h.01m-.009 3h.009"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              opacity=".4"
              d="M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1z"
              fill="currentColor"
            />
            <path
              d="m14.84 14.99-.5.51h-.01l-3.03 3.03c-.13.13-.4.27-.59.29l-1.35.2c-.49.07-.83-.28-.76-.76l.19-1.36c.03-.19.16-.45.29-.59l3.04-3.03.5-.51c.33-.33.7-.57 1.1-.57.34 0 .71.16 1.12.57.9.9.61 1.61 0 2.22"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M8 2v3m8-3v3M3.5 9.09h17m-1.29 6.68-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7 16.28c.3 1.08 1.14 1.92 2.22 2.22M3 13.08V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12m-9 10H8c-3.5 0-5-2-5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.996 13.7h.008m-3.71 0h.01m-.01 3h.01"
              stroke="currentColor"
              strokeWidth="2"
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
