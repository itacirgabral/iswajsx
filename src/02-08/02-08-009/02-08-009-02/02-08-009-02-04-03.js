function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.95 2.364l8.131 8.132a3.5 3.5 0 004.95 0 3.48 3.48 0 001.017-2.475V5.148l6.408 6.408a4 4 0 005.657 0 8 8 0 000-11.313l-1.415 1.414a6 6 0 010 8.485 2 2 0 01-2.828 0L13.037.31l.022 7.712c0 .384-.15.768-.442 1.06a1.5 1.5 0 01-2.121 0L2.364.95.95 2.364z"
}));

export default SvgComponent;