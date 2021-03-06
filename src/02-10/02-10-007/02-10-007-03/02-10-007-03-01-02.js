function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 10.11l.719-.72L7.5 11.173 9.281 9.39l.719.718-2.5 2.5-2.5-2.5zM.031 11c.012-.684.037-1.352.094-2h.969c-.047.646-.053 1.307-.063 2h-1zm0 1h1c.01.693.016 1.354.063 2H.125a28.785 28.785 0 01-.094-2zM.22 8c.134-1.067.35-2.095.594-3h.875c-.215.863-.383 1.88-.5 3h-.97zm0 7h.969c.117 1.12.285 2.137.5 3H.813a22.592 22.592 0 01-.594-3zm.875-11C1.919 1.556 3.138 0 4.5 0c1.165 0 2.232 1.144 3.031 3H4.594c-.332-.618-.7-1-1.094-1-.574 0-1.11.764-1.531 2h-.875zm0 15h.875c.422 1.236.957 2 1.531 2 .394 0 .762-.382 1.094-1H7.53c-.799 1.856-1.866 3-3.031 3-1.362 0-2.581-1.556-3.406-4zM5.03 4h2.875c.476 1.409.805 3.12.969 5H5.906c-.146-2.016-.45-3.758-.875-5zm0 15c.424-1.242.73-2.984.875-5h2.969c-.164 1.88-.493 3.591-.969 5H5.031z"
}));

export default SvgComponent;