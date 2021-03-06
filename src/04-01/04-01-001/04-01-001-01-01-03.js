function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0C11.835 0 4 7.835 4 17.5S11.835 35 21.5 35 39 27.165 39 17.5 31.165 0 21.5 0zm0 2C30.06 2 37 8.94 37 17.5 37 26.06 30.06 33 21.5 33 12.94 33 6 26.06 6 17.5 6 8.94 12.94 2 21.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5a21.41 21.41 0 00-4 12.5c0 4.66 1.48 8.978 4 12.5l1.656-1.188C3.374 25.62 2 21.724 2 17.5c0-4.224 1.374-8.12 3.656-11.313L4 5zM39 5l-1.656 1.188C39.626 9.38 41 13.276 41 17.5c0 4.224-1.374 8.12-3.656 11.313L39 30c2.52-3.522 4-7.84 4-12.5S41.52 8.522 39 5z"
}));

export default SvgComponent;