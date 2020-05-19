function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0L5 7h2l5-5 5 5h2l-7-7zM11 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 13v1h26v-1H0z"
}));

export default SvgComponent;