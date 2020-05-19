function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.324 6.237l-1.061-1.06-4.95 4.95 1.06 1.06z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.035 1.464a5 5 0 10-7.07 7.072 5 5 0 007.07-7.072zm-.707.708a4 4 0 11-5.656 5.656 4 4 0 015.656-5.656z"
}));

export default SvgComponent;