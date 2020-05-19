function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3.272V16h12.728l-1.414-1.414h-9.9v-9.9L0 3.272zM21.213 3.272a8 8 0 00-11.314 0C8.104 5.067 2.83 6.101 2.83 6.101l7.07 7.07s1.034-5.275 2.829-7.07c2.343-2.344 5.509-2.977 7.071-1.415 1.562 1.562.296 5.361-2.828 8.486l1.414 1.414c3.905-3.905 5.171-8.97 2.828-11.314z"
}));

export default SvgComponent;