function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9v2h-8V9h8zM14 9v2H0V9h14zM25 17l7-7-7-7v2.844L29.156 10 25 14.156V17zM5 3l4.5 4.5L14 3h-1.406L9.5 6.094 6.406 3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 0C14.433 0 16 1.343 16 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S10 1.895 10 3H9c0-1.657 1.567-3 3.5-3z"
}));

export default SvgComponent;