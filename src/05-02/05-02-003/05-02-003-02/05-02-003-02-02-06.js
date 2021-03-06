function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.722.515L.687 4.38l11.591 3.106 1.035-3.864L1.723.515z"
}));

export default SvgComponent;