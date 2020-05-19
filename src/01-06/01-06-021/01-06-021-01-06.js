function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 8h15v13H6zM24.594.594L26 2l-4 4h-2.813L24.595.594zM1.406 9.594L5 13.188V16l-5-5 1.406-1.406z"
}));

export default SvgComponent;