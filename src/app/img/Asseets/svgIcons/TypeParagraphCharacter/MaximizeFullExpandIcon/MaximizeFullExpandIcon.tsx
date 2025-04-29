import { ISvg } from '../../SvgPropsType';

export const MaximizeFullExpandIcon: React.FC<ISvg> = ({
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
              d="M9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9V15C2.00195 20 4.00195 22 9.00195 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 6L6.00195 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 10V6H14.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 14V18H10.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 6L18.002 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 10V6H10.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 14V18H14.002"
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
              d="M20.952 4.13C20.662 3.71 20.292 3.34 19.872 3.05C18.922 2.36 17.682 2 16.192 2H7.81195C7.61195 2 7.41195 2.01 7.22195 2.03C3.94195 2.24 2.00195 4.37 2.00195 7.81V16.19C2.00195 17.68 2.36195 18.92 3.05195 19.87C3.34195 20.29 3.71195 20.66 4.13195 20.95C4.95195 21.55 5.99195 21.9 7.22195 21.98C7.41195 21.99 7.61195 22 7.81195 22H16.192C19.832 22 22.002 19.83 22.002 16.19V7.81C22.002 6.32 21.642 5.08 20.952 4.13ZM18.752 10C18.752 10.41 18.412 10.75 18.002 10.75C17.592 10.75 17.252 10.41 17.252 10V7.81L13.062 12L17.252 16.19V14C17.252 13.59 17.592 13.25 18.002 13.25C18.412 13.25 18.752 13.59 18.752 14V18C18.752 18.1 18.732 18.19 18.692 18.29C18.612 18.47 18.472 18.62 18.282 18.7C18.192 18.74 18.092 18.76 17.992 18.76H13.992C13.582 18.76 13.242 18.42 13.242 18.01C13.242 17.6 13.582 17.26 13.992 17.26H16.182L12.002 13.06L7.81195 17.25H10.002C10.412 17.25 10.752 17.59 10.752 18C10.752 18.41 10.412 18.75 10.002 18.75H6.00195C5.90195 18.75 5.80195 18.73 5.71195 18.69C5.53195 18.61 5.38195 18.47 5.30195 18.28C5.27195 18.19 5.25195 18.1 5.25195 18V14C5.25195 13.59 5.59195 13.25 6.00195 13.25C6.41195 13.25 6.75195 13.59 6.75195 14V16.19L10.942 12L6.75195 7.81V10C6.75195 10.41 6.41195 10.75 6.00195 10.75C5.59195 10.75 5.25195 10.41 5.25195 10V6C5.25195 5.9 5.27195 5.81 5.31195 5.71C5.39195 5.53 5.53195 5.38 5.72195 5.3C5.81195 5.27 5.90195 5.25 6.00195 5.25H10.002C10.412 5.25 10.752 5.59 10.752 6C10.752 6.41 10.412 6.75 10.002 6.75H7.81195L12.002 10.94L16.192 6.75H14.002C13.592 6.75 13.252 6.41 13.252 6C13.252 5.59 13.592 5.25 14.002 5.25H18.002C18.102 5.25 18.192 5.27 18.292 5.31C18.472 5.39 18.622 5.53 18.702 5.72C18.732 5.81 18.752 5.9 18.752 6V10Z"
              fill="currentColor"
            />
          </>
        );

      case 'twoTone':
        return (
          <>
            <path
              d="M9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9V15C2.00195 20 4.00195 22 9.00195 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M18.002 6L6.00195 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.002 10V6H14.002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00195 14V18H10.002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00195 6L18.002 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00195 10V6H10.002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.002 14V18H14.002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </>
        );

      case 'bulk':
        return (
          <>
            <path
              opacity="0.4"
              d="M22.002 7.81V16.19C22.002 19.83 19.832 22 16.192 22H7.81195C7.61195 22 7.41195 21.99 7.22195 21.98C5.99195 21.9 4.95195 21.55 4.13195 20.95C3.71195 20.66 3.34195 20.29 3.05195 19.87C2.36195 18.92 2.00195 17.68 2.00195 16.19V7.81C2.00195 4.37 3.94195 2.24 7.22195 2.03C7.41195 2.01 7.61195 2 7.81195 2H16.192C17.682 2 18.922 2.36 19.872 3.05C20.292 3.34 20.662 3.71 20.952 4.13C21.642 5.08 22.002 6.32 22.002 7.81Z"
              fill="currentColor"
            />
            <path
              d="M18.002 10.75C18.412 10.75 18.752 10.41 18.752 10V6C18.752 5.9 18.732 5.81 18.692 5.71C18.612 5.53 18.472 5.38 18.282 5.3C18.192 5.27 18.102 5.25 18.002 5.25H14.002C13.592 5.25 13.252 5.59 13.252 6C13.252 6.41 13.592 6.75 14.002 6.75H16.192L12.002 10.94L7.81195 6.75H10.002C10.412 6.75 10.752 6.41 10.752 6C10.752 5.59 10.412 5.25 10.002 5.25H6.00195C5.90195 5.25 5.81195 5.27 5.71195 5.31C5.53195 5.38 5.38195 5.53 5.31195 5.71C5.27195 5.81 5.25195 5.9 5.25195 6V10C5.25195 10.41 5.59195 10.75 6.00195 10.75C6.41195 10.75 6.75195 10.41 6.75195 10V7.81L10.942 12L6.75195 16.19V14C6.75195 13.59 6.41195 13.25 6.00195 13.25C5.59195 13.25 5.25195 13.59 5.25195 14V18C5.25195 18.1 5.27195 18.19 5.31195 18.29C5.39195 18.47 5.53195 18.62 5.72195 18.7C5.80195 18.73 5.90195 18.75 6.00195 18.75H10.002C10.412 18.75 10.752 18.41 10.752 18C10.752 17.59 10.412 17.25 10.002 17.25H7.81195L12.002 13.06L16.192 17.25H14.002C13.592 17.25 13.252 17.59 13.252 18C13.252 18.41 13.592 18.75 14.002 18.75H18.002C18.102 18.75 18.202 18.73 18.292 18.69C18.472 18.61 18.622 18.47 18.702 18.28C18.742 18.19 18.762 18.09 18.762 17.99V13.99C18.762 13.58 18.422 13.24 18.012 13.24C17.602 13.24 17.262 13.58 17.262 13.99V16.18L13.062 12L17.252 7.81V10C17.252 10.41 17.592 10.75 18.002 10.75Z"
              fill="currentColor"
            />
          </>
        );

      case 'broken':
        return (
          <>
            <path
              d="M2.00195 13V15C2.00195 20 4.00195 22 9.00195 22H15.002C20.002 22 22.002 20 22.002 15V9C22.002 4 20.002 2 15.002 2H9.00195C4.00195 2 2.00195 4 2.00195 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 6L6.00195 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 10V6H14.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 14V18H10.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 6L18.002 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00195 10V6H10.002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.002 14V18H14.002"
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
