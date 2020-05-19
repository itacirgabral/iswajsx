function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.45 5.865L5.866 4.45l7.07 7.07-1.413 1.415zM9.268 1.554l1.732-1 5 8.66-1.732 1zM.554 11l1-1.732 8.66 5-1 1.732z"
}));

export default SvgComponent;