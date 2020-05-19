function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 9H0v4h42V9zM12 6V0h6v1h-5v5h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.281 1l.719.719-1.344 1.312C26.824 4.864 24.228 7 21.5 7c-2.728 0-5.324-2.136-7.156-3.969L14 2.687 14.75 2l.313.313C16.712 3.962 18.98 4 21.5 4c2.52 0 4.786-.036 6.438-1.688L29.28 1z"
}));

export default SvgComponent;