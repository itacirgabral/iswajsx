function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 4C7.784 4 6 5.784 6 8s1.784 4 4 4h7c2.216 0 4-1.784 4-4s-1.784-4-4-4h-7zm0 2v4c-1.108 0-2-.892-2-2s.892-2 2-2zm1 0h2v4h-2V6zm3 0h2v4h-2V6zm3 0c1.108 0 2 .892 2 2s-.892 2-2 2V6zM1 0v1H0v1h1v2H0v1h1v1h1V5h2v1h1V5h1V4H5V2h1V1H5V0H4v1H2V0H1zm1 2h2v2H2V2zM22 0v1h-1v1h1v2h-1v1h1v1h1V5h2v1h1V5h1V4h-1V2h1V1h-1V0h-1v1h-2V0h-1zm1 2h2v2h-2V2z"
}));

export default SvgComponent;