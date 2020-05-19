function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 7v4.063c-.413.04-.816.085-1.187.218l-.844-3.156L7 8.406l.907 3.344c-.21.132-.413.245-.594.406-.029.026-.035.068-.063.094l-2.093-2.094-.688.719 2.125 2.156A3.673 3.673 0 006 15h1a1.2 1.2 0 01.063-.406C7.389 13.682 8.809 13 10.5 13c1.933 0 3.5.895 3.5 2h1c0-.276-.034-.552-.094-.813a3.728 3.728 0 00-.5-1.156l2.126-2.156-.688-.719-2.094 2.094c-.027-.026-.034-.068-.062-.094-.182-.161-.384-.274-.594-.406L14 8.406l-.969-.281-.843 3.156a4.852 4.852 0 00-.782-.187c-.13-.024-.27-.018-.406-.031V7h-1z"
}));

export default SvgComponent;