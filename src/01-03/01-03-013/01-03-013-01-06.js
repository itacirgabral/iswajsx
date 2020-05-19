function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 9h15v13H10zM13 7h2V4c0-3.99-4-4-4-4H9s4 0 0 0-4 4-4 4h2s0 2 0 0 2-2 2-2h2s-2 0 0 0 2 2 2 2v3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7s0 4 0 0-4-4-4-4H6s4 0 0 0-4 4-4 4v3h2V7s0 2 0 0 2-2 2-2h2S6 5 8 5s2 2 2 2h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.5 6.688L.094 8.094 9 17v-2.813l-7.5-7.5z"
}));

export default SvgComponent;