function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.188.25C.432 2.254.185 4.38 0 6.5c.023 2.197.526 4.2 1.188 6.25L12 6.5 1.187.25zm1.218 3L8.031 6.5 2.375 9.75C2.152 8.688 2.045 7.595 2 6.5c-.039-1.118.146-2.19.406-3.25z"
}));

export default SvgComponent;