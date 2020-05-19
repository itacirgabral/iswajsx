function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 10.891l-.719.719L2.5 9.829l-1.781 1.78L0 10.892l2.5-2.5 2.5 2.5zM7 22.344c-.466.42-.977.656-1.5.656-1.165 0-2.232-1.144-3.031-3h2.937c.332.618.7 1 1.094 1a.835.835 0 00.5-.188v1.532zM7 2.187A.835.835 0 006.5 2c-.394 0-.762.382-1.094 1H2.47C3.268 1.144 4.335 0 5.5 0c.523 0 1.034.236 1.5.656v1.531zM4.969 19H2.094c-.39-1.152-.661-2.516-.844-4h2.938c.165 1.59.429 2.97.78 4zm0-15c-.352 1.03-.616 2.41-.782 4H1.25c.183-1.484.455-2.848.844-4h2.875z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 13.891l-.719.719L2.5 12.829l-1.781 1.78L0 13.892l2.5-2.5 2.5 2.5z"
}));

export default SvgComponent;