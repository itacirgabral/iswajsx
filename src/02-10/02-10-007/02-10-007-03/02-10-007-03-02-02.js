function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 10.11l.719-.72L4.5 11.173 6.281 9.39l.719.718-2.5 2.5-2.5-2.5zM0 .656C.466.236.977 0 1.5 0c1.165 0 2.232 1.144 3.031 3H1.594C1.262 2.382.894 2 .5 2a.835.835 0 00-.5.188V.655zm0 20.157A.835.835 0 00.5 21c.394 0 .762-.382 1.094-1H4.53c-.799 1.856-1.866 3-3.031 3-.523 0-1.034-.236-1.5-.656v-1.532zM2.031 4h2.875c.476 1.409.805 3.12.969 5H2.906c-.146-2.016-.45-3.758-.875-5zm0 15c.424-1.242.73-2.984.875-5h2.969c-.164 1.88-.493 3.591-.969 5H2.031z"
}));

export default SvgComponent;