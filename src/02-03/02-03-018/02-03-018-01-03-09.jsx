import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={36} {...props}>
    <path d="M4 7l7-7 7 7h-2.844L11 2.844 6.844 7H4zM13 7v29h1V7h-1zM22 11.219V19h-7.781l1-1H21v-5.781l1-1z" />
    <path d="M2.908 14.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L2.201 16.88l-.707-.707 1.414-1.415z" />
    <path d="M8 7v29h1V7H8zM0 22.219V30h7.781l-1-1H1v-5.781l-1-1z" />
    <path d="M19.092 25.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z" />
    <path d="M9 7v29h4V7H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
