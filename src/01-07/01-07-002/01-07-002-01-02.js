function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 14a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16a6 6 0 000 12V16z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v16.719A7.952 7.952 0 0120 22V0h-2zM8.688 4.688L7.28 6.093l9.5 9.5c.442.33.848.716 1.219 1.125V14L8.687 4.687zM1.406 10.594L0 12l5.438 5.438a8.07 8.07 0 011.343-1.5l-5.375-5.344z"
}));

export default SvgComponent;