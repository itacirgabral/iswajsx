function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13h15v13H7zM1.938 3.094L.5 4.5 7 11h2.813L1.936 3.094zM4.094.281L2.687 1.687 12 11h2.813L4.092.281z"
}));

export default SvgComponent;