function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h6v6H7V1H2V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10a8.725 8.725 0 012.625-6.25l.719.719A7.707 7.707 0 004 10c0 2.172.904 4.124 2.344 5.531L8 17.156l-.719.719-1.656-1.625A8.725 8.725 0 013 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 10c0-2.985 1.223-5.677 3.188-7.625L5.625 3.75A8.725 8.725 0 003 10a8.725 8.725 0 002.625 6.25l1.656 1.625-1.406 1.406-1.688-1.656A10.704 10.704 0 011 10z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10a11.72 11.72 0 013.469-8.344l.719.719A10.704 10.704 0 001 10c0 2.985 1.223 5.677 3.188 7.625l1.687 1.656-.719.719-1.687-1.656A11.72 11.72 0 010 10z"
}));

export default SvgComponent;