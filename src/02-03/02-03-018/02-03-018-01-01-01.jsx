import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.778 19H0v-7.778L7.778 19zM18 7H4l7-7 7 7zM8 7v29h1V7H8z" />
    <path d="M19.092 14.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z" />
    <path d="M13 7v29h1V7h-1zM14.222 30H22v-7.778L14.222 30z" />
    <path d="M2.908 25.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L2.201 27.88l-.707-.707 1.414-1.415z" />
    <path d="M9 7v29h4V7H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;