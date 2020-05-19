function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.243 2.657L16.506 18.92a4 4 0 005.657 0 6 6 0 000-8.485l-1.414 1.414a4 4 0 010 5.657 2 2 0 01-2.829 0l-3.27-3.27a3.5 3.5 0 10-4.066-4.066L8.286 7.872A3.5 3.5 0 104.22 3.806L1.657 1.243.243 2.657zm6.01.353A2 2 0 119.081 5.84 2 2 0 016.253 3.01zm6.364 6.364a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}));

export default SvgComponent;