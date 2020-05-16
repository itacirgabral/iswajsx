import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={24} {...props}>
    <path d="M6.364 20.464L22.627 4.201l.708.707L7.07 21.172l-.707-.708zM2.828 16.929L19.092.665l.707.708L3.536 17.636l-.708-.707z" />
    <path
      d="M3.536 17.636L19.799 1.373 22.627 4.2 6.364 20.464l-2.828-2.828z"
      fill="#fff"
    />
    <path d="M20.022 16.006l-2.01-.022c-2.269-.238-4.546-1.806-6.365-3.624C9.83 10.54 8.261 8.264 8.023 5.996H7.007a10.97 10.97 0 003.226 7.778A10.97 10.97 0 0018.011 17H20l.022-.994zM13.017 5.996H2.013L7.515.493l5.502 5.503zM10.61 5L7.515 1.908 4.444 4.979l6.165.022zM0 14.1V24h9.9L0 14.1zm1.016 2.431l6.453 6.453H1.016V16.53z" />
    <path
      d="M1.016 16.531v6.453H7.47L1.016 16.53zM10.609 5.001L4.444 4.98l3.071-3.071L10.61 5z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
