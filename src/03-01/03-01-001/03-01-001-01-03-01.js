function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.406 0L0 5.438V7h12V5H4.687L12 .781V0H9.406zM9.406 9L0 14.438V16h12v-2H4.687L12 9.781V9H9.406z"
}));

export default SvgComponent;