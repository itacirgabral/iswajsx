function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 14v15h8V14H9zM19.281 6.063L15.844 12h2.312L21 7.062l-1.719-1zM13 0h2v12h-2zM8.719 6.063L7 7.063 9.844 12h2.312L8.72 6.062zM1 14h6v2H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 15.594L0 17l7 7v-2.813l-5.594-5.593z"
}));

export default SvgComponent;