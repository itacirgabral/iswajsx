function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 28l8 8 8-8h-2l-6 6-6-6h-2zM10 0a7 7 0 017 7c0 3.314-3.134 6-7 6-2.761 0-5 1.79-5 4s2.239 4 5 4h7c.61 0 1.182-.135 1.656-.344l2.407-1.593A6.96 6.96 0 0126 17a7 7 0 017 7v4h-2v-4a5 5 0 00-5-5c-1.38 0-2.626.564-3.531 1.469L20.53 22.53A4.978 4.978 0 0117 24h-7a7 7 0 010-14c2.761 0 5-1.343 5-3 0-3.314-2.239-6-5-6H0V0h10z"
}));

export default SvgComponent;