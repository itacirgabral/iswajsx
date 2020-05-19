function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 1.75C1.789 3.77 4.043 5 6.5 5s4.711-1.23 6.5-3.25L11.5.469C10.093 2.046 8.378 3 6.5 3c-1.878 0-3.593-.954-5-2.531L0 1.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6.25C1.789 4.23 4.043 3 6.5 3s4.711 1.23 6.5 3.25L11.5 7.53C10.093 5.953 8.378 5 6.5 5c-1.878 0-3.593.953-5 2.531L0 6.25z"
}));

export default SvgComponent;