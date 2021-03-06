function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0v9.625a3.5 3.5 0 100 5.75v3.25a3.5 3.5 0 100 5.75V33a3 3 0 01-3 3c-2.761 0-5-1.79-5-4H0c0 3.314 3.134 6 7 6a5 5 0 005-5V0h-2zM8 10.5a2 2 0 110 4 2 2 0 010-4zm0 9a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;