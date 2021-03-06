function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 0l-7 7h2l5-5 5 5h2l-7-7zM5.5 14a5.467 5.467 0 003.875-1.625A5.467 5.467 0 0011 8.5V7h-1v1.5a4.493 4.493 0 01-1.313 3.188A4.493 4.493 0 015.5 13H0v1h5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 17c2.175 0 4.34-.84 6-2.5a8.462 8.462 0 002.5-6V7h-3v1.5a5.467 5.467 0 01-1.625 3.875A5.467 5.467 0 015.5 14H0v3h5.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.281 23l.719-.719L.719 3 0 3.719 19.281 23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 18c2.43 0 4.864-.927 6.719-2.781A9.473 9.473 0 0015 8.5V7h-1v1.5c0 2.175-.84 4.34-2.5 6a8.462 8.462 0 01-6 2.5H0v1h5.5z"
}));

export default SvgComponent;