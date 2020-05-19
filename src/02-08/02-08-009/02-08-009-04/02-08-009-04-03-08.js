function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M50 0v11.314l-1.414-1.415V1.414H40.1L38.686 0H50zM45.05 6.364l-8.131 8.132a3.5 3.5 0 01-4.95 0 3.48 3.48 0 01-1.017-2.475V9.148l-6.761 6.762a3.5 3.5 0 01-4.95 0 3.48 3.48 0 01-1.017-2.475v-2.873l-6.408 6.409a4 4 0 01-5.657 0l-2.828-2.829a8 8 0 010-11.314L10.402 9.9l-2.121 2.122c-1.172 1.171-1.488 2.754-.707 3.535a2 2 0 002.828 0l9.833-9.833-.022 7.712c0 .384.15.768.442 1.06a1.5 1.5 0 002.121 0L32.963 4.31l-.022 7.712c0 .384.15.768.442 1.06a1.5 1.5 0 002.121 0l8.132-8.131 1.414 1.414z"
}));

export default SvgComponent;