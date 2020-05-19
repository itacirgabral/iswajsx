function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0l.719.719L1.406 3.5l2.782 2.813L3.5 7 0 3.5 3.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 3A3.5 3.5 0 0110 6.5 6.708 6.708 0 019 10H7V8c1.104 0 2-.672 2-1.5A2.5 2.5 0 006.5 4H4V3h2.5zM16.5 0l.719.719L14.406 3.5l2.782 2.813L16.5 7 13 3.5 16.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 3A3.5 3.5 0 0123 6.5a6.708 6.708 0 01-1 3.5h-2V8c1.105 0 2-.672 2-1.5A2.5 2.5 0 0019.5 4H17V3h2.5z"
}));

export default SvgComponent;