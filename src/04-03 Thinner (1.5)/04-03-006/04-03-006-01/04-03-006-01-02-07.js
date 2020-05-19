function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 7H9v2h2V7zM7 7H5v2h2V7zM3 7H1v2h2V7zM10.628 13.463l-1.902-.51-.517 1.932 1.901.51.518-1.932zm-3.834-1.027l-1.931-.518-.518 1.932 1.932.518.517-1.932zm-3.863-1.035l-1.962-.526-.518 1.932 1.962.526.518-1.932zM10.11.605l-1.901.51.517 1.931 1.902-.51L10.11.606zM6.277 1.632l-1.932.518.518 1.932 1.931-.518-.517-1.932zM2.413 2.667l-1.962.526.518 1.932 1.962-.526-.518-1.932z"
}));

export default SvgComponent;