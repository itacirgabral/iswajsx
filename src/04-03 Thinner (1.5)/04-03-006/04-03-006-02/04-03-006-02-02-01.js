function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v10H7zM13.455.359l1.932.517-2.589 9.66-1.932-.518zM.614.876L2.545.358l2.589 9.66-1.932.517z"
}));

export default SvgComponent;