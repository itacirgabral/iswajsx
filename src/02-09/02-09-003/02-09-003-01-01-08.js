function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v14L0 7l7-7zM27 22a6 6 0 00-6-6h-5v-4a6 6 0 00-6-6H7v2h3c2.21 0 3.733 2.133 4 4l.563 4H13a3 3 0 103 3v-1.625L21 18c1.871.234 4 1.79 4 4v5h2v-5zm-12-3a2 2 0 11-2-2l1.75.219L15 19z"
}));

export default SvgComponent;