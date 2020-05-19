function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.804.893L.286 2.825l30.91 8.282.517-1.932L.803.893z"
}));

export default SvgComponent;