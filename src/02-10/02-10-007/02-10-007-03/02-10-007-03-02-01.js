function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 12.89l.719.72L4.5 11.827l1.781 1.781.719-.718-2.5-2.5-2.5 2.5zM0 22.344c.466.42.977.656 1.5.656 1.165 0 2.232-1.144 3.031-3H1.594c-.332.618-.7 1-1.094 1a.835.835 0 01-.5-.188v1.532zM0 2.187A.835.835 0 01.5 2c.394 0 .762.382 1.094 1H4.53C3.732 1.144 2.665 0 1.5 0 .977 0 .466.236 0 .656v1.531zM2.031 19h2.875c.476-1.409.805-3.12.969-5H2.906c-.146 2.016-.45 3.758-.875 5zm0-15c.424 1.242.73 2.984.875 5h2.969c-.164-1.88-.493-3.591-.969-5H2.031z"
}));

export default SvgComponent;