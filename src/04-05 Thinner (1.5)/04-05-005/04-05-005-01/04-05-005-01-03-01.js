function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v1H0v1h1v2H0v1h1v1h1V5h2v1h1V5h1V4H5V2h1V1H5V0H4v1H2V0H1zm1 2h2v2H2V2z"
}));

export default SvgComponent;