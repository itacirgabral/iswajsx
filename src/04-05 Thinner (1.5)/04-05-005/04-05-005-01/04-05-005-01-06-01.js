function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v4h1V0H3zm2 0v4h1V0H5zm4 0v4h1V0H9zm2 0v4h1V0h-1zm4 0v4h1V0h-1zm2 0v4h1V0h-1zM1.5 3l-.719.719L4.5 7.406l3-2.968 3 2.968 3-2.968 3 2.968 3.719-3.687L19.5 3l-3 3-3-3-3 3-3-3-3 3-3-3z"
}));

export default SvgComponent;