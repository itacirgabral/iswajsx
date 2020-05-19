function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 3l-3.5 3.5L16 3h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 0a3.5 3.5 0 013.469 3h-1.032c-.233-1.14-1.229-2-2.437-2A2.5 2.5 0 0014 3.5V13c0 2.848 3 8 3 8h-7s3-5.152 3-8V3.5A3.5 3.5 0 0116.5 0zM0 17l4.5 4.5L9 17H0zM7 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z"
}));

export default SvgComponent;