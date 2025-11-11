const CameraIcon = (props) => (
  <svg
    width={props.width || 32}
    height={props.height || 32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="8" width="26" height="18" rx="3" fill="#222" />
    <circle cx="16" cy="17" r="6" fill="#fff" />
    <circle cx="16" cy="17" r="4" fill="#222" />
    <rect x="10" y="4" width="12" height="4" rx="1" fill="#222" />
    {/* Puedes ajustar colores y dimensiones según tu diseño */}
  </svg>
);

export default CameraIcon;