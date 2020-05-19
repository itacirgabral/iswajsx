function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 14v15h8V14H9zM19.281 6.063l-3.656 6.343-.344.594-.594 1H17l.344-.594L21 7.062l-1.719-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h2v14h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 6.063L7 7.063l3.656 6.343L11 14h2.313l-.594-1-.344-.594-3.656-6.344zM1 14h8v2H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406 15.594L0 17l9 9v-2.813l-7.594-7.593z"
}));

export default SvgComponent;