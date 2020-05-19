function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.929 5.165l2.5-4.33 34.641 20-2.5 4.33-34.641-20z"
}));

export default SvgComponent;