function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.531.219L0 1.5C1.905 4.269 4.568 6 7.5 6c2.932 0 5.595-1.731 7.5-4.5L13.469.219C11.933 2.549 9.835 4 7.5 4 5.165 4 3.067 2.55 1.531.219z"
}));

export default SvgComponent;