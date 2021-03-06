function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.56 3.146L3.146 4.56l2.122 2.122 1.414-1.414L4.56 3.146zm3.536 3.536L6.682 8.096l2.121 2.121 1.414-1.414-2.121-2.121zm3.536 3.535l-1.415 1.415 2.122 2.12 1.414-1.413-2.121-2.122zM6.975 0l-1 1.732 2.598 1.5 1-1.732L6.975 0zm4.33 2.5l-1 1.732 2.598 1.5 1-1.732-2.598-1.5zm4.33 2.5l-1 1.732 2.598 1.5 1-1.732L15.635 5zM1.732 5.975L0 6.975l1.5 2.598 1.732-1-1.5-2.598zm2.5 4.33l-1.732 1L4 13.903l1.732-1-1.5-2.598zm2.5 4.33l-1.732 1 1.5 2.598 1.732-1-1.5-2.598z"
}));

export default SvgComponent;