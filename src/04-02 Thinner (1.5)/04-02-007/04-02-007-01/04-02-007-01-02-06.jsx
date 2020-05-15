import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 8V2.344h-1V7h-4.656v1H19z" />
    <path d="M14.757 6.586L11.222 3.05l.707-.707 3.535 3.536-.707.707zM16.879 4.464L13.343.93l.707-.707 3.536 3.535-.707.707zM8 8V2.344H7V7H2.344v1H8z" />
    <path d="M3.757 6.586L.222 3.05l.707-.707L4.464 5.88l-.707.707zM5.879 4.464L2.343.93 3.05.222l3.536 3.535-.707.707z" />
  </svg>
);

export default SvgComponent;
