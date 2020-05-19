function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0C8.41 0 5.165 1.46 2.812 3.813l-2 2 1.375 1.375 2.032-1.97A10.97 10.97 0 0112 2a10.97 10.97 0 017.781 3.219L23.594 9 25 7.594l-3.813-3.782A12.952 12.952 0 0012 0z"
}));

export default SvgComponent;