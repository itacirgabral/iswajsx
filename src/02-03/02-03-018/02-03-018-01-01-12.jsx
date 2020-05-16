import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={30} {...props}>
    <path d="M20.929 27.172L.423 6.665l.707-.707 20.506 20.506-.707.708zM8.996 6.01l5.5-5.5 5.5 5.5h-11z" />
    <path d="M28 20.1L18.1 30H28v-9.9z" />
    <path d="M24.464 23.636L3.958 3.13l.707-.707 20.507 20.506-.708.707z" />
    <path
      d="M21.636 26.464L1.13 5.958 3.958 3.13l20.506 20.506-2.828 2.828z"
      fill="#fff"
    />
    <path d="M1.99 16.022L4 16c2.268-.238 4.545-1.805 6.364-3.624 1.818-1.818 3.386-4.096 3.624-6.364h1.016a10.97 10.97 0 01-3.226 7.778A10.97 10.97 0 014 17.016H2.011l-.022-.994zM11.988 19.007l-5.5 5.5 5.5 5.5v-11zM22 12l-.022 2.01c-.238 2.269-1.806 4.546-3.624 6.365-1.819 1.818-4.096 3.386-6.364 3.624v1.016a10.97 10.97 0 007.778-3.226 10.97 10.97 0 003.226-7.778v-1.989L22 12z" />
  </svg>
);

export default SvgComponent;
