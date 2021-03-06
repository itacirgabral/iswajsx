function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h2l5-5 5 5h2l-7-7zM14.5 14a5.467 5.467 0 01-3.875-1.625A5.467 5.467 0 019 8.5V7h1v1.5c0 1.151.434 2.309 1.313 3.188A4.493 4.493 0 0014.5 13H20v1h-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 17c-2.175 0-4.34-.84-6-2.5a8.462 8.462 0 01-2.5-6V7h3v1.5c0 1.407.551 2.801 1.625 3.875A5.467 5.467 0 0014.5 14H20v3h-5.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.719 23L0 22.281 19.281 3l.719.719L.719 23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 18a9.473 9.473 0 01-6.719-2.781A9.473 9.473 0 015 8.5V7h1v1.5c0 2.175.84 4.34 2.5 6a8.462 8.462 0 006 2.5H20v1h-5.5z"
}));

export default SvgComponent;