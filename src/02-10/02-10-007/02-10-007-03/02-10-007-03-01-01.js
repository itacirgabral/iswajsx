function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 12.89l.719.72L7.5 11.827l1.781 1.781.719-.718-2.5-2.5-2.5 2.5zM.031 12c.012.684.037 1.352.094 2h.969c-.047-.646-.053-1.307-.063-2h-1zm0-1h1c.01-.693.016-1.354.063-2H.125a28.785 28.785 0 00-.094 2zm.188 4c.134 1.067.35 2.095.594 3h.875a22.374 22.374 0 01-.5-3h-.97zm0-7h.969c.117-1.12.285-2.137.5-3H.813c-.244.905-.46 1.933-.594 3zm.875 11c.825 2.444 2.044 4 3.406 4 1.165 0 2.232-1.144 3.031-3H4.594c-.332.618-.7 1-1.094 1-.574 0-1.11-.764-1.531-2h-.875zm0-15h.875c.422-1.236.957-2 1.531-2 .394 0 .762.382 1.094 1H7.53C6.732 1.144 5.665 0 4.5 0 3.138 0 1.919 1.556 1.094 4zM5.03 19h2.875c.476-1.409.805-3.12.969-5H5.906c-.146 2.016-.45 3.758-.875 5zm0-15c.424 1.242.73 2.984.875 5h2.969c-.164-1.88-.493-3.591-.969-5H5.031z"
}));

export default SvgComponent;