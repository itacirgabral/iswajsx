function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.179 1.866l1-1.732 34.641 20-1 1.732-34.641-20z"
}));

export default SvgComponent;