function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v2l5 5-5 5v2l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 6v2H6a4 4 0 100 8h6v4H5a3 3 0 000 6h8v4H7a7 7 0 01-7-7 5.994 5.994 0 013.594-5.5A5.994 5.994 0 010 12a6 6 0 016-6h3z"
}));

export default SvgComponent;