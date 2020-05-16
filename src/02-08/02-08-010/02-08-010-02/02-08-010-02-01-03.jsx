import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={22} {...props}>
    <path d="M0 11.314V0h11.314L0 11.314z" />
    <path d="M4.95 6.364l14.142 14.142a4 4 0 005.657 0l2.828-2.828a8 8 0 000-11.314l-7.07 7.071 2.12 2.121c1.172 1.172 1.489 2.755.708 3.536a2 2 0 01-2.829 0l-5.347-5.348c.66-.176 1.293-.498 1.812-1.016a4 4 0 10-5.657-5.657c-.519.518-.84 1.152-1.017 1.812L6.364 4.95 4.95 6.364zm7.778 2.121a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z" />
  </svg>
);

export default SvgComponent;
