function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.014 2.895l15.455 4.141.517-1.931L.532.964.014 2.895z"
}));

export default SvgComponent;