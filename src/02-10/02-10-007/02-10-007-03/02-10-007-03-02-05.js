function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.11 2l-.72.719L11.173 4.5 9.39 6.281l.718.719 2.5-2.5-2.5-2.5zM.656 0C.236.466 0 .977 0 1.5c0 1.165 1.144 2.232 3 3.031V1.594c-.618-.332-1-.7-1-1.094 0-.166.066-.342.188-.5H.655zm20.157 0A.835.835 0 0121 .5c0 .394-.382.762-1 1.094V4.53c1.856-.799 3-1.866 3-3.031 0-.523-.236-1.034-.656-1.5h-1.532zM4 2.031v2.875c1.409.476 3.12.805 5 .969V2.906c-2.016-.146-3.758-.45-5-.875zm15 0c-1.242.424-2.984.73-5 .875v2.969c1.88-.164 3.591-.493 5-.969V2.031z"
}));

export default SvgComponent;