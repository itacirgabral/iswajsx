function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27.82.322L19.114 9.03a2 2 0 01-2.829 0 1.982 1.982 0 01-.574-1.415l.088-1.149a4.01 4.01 0 00-1.193-2.828 4 4 0 00-5.657 0l-8 7.999 1.415 1.414 8-7.999a2 2 0 012.828 0c.39.39.574.902.574 1.414l-.088 1.15a4.01 4.01 0 001.193 2.828 4 4 0 005.657 0l8.706-8.706L27.82.322z"
}));

export default SvgComponent;