import { TIntegrationIcons } from '../../IntegrationIconsType';

export const MeetIcon: React.FC<TIntegrationIcons> = ({ w = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 22 18" fill="none">
      <path
        d="M0 16.56C0 17.356.65 18 1.45 18h.022C.659 18 0 17.356 0 16.56M12.467 5.4v3.76l5.069-4.089V1.44c0-.796-.65-1.44-1.45-1.44H5.103l-.01 5.4z"
        fill="#FBBC05"
      />
      <path
        d="M12.468 12.92H5.082L5.074 18h11.011c.802 0 1.451-.644 1.451-1.44v-3.278l-5.068-4.12z"
        fill="#34A853"
      />
      <path d="M5.104 0 0 5.4h5.096z" fill="#EA4335" />
      <path d="M0 12.92v3.64C0 17.356.659 18 1.472 18h3.602l.008-5.08z" fill="#1967D2" />
      <path d="M5.096 5.4H0v7.52h5.082z" fill="#4285F4" />
      <path
        d="M21.993 15.28V2.92c-.286-1.64-2.085.24-2.085.24l-2.37 1.911v8.21l3.392 2.758c1.226.161 1.063-.76 1.063-.76"
        fill="#34A853"
      />
      <path d="m12.467 9.16 5.07 4.121V5.072z" fill="#188038" />
    </svg>
  );
};
