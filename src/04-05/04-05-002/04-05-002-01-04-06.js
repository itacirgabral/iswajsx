function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 4,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4V.818H2.984v1.458L.818.111.111.818l2.165 2.166H.818V4H4z"
}));

export default SvgComponent;