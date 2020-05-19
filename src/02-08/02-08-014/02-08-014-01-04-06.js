function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 18l-4.5-4.5L3 18h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4H5a5 5 0 01-5-5V0h1zM17 5L12.5.5 8 5h9zM12 5v13a4 4 0 004 4 5 5 0 005-5h-5c0 1.657-.672 3-1.5 3S13 18.657 13 17V5h-1z"
}));

export default SvgComponent;