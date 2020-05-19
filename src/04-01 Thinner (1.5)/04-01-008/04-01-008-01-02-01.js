function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.11 5l-.72.719L11.173 7.5 9.39 9.281l.718.719 2.5-2.5-2.5-2.5zM11 .031c-.684.012-1.352.037-2 .094v.969c.646-.047 1.307-.053 2-.063v-1zm1 0v1c.693.01 1.354.016 2 .063V.125a28.785 28.785 0 00-2-.094zM8 .22c-1.067.134-2.095.35-3 .594v.875c.863-.215 1.88-.383 3-.5v-.97zm7 0v.969c1.12.117 2.137.285 3 .5V.813a22.592 22.592 0 00-3-.594zM4 1.094C1.556 1.919 0 3.138 0 4.5c0 1.165 1.144 2.232 3 3.031V4.594c-.618-.332-1-.7-1-1.094 0-.574.764-1.11 2-1.531v-.875zm15 0v.875c1.236.422 2 .957 2 1.531 0 .394-.382.762-1 1.094V7.53c1.856-.799 3-1.866 3-3.031 0-1.362-1.556-2.581-4-3.406zM4 5.03v2.875c1.409.476 3.12.805 5 .969V5.906c-2.016-.146-3.758-.45-5-.875zm15 0c-1.242.424-2.984.73-5 .875v2.969c1.88-.164 3.591-.493 5-.969V5.031z"
}));

export default SvgComponent;