function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 12.89l-.719.72L2.5 11.827.719 13.61 0 12.891l2.5-2.5 2.5 2.5zM7 22.344c-.466.42-.977.656-1.5.656-1.165 0-2.232-1.144-3.031-3h2.937c.332.618.7 1 1.094 1a.835.835 0 00.5-.188v1.532zM7 2.187A.835.835 0 006.5 2c-.394 0-.762.382-1.094 1H2.47C3.268 1.144 4.335 0 5.5 0c.523 0 1.034.236 1.5.656v1.531zM4.969 19H2.094c-.476-1.409-.805-3.12-.969-5h2.969c.146 2.016.45 3.758.875 5zm0-15c-.424 1.242-.73 2.984-.875 5H1.125c.164-1.88.493-3.591.969-5h2.875z"
}));

export default SvgComponent;