import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 15.1L9.9 25H0v-9.9z" />
    <path d="M27.577 1.665a4 4 0 00-5.657 0L9.192 14.393c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s.885-4.48 2.43-6.585c.137.469.383.912.752 1.281a3 3 0 104.243-4.242 2.98 2.98 0 00-1.348-.774l1.989-1.988c.13.493.386.96.773 1.348a3 3 0 004.243-4.243 2.98 2.98 0 00-1.348-.774l3.823-3.822a2 2 0 012.828 0 1 1 0 010 1.414l-3.536 3.535 1.415 1.415 3.535-3.536a3 3 0 000-4.243zM19.8 8.737a1.5 1.5 0 11-2.121 2.12 1.5 1.5 0 012.121-2.12zm-5.657 5.656a1.5 1.5 0 11-2.121 2.122 1.5 1.5 0 012.121-2.122z" />
  </svg>
);

export default SvgComponent;
