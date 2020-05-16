import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={31} {...props}>
    <path d="M16 9l-7 7v15h14V16l-7-7z" />
    <path d="M16 11.813l-5 5.03V29h10V16.844l-5-5.032z" fill="#fff" />
    <path d="M14 21h7v3h-7zM20.75 3.25c-2.09.034-2.688 2.25-2.688 2.25l-.25.969L19.75 7c.074-.325.167-.646.25-.969.259-.966 1.219-.718 1.219-.718.966.258.718 1.218.718 1.218l-1.78 6.625 1.624 1.625c.703-2.571 1.362-5.155 2.094-7.719.776-2.897-2.125-3.687-2.125-3.687a3.635 3.635 0 00-1-.125zM14 0c-3 0-3 3-3 3v1h2V3c0-.75.563-.953.844-1H14c1 0 1 1 1 1v7l1-1 1 1V3c0-3-3-3-3-3zM8.25 3.438a3.634 3.634 0 00-1 .124s-2.901.759-2.125 3.657l.281.968 1.907-.5-.25-.968s-.248-.96.718-1.219c0 0 .96-.278 1.219.688l2.063 7.75 1.656-1.657-1.781-6.594s-.598-2.215-2.688-2.25zM3.406 10.563c-1.14.103-1.969.937-1.969.937-2.12 2.121 0 4.25 0 4.25l.72.688 1.405-1.407-.718-.719c-.707-.707 0-1.406 0-1.406.53-.53 1.08-.26 1.312-.094L9 17.625V16l.594-.594L5.688 11.5c-.796-.795-1.598-1-2.282-.938z" />
  </svg>
);

export default SvgComponent;
