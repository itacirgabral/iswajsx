function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42.941.414L32.688 10.667a1.5 1.5 0 01-2.121 0 1.498 1.498 0 01-.442-1.06l.022-7.712-10.894 10.894a1.5 1.5 0 01-2.121 0 1.498 1.498 0 01-.442-1.061l.022-7.712-9.833 9.833a2 2 0 01-2.829 0 6 6 0 010-8.485L2.636 3.95a8 8 0 000 11.313 4 4 0 005.657 0L14.7 8.855v2.873a3.48 3.48 0 001.017 2.475 3.5 3.5 0 004.95 0l7.468-7.469v2.873a3.48 3.48 0 001.017 2.474 3.5 3.5 0 004.95 0L44.354 1.828 42.941.414z"
}));

export default SvgComponent;