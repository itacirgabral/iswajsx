import React from "react";

const SvgComponent = (props) => (
  <svg width={39} height={31} {...props}>
    <path d="M38.9 16H29V6.1l1.414 1.415v7.07h7.071L38.9 16z" />
    <path d="M36.778 2.565a5 5 0 010 7.071l-2.121 2.121-1.414-1.414 2.121-2.121a3 3 0 000-4.243l-.707-.707a4 4 0 00-5.657 0l-4.64 4.64a3.99 3.99 0 011.812 1.017 4 4 0 01-5.657 5.657 3.99 3.99 0 01-1.017-1.812l-2.21 2.21A3.99 3.99 0 0119.102 16a4 4 0 11-5.657 5.657 4 4 0 01-1.017-1.768c-2.636 3.127-3.933 10.96-3.933 10.96L.009 22.364s8.465-1.395 11.313-4.243L13.444 16l7.07-7.071 7.072-7.071a6 6 0 018.485 0l.707.707zm-12.02 7.778a2 2 0 10-2.83 2.829 2 2 0 002.83-2.829zm-7.072 7.071a2 2 0 10-2.828 2.829 2 2 0 002.828-2.829z" />
  </svg>
);

export default SvgComponent;
