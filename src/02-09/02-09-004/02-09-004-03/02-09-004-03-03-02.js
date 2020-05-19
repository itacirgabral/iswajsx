function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 28l-8 8-8-8h2l6 6 6-6h2zM30 0a7 7 0 00-7 7c0 3.314 3.134 6 7 6 2.761 0 5 1.79 5 4s-2.239 4-5 4h-7c-.61 0-1.182-.135-1.656-.344l-2.407-1.593A6.96 6.96 0 0014 17a7 7 0 00-7 7v4h2v-4a5 5 0 015-5c1.38 0 2.626.564 3.531 1.469l1.938 2.062A4.978 4.978 0 0023 24h7a7 7 0 000-14c-2.761 0-5-1.343-5-3 0-3.314 2.239-6 5-6h10V0H30z"
}));

export default SvgComponent;