function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 10.891l.719.719L4.5 9.829l1.781 1.78.719-.718-2.5-2.5-2.5 2.5zM0 22.344c.466.42.977.656 1.5.656 1.165 0 2.232-1.144 3.031-3H1.594c-.332.618-.7 1-1.094 1a.835.835 0 01-.5-.188v1.532zM0 2.187A.835.835 0 01.5 2c.394 0 .762.382 1.094 1H4.53C3.732 1.144 2.665 0 1.5 0 .977 0 .466.236 0 .656v1.531zM2.031 19h2.875c.39-1.152.661-2.516.844-4H2.812c-.165 1.59-.429 2.97-.78 4zm0-15c.352 1.03.616 2.41.781 4H5.75c-.183-1.484-.455-2.848-.844-4H2.031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 13.891l.719.719L4.5 12.829l1.781 1.78.719-.718-2.5-2.5-2.5 2.5z"
}));

export default SvgComponent;