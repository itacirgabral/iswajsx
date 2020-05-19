function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v4.063c-.413.04-.816.085-1.187.218l-.844-3.156L3 1.406l.906 3.344c-.21.132-.412.245-.593.406-.029.026-.035.068-.063.094L1.156 3.156l-.687.719 2.125 2.156A3.673 3.673 0 002 8h1a1.2 1.2 0 01.063-.406C3.389 6.682 4.809 6 6.5 6c1.933 0 3.5.895 3.5 2h1c0-.276-.034-.552-.093-.813a3.728 3.728 0 00-.5-1.156l2.124-2.156-.687-.719L9.75 5.25c-.027-.026-.034-.068-.062-.094-.182-.161-.384-.274-.594-.406L10 1.406l-.969-.281-.843 3.156a4.852 4.852 0 00-.782-.187c-.13-.024-.27-.018-.406-.032V0H6z"
}));

export default SvgComponent;