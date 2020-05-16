import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={48} {...props}>
    <path d="M9.219 15.094C3.73 18.047 0 23.83 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.67-3.73-12.453-9.219-15.406l-.687 1.312A16.002 16.002 0 0133.5 30.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.09 3.399-11.39 8.406-14.094l-.687-1.312zM9 5l5 5 .719-.719L10.438 5l4.28-4.281L14 0 9 5z" />
    <path d="M13 5.5v-1h6v1h-6zM26 11l-5 5-.719-.719L24.563 11 20.28 6.719 21 6l5 5z" />
    <path d="M22 11.5v-1h-6v1h6z" />
  </svg>
);

export default SvgComponent;
