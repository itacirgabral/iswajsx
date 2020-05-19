function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.544 1.757a6 6 0 018.485 0L30.121 20.85c.781.781 2.364.465 3.536-.707.78-.78.464-2.364-.707-3.535l-2.122-2.122 5.657-5.657 2.829 2.829c2.343 2.343 1.71 6.775-1.415 9.9l-1.414 1.414a5 5 0 01-7.07 0l-19.8-19.8a4 4 0 00-5.657 5.657L11.03 15.9l-1.414 1.415-7.07-7.071a6 6 0 010-8.486z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M39.314 6L28 17.314V6h11.314z"
}));

export default SvgComponent;