import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 8.5l1.375 1.375V15.5H16l1.5 1.5H9V8.5z" />
    <path d="M.868 18.768c-1.757-1.758-.49-5.873 2.829-9.193L9.354 3.92c3.319-3.32 7.435-4.586 9.192-2.829l1.414 1.414c1.758 1.758.491 5.873-2.828 9.193l-1.768 1.767-2.828-2.828 1.767-1.768c2.93-2.929 4.512-6.094 3.536-7.07-.976-.977-4.142.606-7.071 3.535L5.11 10.99c-2.929 2.929-4.512 6.094-3.536 7.07.768.768 2.898-.072 5.193-1.878l2.784 2.785c-2.853 2.05-5.84 2.645-7.27 1.215L.868 18.768z" />
  </svg>
);

export default SvgComponent;
