function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.314L11.314 0H0zm1.016 1.016h7.867L.994 8.906l.022-7.89z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 6.364l12.02 12.02a4 4 0 005.657 0l2.829-2.828a8 8 0 000-11.313l-7.071 7.07 2.121 2.122c1.172 1.172 1.488 2.755.707 3.536a2 2 0 01-2.828 0L6.364 4.95 4.95 6.364z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 1.016l-.022 7.89 7.889-7.89H1.016z",
  fill: "#fff"
}));

export default SvgComponent;