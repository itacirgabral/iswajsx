function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11.314V0h11.314L0 11.314z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 6.364l8.131 8.132a3.5 3.5 0 004.95 0 3.48 3.48 0 001.017-2.475V9.148l6.761 6.762a3.5 3.5 0 004.95 0 3.48 3.48 0 001.017-2.475v-2.873l6.408 6.409a4 4 0 005.657 0l2.828-2.829a8 8 0 000-11.314L39.598 9.9l2.121 2.122c1.172 1.171 1.488 2.754.707 3.535a2 2 0 01-2.828 0l-9.833-9.833.022 7.712c0 .384-.15.768-.442 1.06a1.5 1.5 0 01-2.121 0L17.037 4.31l.022 7.712c0 .384-.15.768-.442 1.06a1.5 1.5 0 01-2.121 0L6.364 4.95 4.95 6.364z"
}));

export default SvgComponent;