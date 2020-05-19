function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.719 0L0 .718l2.625 2.594L5.219.718 4.5 0 2.625 1.875.719 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0L3.78.718l2.625 2.594L9 .718 8.28 0 6.406 1.875 4.5 0z"
}));

export default SvgComponent;