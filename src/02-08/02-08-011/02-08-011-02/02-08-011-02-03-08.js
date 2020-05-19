function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M40.314 19H29V7.686l1.414 1.415v8.485H38.9L40.314 19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M38.9 2.03a6 6 0 010 8.485l-3.536 3.535-1.414-1.414 3.535-3.535a4 4 0 10-5.657-5.657L12.03 23.243a5 5 0 01-7.07 0l-1.415-1.415c-4.686-4.686-4.686-12.284 0-16.97l8.485 8.485c-3.514 3.515-5.73 6.997-4.95 7.778 1.172 1.172 2.755 1.488 3.536.707l19.8-19.799a6 6 0 018.484 0z"
}));

export default SvgComponent;