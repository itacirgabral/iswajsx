function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.719 0L0 .719l3 2.969C7.953 8.64 8.868 16.127 5.719 22h1.093C9.877 15.831 8.829 8.14 3.688 3L.72 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 16a3 3 0 100 6 3 3 0 000-6zM6 4a3 3 0 100 6 3 3 0 000-6z"
}));

export default SvgComponent;