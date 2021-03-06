function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 3h7.778L10 10.778V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.333.99C3.69-.368 6.446.128 9.16 1.94L7.835 3.266C5.695 1.67 3.763.974 3.04 1.696c-.976.977.606 4.143 3.535 7.072l5.657 5.657c2.93 2.929 6.095 4.511 7.071 3.535.768-.767-.072-2.898-1.878-5.193l1.37-1.37c2.051 2.854 2.645 5.84 1.215 7.27l-1.414 1.414c-1.757 1.758-5.873.492-9.192-2.828l-5.657-5.657C.427 8.276-.839 4.161.919 2.404L2.333.99z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 7h7.778L14 14.778V7z"
}));

export default SvgComponent;