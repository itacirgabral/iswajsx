function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 7.1V17h-9.9L30 7.1zm-1.016 2.431l-6.453 6.453 6.475.022-.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.716 1.444a4 4 0 015.657 0l3.933 3.933c.176-.66.498-1.294 1.016-1.812a4 4 0 015.657 0l2.829 2.828c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-1.034-5.276-2.829-7.071l-2.828-2.829a2 2 0 00-2.828 2.829l2.12 2.12-1.413 1.415-8.486-8.485A2 2 0 003.13 5.686l3.535 3.536-1.414 1.414-3.535-3.535a4 4 0 010-5.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.984 9.531l.022 6.475-6.475-.022 6.453-6.453z",
  fill: "#fff"
}));

export default SvgComponent;