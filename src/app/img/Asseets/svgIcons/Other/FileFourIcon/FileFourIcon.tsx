import { ISvg } from '../../SvgPropsType';

export const FileFourIcon: React.FC<ISvg> = ({ color, className, iconType = 'linear', w = 24 }) => {
  const renderIcon = () => {
    switch (iconType) {
      default:
        return (
          <path
            d="M11.6666 1.89105V5.33317C11.6666 5.79988 11.6666 6.03324 11.7574 6.2115C11.8373 6.3683 11.9648 6.49578 12.1216 6.57568C12.2999 6.6665 12.5332 6.6665 12.9999 6.6665H16.442M16.6666 8.32336V14.3332C16.6666 15.7333 16.6666 16.4334 16.3941 16.9681C16.1544 17.4386 15.772 17.821 15.3016 18.0607C14.7668 18.3332 14.0667 18.3332 12.6666 18.3332H7.33325C5.93312 18.3332 5.23306 18.3332 4.69828 18.0607C4.22787 17.821 3.84542 17.4386 3.60574 16.9681C3.33325 16.4334 3.33325 15.7333 3.33325 14.3332V5.6665C3.33325 4.26637 3.33325 3.56631 3.60574 3.03153C3.84542 2.56112 4.22787 2.17867 4.69828 1.93899C5.23306 1.6665 5.93312 1.6665 7.33325 1.6665H10.0097C10.6212 1.6665 10.9269 1.6665 11.2147 1.73558C11.4698 1.79682 11.7136 1.89783 11.9373 2.0349C12.1896 2.18951 12.4058 2.4057 12.8382 2.83808L15.495 5.49493C15.9274 5.92731 16.1436 6.1435 16.2982 6.39579C16.4353 6.61947 16.5363 6.86333 16.5975 7.11842C16.6666 7.40614 16.6666 7.71188 16.6666 8.32336Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
