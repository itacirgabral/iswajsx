function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.75 2v4.188L5.125 4.094l-.75 1.312L8 7.5 4.375 9.594l.75 1.312L8.75 8.812V13h1.5V8.812l3.625 2.094.75-1.312L11 7.5l3.625-2.094-.75-1.312-3.625 2.093V2h-1.5zM.25 0v15h1.5V0H.25zM17.25 0v15h1.5V0h-1.5z"
}));

export default SvgComponent;