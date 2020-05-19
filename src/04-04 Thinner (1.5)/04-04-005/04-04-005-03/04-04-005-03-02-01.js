function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5.5C1.843.5.5 3.41.5 7s1.343 6.5 3 6.5 3-2.91 3-6.5S5.157.5 3.5.5zm0 1.5C4.328 2 5 4.239 5 7s-.672 5-1.5 5S2 9.761 2 7s.672-5 1.5-5z"
}));

export default SvgComponent;