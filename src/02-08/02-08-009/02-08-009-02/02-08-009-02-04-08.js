function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29.05 2.364l-8.131 8.132a3.5 3.5 0 01-4.95 0 3.48 3.48 0 01-1.017-2.475V5.148l-6.408 6.408a4 4 0 01-5.657 0 8 8 0 010-11.313l1.415 1.414a6 6 0 000 8.485 2 2 0 002.828 0L16.963.31l-.022 7.712c0 .384.15.768.442 1.06a1.5 1.5 0 002.121 0L27.636.95l1.414 1.414z"
}));

export default SvgComponent;