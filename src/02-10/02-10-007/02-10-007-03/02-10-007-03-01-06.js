function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.89 5l.72.719L11.827 7.5l1.781 1.781-.718.719-2.5-2.5 2.5-2.5zM12 .031c.684.012 1.352.037 2 .094v.969c-.646-.047-1.307-.053-2-.063v-1zm-1 0v1c-.693.01-1.354.016-2 .063V.125a28.785 28.785 0 012-.094zm4 .188c1.067.134 2.095.35 3 .594v.875a22.374 22.374 0 00-3-.5v-.97zm-7 0v.969c-1.12.117-2.137.285-3 .5V.813c.905-.244 1.933-.46 3-.594zm11 .875c2.444.825 4 2.044 4 3.406 0 1.165-1.144 2.232-3 3.031V4.594c.618-.332 1-.7 1-1.094 0-.574-.764-1.11-2-1.531v-.875zm-15 0v.875C2.764 2.39 2 2.926 2 3.5c0 .394.382.762 1 1.094V7.53C1.144 6.732 0 5.665 0 4.5c0-1.362 1.556-2.581 4-3.406zM19 5.03v2.875c-1.409.476-3.12.805-5 .969V5.906c2.016-.146 3.758-.45 5-.875zm-15 0c1.242.424 2.984.73 5 .875v2.969c-1.88-.164-3.591-.493-5-.969V5.031z"
}));

export default SvgComponent;