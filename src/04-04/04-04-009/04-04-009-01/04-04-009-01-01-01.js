function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 21.469L11 22.75c1.789 2.02 4.043 3.25 6.5 3.25s4.711-1.23 6.5-3.25l-1.5-1.281C21.093 23.046 19.378 24 17.5 24c-1.878 0-3.593-.954-5-2.531z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 28.571L11 27.29c1.789-2.02 4.043-3.25 6.5-3.25s4.711 1.23 6.5 3.25l-1.5 1.281c-1.407-1.578-3.122-2.531-5-2.531-1.878 0-3.593.953-5 2.531z"
}));

export default SvgComponent;