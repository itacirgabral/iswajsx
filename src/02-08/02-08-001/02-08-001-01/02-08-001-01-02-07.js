function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 7.1V17h-9.9L20 7.1zm-1.016 2.431l-6.453 6.453 6.475.022-.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.908 2.15a4 4 0 015.657 0l4.243 4.243c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-1.034-5.276-2.829-7.071L5.151 3.565a2 2 0 00-2.829 0 1 1 0 000 1.414l4.243 4.243-1.414 1.414L.908 6.393a3 3 0 010-4.242z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.984 9.531l.022 6.475-6.475-.022 6.453-6.453z",
  fill: "#fff"
}));

export default SvgComponent;