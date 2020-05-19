function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 48,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0H.686L12 11.314V0zm-.994.994l-.022 7.889-7.867-7.867 7.889-.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M45.941 1.414L35.688 11.667a1.5 1.5 0 01-2.121 0 1.498 1.498 0 01-.442-1.06l.022-7.712-10.894 10.894a1.5 1.5 0 01-2.121 0 1.498 1.498 0 01-.442-1.061l.022-7.712-9.833 9.833a2 2 0 01-2.829 0c-1.171-1.171-.222-4.02 2.122-6.364L3.515 2.828a8 8 0 000 11.314l2.121 2.121a4 4 0 005.657 0L17.7 9.855v2.873a3.48 3.48 0 001.017 2.475 3.5 3.5 0 004.95 0l7.468-7.469v2.873a3.48 3.48 0 001.017 2.474 3.5 3.5 0 004.95 0L47.354 2.828l-1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.006.994l-7.889.022 7.867 7.867.022-7.889z",
  fill: "#fff"
}));

export default SvgComponent;