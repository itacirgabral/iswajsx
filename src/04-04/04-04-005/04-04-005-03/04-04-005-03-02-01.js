function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.5 7c0 3.59 1.343 6.5 3 6.5s3-2.91 3-6.5S5.157.5 3.5.5.5 3.41.5 7zm2 0c0-2.485.448-4.5 1-4.5s1 2.015 1 4.5-.448 4.5-1 4.5-1-2.015-1-4.5z"
}));

export default SvgComponent;