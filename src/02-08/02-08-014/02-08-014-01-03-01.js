function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33 11l-7 7h2l5-5 5 5h2l-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 0v18a5 5 0 005 5h3c3.314 0 6-2.239 6-5h-6a3 3 0 01-6 0V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 12v1h29v-1H0zm37 0v1h6v-1h-6zM9 0L2 7h2l5-5 5 5h2L9 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7H8z"
}));

export default SvgComponent;