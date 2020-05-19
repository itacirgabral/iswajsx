function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 00-4 4v25h2v-6.406A2.98 2.98 0 003.5 23a3 3 0 000-6 2.98 2.98 0 00-1.5.406v-2.812A2.98 2.98 0 003.5 15a3 3 0 000-6 2.98 2.98 0 00-1.5.406V4a2 2 0 012-2 1 1 0 011 1v5h2V3a3 3 0 00-3-3zm-.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
}));

export default SvgComponent;