import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={30} {...props}>
    <path d="M2.828 22.929L23.335 2.423l.707.707L3.536 23.636l-.708-.707zM18.993 5.988l-5.5-5.5-5.5 5.5h11z" />
    <path d="M9.9 30L0 20.1V30h9.9z" />
    <path d="M6.364 26.464L26.87 5.958l.707.707L7.071 27.172l-.707-.708z" />
    <path
      d="M3.536 23.636L24.042 3.13l2.828 2.828L6.364 26.464l-2.828-2.828z"
      fill="#fff"
    />
    <path d="M26 16l-2.01-.022c-2.269-.238-4.546-1.806-6.365-3.624-1.818-1.819-3.386-4.096-3.624-6.364h-1.016a10.97 10.97 0 003.226 7.778 10.97 10.97 0 007.778 3.226h1.989L26 16zM10.993 13.988l-5.5-5.5-5.5 5.5h11zM18 24l-2.01-.022c-2.269-.238-4.546-1.806-6.365-3.624-1.818-1.819-3.386-4.096-3.624-6.364H4.985a10.97 10.97 0 003.226 7.778 10.97 10.97 0 007.778 3.226h1.989L18 24z" />
  </svg>
);

export default SvgComponent;
