import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 14H.686l1.415 1.414h8.485V23.9L12 25.314V14z" />
    <path d="M43.82.565L35.51 8.873a4.443 4.443 0 00-1.237-2.298 4.5 4.5 0 00-6.364 6.364 4.443 4.443 0 002.298 1.238l-3.182 3.182a4.443 4.443 0 00-1.237-2.298 4.5 4.5 0 00-6.364 6.364 4.443 4.443 0 002.298 1.237l-8.309 8.309a4 4 0 01-5.657 0c-1.952-1.953-1.32-5.752 1.415-8.486l-5.657-5.657a9 9 0 000 12.728l2.828 2.829a6 6 0 008.485 0L45.234 1.979 43.82.565zM32.86 7.99a2.5 2.5 0 11-3.536 3.535A2.5 2.5 0 0132.86 7.99zm-8.486 8.485a2.5 2.5 0 11-3.535 3.535 2.5 2.5 0 013.535-3.535z" />
  </svg>
);

export default SvgComponent;
