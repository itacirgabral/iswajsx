function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 9h15v15H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 11h11v11H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v7h2V2h3v7h2V0H9zM0 9h14v2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.688 3.594l-1.876.687L14 24v-5.844L8.687 3.594z"
}));

export default SvgComponent;