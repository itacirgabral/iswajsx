function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.531 5.781L0 4.5C1.905 1.73 4.568 0 7.5 0c2.932 0 5.595 1.731 7.5 4.5L13.469 5.78C11.933 3.451 9.835 2 7.5 2 5.165 2 3.067 3.45 1.531 5.78z"
}));

export default SvgComponent;