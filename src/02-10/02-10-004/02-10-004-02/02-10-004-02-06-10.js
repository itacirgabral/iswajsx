function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.222 5l1.414 1.414h4.95v4.95L13 12.778V5H5.222z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.607.757C21.907-.94 17.594.512 13.42 4.006l.906.906c3.492-2.79 6.346-4.26 7.16-3.448 1.17 1.172-2.312 6.554-7.779 12.021-5.467 5.468-10.85 8.95-12.02 7.778-.783-.782.554-3.452 3.137-6.761l-.95-.95c-3.346 3.891-4.808 7.92-3.248 9.48l1.414 1.413c2.148 2.148 7.297-.933 12.374-6.01l4.95-4.95C24.05 8.8 26.34 3.491 23.607.757z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.222 9l1.414 1.414h4.95v4.95L9 16.778V9H1.222z"
}));

export default SvgComponent;