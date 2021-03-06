function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 14a8 8 0 110 16 8 8 0 010-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v16.719A7.952 7.952 0 000 22V0h2zM11.313 4.688l1.406 1.406-9.5 9.5c-.442.33-.848.716-1.219 1.125V14l9.313-9.313zM18.594 10.594L20 12l-5.438 5.438a8.07 8.07 0 00-1.343-1.5l5.375-5.344z"
}));

export default SvgComponent;