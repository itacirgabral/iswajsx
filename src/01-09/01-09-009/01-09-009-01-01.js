function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 21a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 21a6 6 0 11-12 0 6 6 0 1112 0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0c-3 0-3 3-3 3v3h2V3c0-1 1-1 1-1 1 0 1 1 1 1v10.063a8.016 8.016 0 012 0V3c0-3-3-3-3-3zM7.375 3.813a3.497 3.497 0 00-1.469.437c-2.598 1.5-1.093 4.094-1.093 4.094l1.5 2.594 1.718-1-1.5-2.594c-.5-.866.375-1.375.375-1.375.866-.5 1.375.375 1.375.375l4.531 7.843a7.943 7.943 0 011.813-.812L10 5.344c-.75-1.3-1.788-1.582-2.625-1.532zM3.656 11c-1.14.104-1.969.938-1.969.938-2.12 2.12 0 4.218 0 4.218l2.125 2.125 1.407-1.406-2.125-2.125c-.707-.707 0-1.406 0-1.406.707-.707 1.406 0 1.406 0l5.031 4.844c.235-.625.53-1.211.906-1.75l-4.5-4.5c-.795-.796-1.597-1-2.28-.938z"
}));

export default SvgComponent;