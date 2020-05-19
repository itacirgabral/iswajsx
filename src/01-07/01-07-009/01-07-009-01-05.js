function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 11h15v13H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 13h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v7h2V2h3v7h2V0H9zM0 9h13v2H0zM31.938 4.063L27 9H29.813l3.562-3.531-1.438-1.407z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.688 3.594l-1.876.687L13 21.25v-5.844L8.687 3.594z"
}));

export default SvgComponent;