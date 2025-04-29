import { TIntegrationIcons } from '../../IntegrationIconsType';

export const TeamsIcon: React.FC<TIntegrationIcons> = ({ w = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 32 30" fill="none">
      <path
        d="M19 13.903c0-.499.404-.903.903-.903h11.194c.499 0 .903.404.903.903V20.5a6.5 6.5 0 1 1-13 0z"
        fill="url(#a)"
      />
      <path
        d="M9 12.226C9 11.549 9.549 11 10.226 11h13.548c.677 0 1.226.549 1.226 1.226V22a8 8 0 1 1-16 0z"
        fill="url(#b)"
      />
      <circle cx="27" cy="8" r="3" fill="#34439E" />
      <circle cx="27" cy="8" r="3" fill="url(#c)" />
      <circle cx="18" cy="6" r="4" fill="url(#d)" />
      <mask id="g" mask-type="alpha"
              maskUnits="userSpaceOnUse" x="9" y="0" width="16" height="30">
        <path d="M17 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10" fill="url(#e)" />
        <path
          d="M10.226 11C9.549 11 9 11.549 9 12.226V22a8 8 0 1 0 16 0v-9.774c0-.677-.549-1.226-1.226-1.226z"
          fill="url(#f)"
        />
      </mask>
      <g mask="url(#g)">
        <path
          d="M7 12a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7z"
          fill="#000"
          fill-opacity=".3"
        />
      </g>
      <rect y="7" width="18" height="18" rx="2" fill="url(#h)" />
      <path d="M13 11H5v1.835h2.995V21h2.01v-8.165H13z" fill="#fff" />
      <defs>
        <linearGradient
          id="a"
          x1="19"
          y1="13.737"
          x2="32.159"
          y2="22.335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#364088" />
          <stop offset="1" stop-color="#6E7EE1" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="9"
          y1="19.404"
          x2="25"
          y2="19.404"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#515FC4" />
          <stop offset="1" stop-color="#7084EA" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="24"
          y1="5.316"
          x2="29.796"
          y2="9.395"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#364088" />
          <stop offset="1" stop-color="#6E7EE1" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="15.143"
          y1="3.143"
          x2="20.286"
          y2="9.143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4858AE" />
          <stop offset="1" stop-color="#4E60CE" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="13.429"
          y1="1.429"
          x2="19.857"
          y2="8.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4858AE" />
          <stop offset="1" stop-color="#4E60CE" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="13.429"
          y1="1.429"
          x2="19.857"
          y2="8.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4858AE" />
          <stop offset="1" stop-color="#4E60CE" />
        </linearGradient>
        <linearGradient id="h" x1="0" y1="16" x2="18" y2="16" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2A3887" />
          <stop offset="1" stop-color="#4C56B9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
