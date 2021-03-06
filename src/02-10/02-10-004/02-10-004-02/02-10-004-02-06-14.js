function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 5.222l1.414 1.414v4.95h4.95L12.778 13H5V5.222z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.757 23.607c-1.698-1.7-.245-6.013 3.249-10.187l.906.906c-2.79 3.492-4.26 6.346-3.448 7.16 1.172 1.17 6.554-2.312 12.021-7.779 5.468-5.467 8.95-10.85 7.778-12.02-.782-.783-3.452.554-6.761 3.137l-.95-.95c3.891-3.346 7.92-4.808 9.48-3.248l1.413 1.414c2.148 2.148-.933 7.297-6.01 12.374l-4.95 4.95C8.8 24.05 3.491 26.34.757 23.607z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 1.222l1.414 1.414v4.95h4.95L16.778 9H9V1.222z"
}));

export default SvgComponent;