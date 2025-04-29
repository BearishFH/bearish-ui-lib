import { ISvg } from '../../SvgPropsType';

export const TranslateIcon: React.FC<ISvg> = ({
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
              d="M19.0622 18.6699L16.9222 14.3999L14.7822 18.6699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1719 17.9099H18.6919"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9218 22.0001C14.1218 22.0001 11.8418 19.73 11.8418 16.92C11.8418 14.12 14.1118 11.8401 16.9218 11.8401C19.7218 11.8401 22.0018 14.11 22.0018 16.92C22.0018 19.73 19.7318 22.0001 16.9218 22.0001Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.02196 2H8.94196C11.012 2 12.012 3.00002 11.962 5.02002V8.94C12.012 11.01 11.012 12.01 8.94196 11.96H5.02196C3.00196 12 2.00195 11 2.00195 8.92999V5.01001C2.00195 3.00001 3.00196 2 5.02196 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01215 5.84985H4.95215"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.97266 5.16992V5.84991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99239 5.83984C7.99239 7.58984 6.62238 9.00983 4.94238 9.00983"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.0121 9.01001C8.2821 9.01001 7.62211 8.62 7.16211 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.00195 15C2.00195 18.87 5.13195 22 9.00195 22L7.95195 20.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.002 9C22.002 5.13 18.872 2 15.002 2L16.052 3.75"
              stroke="currentColor"
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
              d="M8.93195 2H5.02195C3.00195 2 2.00195 3 2.00195 5.02V8.94C2.00195 11 3.00195 12 5.02195 11.95H8.94195C11.002 12 12.002 11 11.952 8.93V5.02C12.002 3 11.002 2 8.93195 2ZM9.01195 9.76C8.33195 9.76 7.67195 9.5 7.12195 9.04C6.50195 9.49 5.75195 9.76 4.94195 9.76C4.53195 9.76 4.19195 9.42 4.19195 9.01C4.19195 8.6 4.53195 8.26 4.94195 8.26C5.96195 8.26 6.81195 7.56 7.12195 6.6H4.94195C4.53195 6.6 4.19195 6.26 4.19195 5.85C4.19195 5.44 4.53195 5.1 4.94195 5.1H6.23195C6.27195 4.72 6.58195 4.42 6.97195 4.42C7.36195 4.42 7.67195 4.72 7.71195 5.1H7.97195C7.98195 5.1 7.99195 5.1 7.99195 5.1H8.01195H9.00195C9.41195 5.1 9.75195 5.44 9.75195 5.85C9.75195 6.26 9.42195 6.6 9.00195 6.6H8.67195C8.58195 7.08 8.39195 7.53 8.14195 7.94C8.41195 8.14 8.70195 8.26 9.01195 8.26C9.42195 8.26 9.76195 8.6 9.76195 9.01C9.76195 9.42 9.42195 9.76 9.01195 9.76Z"
              fill="currentColor"
            />
            <path
              d="M9.00195 22.75C4.73195 22.75 1.25195 19.27 1.25195 15C1.25195 14.59 1.59195 14.25 2.00195 14.25C2.41195 14.25 2.75195 14.59 2.75195 15C2.75195 17.96 4.81195 20.44 7.58195 21.09L7.31195 20.64C7.10195 20.28 7.21195 19.82 7.57195 19.61C7.92195 19.4 8.39195 19.51 8.60195 19.87L9.65195 21.62C9.79195 21.85 9.79195 22.14 9.66195 22.37C9.52195 22.6 9.27195 22.75 9.00195 22.75Z"
              fill="currentColor"
            />
            <path
              d="M22.0024 9.75C21.5924 9.75 21.2524 9.41 21.2524 9C21.2524 6.04 19.1924 3.56 16.4224 2.91L16.6924 3.36C16.9024 3.72 16.7924 4.18 16.4324 4.39C16.0824 4.6 15.6124 4.49 15.4024 4.13L14.3524 2.38C14.2124 2.15 14.2124 1.86 14.3424 1.63C14.4824 1.4 14.7324 1.25 15.0024 1.25C19.2724 1.25 22.7524 4.73 22.7524 9C22.7524 9.41 22.4124 9.75 22.0024 9.75Z"
              fill="currentColor"
            />
            <path
              d="M16.9218 11.8501C14.1218 11.8501 11.8418 14.1201 11.8418 16.9301C11.8418 19.7301 14.1118 22.0101 16.9218 22.0101C19.7218 22.0101 22.0018 19.7401 22.0018 16.9301C22.0018 14.1201 19.7318 11.8501 16.9218 11.8501ZM19.4018 19.3401C19.0318 19.5201 18.5818 19.3801 18.3918 19.0001L18.2218 18.6601H15.6318L15.4618 19.0001C15.3318 19.2601 15.0618 19.4101 14.7918 19.4101C14.6818 19.4101 14.5618 19.3801 14.4618 19.3301C14.0918 19.1401 13.9418 18.6901 14.1218 18.3201L16.2618 14.0501C16.3918 13.8001 16.6518 13.6401 16.9318 13.6401C17.2118 13.6401 17.4718 13.8001 17.6018 14.0601L19.7418 18.3301C19.9218 18.7001 19.7718 19.1501 19.4018 19.3401Z"
              fill="currentColor"
            />
            <path d="M16.3818 17.1601H17.4718L16.9218 16.0701L16.3818 17.1601Z" fill="currentColor" />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M19.0622 18.6699L16.9222 14.3999L14.7822 18.6699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1719 17.9099H18.6919"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9218 22.0001C14.1218 22.0001 11.8418 19.73 11.8418 16.92C11.8418 14.12 14.1118 11.8401 16.9218 11.8401C19.7218 11.8401 22.0018 14.11 22.0018 16.92C22.0018 19.73 19.7318 22.0001 16.9218 22.0001Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.02196 2H8.94196C11.012 2 12.012 3.00002 11.962 5.02002V8.94C12.012 11.01 11.012 12.01 8.94196 11.96H5.02196C3.00196 12 2.00195 11 2.00195 8.92999V5.01001C2.00195 3.00001 3.00196 2 5.02196 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01215 5.84985H4.95215"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.97266 5.16992V5.84991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99239 5.83984C7.99239 7.58984 6.62238 9.00983 4.94238 9.00983"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.0121 9.01001C8.2821 9.01001 7.62211 8.62 7.16211 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M2.00195 15C2.00195 18.87 5.13195 22 9.00195 22L7.95195 20.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M22.002 9C22.002 5.13 18.872 2 15.002 2L16.052 3.75"
              stroke="currentColor"
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
              d="M16.9218 22.0001C14.1218 22.0001 11.8418 19.7301 11.8418 16.9201C11.8418 14.1201 14.1118 11.8401 16.9218 11.8401C19.7218 11.8401 22.0018 14.1101 22.0018 16.9201C22.0018 19.7301 19.7318 22.0001 16.9218 22.0001Z"
              fill="currentColor"
            />
            <path
              opacity="0.4"
              d="M5.02196 2H8.94196C11.012 2 12.012 2.99999 11.962 5.01999V8.94C12.012 11.01 11.012 12.01 8.94196 11.96H5.02196C3.00196 12 2.00195 11 2.00195 8.92999V5.01001C2.00195 3.00001 3.00196 2 5.02196 2Z"
              fill="currentColor"
            />
            <path
              d="M9.01164 8.25992C8.70164 8.25992 8.41165 8.13991 8.14165 7.93991C8.39165 7.53991 8.57165 7.08991 8.66165 6.59991H9.00165C9.41165 6.59991 9.75165 6.25991 9.75165 5.84991C9.75165 5.43991 9.41165 5.09991 9.00165 5.09991H8.01164C8.00164 5.09991 7.99165 5.09991 7.99165 5.09991H7.97165H7.71165C7.67165 4.71991 7.36165 4.41992 6.97165 4.41992C6.58165 4.41992 6.27164 4.71991 6.23164 5.09991H4.94165C4.53165 5.09991 4.19165 5.43991 4.19165 5.84991C4.19165 6.25991 4.53165 6.59991 4.94165 6.59991H7.11165C6.81165 7.55991 5.95164 8.25992 4.93164 8.25992C4.52164 8.25992 4.18164 8.59992 4.18164 9.00992C4.18164 9.41992 4.52164 9.75992 4.93164 9.75992C5.74164 9.75992 6.49165 9.48992 7.11165 9.03992C7.66165 9.49992 8.32165 9.75992 9.00165 9.75992C9.41165 9.75992 9.75165 9.41992 9.75165 9.00992C9.75165 8.59992 9.42164 8.25992 9.01164 8.25992Z"
              fill="currentColor"
            />
            <path
              d="M9.00195 22.75C4.73195 22.75 1.25195 19.27 1.25195 15C1.25195 14.59 1.59195 14.25 2.00195 14.25C2.41195 14.25 2.75195 14.59 2.75195 15C2.75195 17.96 4.81195 20.44 7.58195 21.09L7.31195 20.64C7.10195 20.28 7.21196 19.82 7.57196 19.61C7.92196 19.4 8.39196 19.51 8.60196 19.87L9.65195 21.62C9.79195 21.85 9.79196 22.14 9.66196 22.37C9.52196 22.6 9.27195 22.75 9.00195 22.75Z"
              fill="currentColor"
            />
            <path
              d="M22.0024 9.75C21.5924 9.75 21.2524 9.41 21.2524 9C21.2524 6.04 19.1924 3.56 16.4224 2.91L16.6924 3.35999C16.9024 3.71999 16.7924 4.18001 16.4324 4.39001C16.0824 4.60001 15.6124 4.49001 15.4024 4.13L14.3524 2.38C14.2124 2.15 14.2124 1.86 14.3424 1.63C14.4724 1.39 14.7224 1.25 14.9924 1.25C19.2624 1.25 22.7424 4.73 22.7424 9C22.7524 9.41 22.4124 9.75 22.0024 9.75Z"
              fill="currentColor"
            />
            <path
              d="M19.7315 18.3301L17.5915 14.0601C17.4615 13.8101 17.2015 13.6401 16.9215 13.6401C16.6415 13.6401 16.3815 13.8001 16.2515 14.0501L14.1115 18.3201C13.9215 18.6901 14.0715 19.1401 14.4515 19.3301C14.5615 19.3801 14.6715 19.4101 14.7815 19.4101C15.0515 19.4101 15.3215 19.2601 15.4515 19.0001L15.6215 18.6601H18.2115L18.3815 19.0001C18.5715 19.3701 19.0215 19.5201 19.3915 19.3401C19.7715 19.1501 19.9215 18.7001 19.7315 18.3301ZM16.3815 17.1601L16.9315 16.0701L17.4815 17.1601H16.3815Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M19.0622 18.6699L16.9222 14.3999L14.7822 18.6699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1719 17.9099H18.6919"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9216 21.0201C19.0816 21.6301 18.0515 22.0001 16.9315 22.0001C14.1315 22.0001 11.8516 19.73 11.8516 16.92C11.8516 14.12 14.1215 11.8401 16.9315 11.8401C19.7315 11.8401 22.0116 14.11 22.0116 16.92"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.952 8.92999C12.002 11 11.0019 12 8.93195 11.95H5.01195C3.00195 12 2.00195 11 2.00195 8.92999V5.01001C2.00195 2.99001 3.00196 1.98999 5.02196 1.98999H8.94196C11.012 1.98999 12.012 2.99001 11.962 5.01001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01215 5.84985H4.95215"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.97266 5.16992V5.84991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.99239 5.83984C7.99239 7.58984 6.62238 9.00983 4.94238 9.00983"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.0121 9.01001C8.2821 9.01001 7.62211 8.62 7.16211 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.00195 15C2.00195 18.87 5.13195 22 9.00195 22L7.95195 20.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.002 9C22.002 5.13 18.872 2 15.002 2L16.052 3.75"
              stroke="currentColor"
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
