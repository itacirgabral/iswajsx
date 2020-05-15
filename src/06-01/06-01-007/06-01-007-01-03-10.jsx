import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M8 0v2.719L1.469 14l.687 1.188L0 16.438v1l.625 1.093A4.798 4.798 0 000 19.25v6.156c1.365 2.141 3.846 3.11 6 2.438l.219.375C5.127 28.716 4.209 30 3 30H0v3h1v-2h2c1.38 0 2.367-1.684 3.688-1.938l1.5-.03C9.575 29.191 10.575 31 12 31v-.781L2.656 14 9 3V0H8zm3.313 3L4.936 14 14 29.688V33h1v-3.594L6.125 14l5.781-10H26V3H11.312zM1.78 16.563l6.5 11.25L8 28h-.75l-.813-1.406c-1.913 1.104-4.476.246-5.718-1.907-1.243-2.152-.695-4.801 1.219-5.906l-1-1.718.843-.5zm.907 3.53c-1.196.691-1.516 2.41-.688 3.845.828 1.434 2.492 2.034 3.688 1.343l-3-5.187zm6.968 8.095l.563.968c-.32-.248-.639-.506-.969-.718l.406-.25zM7 31c-1.49 0-2.51 2-4 2h2c.627-.5 1.255-1 2-1h1c.745 0 1.373.5 2 1h2c-1.49 0-2.51-2-4-2H7z"
      fill="#fff"
    />
    <path d="M9 0v3L2.656 14 12 30.219V31c-1.49 0-2.51-2-4-2H7c-1.49 0-2.51 2-4 2H1v2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v-3.313L4.937 14l6.375-11H26V0H9z" />
    <path d="M.924 17.054l1 1.732C.011 19.89-.532 22.53.71 24.683c1.243 2.152 3.801 3.001 5.714 1.897l1 1.732.866-.5-6.5-11.258-.866.5zm1.75 3.03l3 5.197c-1.195.69-2.836.087-3.665-1.348-.828-1.435-.53-3.158.665-3.848z" />
  </svg>
);

export default SvgComponent;
