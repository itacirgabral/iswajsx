function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 17v-4.063c-.413-.04-.816-.085-1.187-.218l-.844 3.156L7 15.594l.907-3.344c-.21-.132-.413-.245-.594-.406-.029-.026-.035-.068-.063-.094l-2.093 2.094-.688-.719 2.125-2.156A3.673 3.673 0 016 9h1c0 .138.016.276.063.406C7.389 10.318 8.809 11 10.5 11c1.933 0 3.5-.895 3.5-2h1c0 .276-.034.552-.094.813-.095.412-.273.8-.5 1.156l2.126 2.156-.688.719-2.094-2.094c-.027.026-.034.068-.062.094-.182.161-.384.274-.594.406L14 15.594l-.969.281-.843-3.156c-.25.09-.512.138-.782.187-.13.024-.27.018-.406.031V17h-1zM6.719 18L6 18.718l2.625 2.594 2.594-2.594L10.5 18l-1.875 1.875L6.719 18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 18l-.719.718 2.625 2.594L15 18.718 14.28 18l-1.875 1.875L10.5 18z"
}));

export default SvgComponent;