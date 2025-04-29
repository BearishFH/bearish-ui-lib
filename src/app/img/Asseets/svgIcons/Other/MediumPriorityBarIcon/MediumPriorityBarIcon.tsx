import { ISvg } from '../../SvgPropsType';

export const MediumPriorityBarIcon: React.FC<ISvg> = ({
  color,
  className,
  iconType = 'linear',
  w = 24,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <>
            <path
              d="M0 10.476C0 8.37208 1.70558 6.6665 3.80952 6.6665C4.86149 6.6665 5.71429 7.51929 5.71429 8.57127V18.9998C5.71429 19.5521 5.26657 19.9998 4.71429 19.9998H1C0.447716 19.9998 0 19.5521 0 18.9998V10.476Z"
              fill="currentColor"
            />
            <path
              d="M7.14258 7.14302C7.14258 5.03908 8.84816 3.3335 10.9521 3.3335C12.0041 3.3335 12.8569 4.18629 12.8569 5.23826V19.0002C12.8569 19.5524 12.4091 20.0002 11.8569 20.0002H8.14258C7.59029 20.0002 7.14258 19.5524 7.14258 19.0002V7.14302Z"
              fill="currentColor"
            />
            <path
              opacity="0.25"
              d="M14.2861 3.80952C14.2861 1.70558 15.9917 0 18.0957 0C19.1476 0 20.0004 0.852791 20.0004 1.90476V19C20.0004 19.5523 19.5527 20 19.0004 20H15.2861C14.7338 20 14.2861 19.5523 14.2861 19V3.80952Z"
              fill="currentColor"
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
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, color: color }}
      className={`bearishSvg ${className}`}
    >
      {renderIcon()}
    </svg>
  );
};
