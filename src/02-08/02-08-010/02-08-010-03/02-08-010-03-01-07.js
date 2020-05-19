function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M35.9 12H26v9.9l9.9-9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.958.686l6.806 6.806a3.5 3.5 0 114.066 4.066l2.298 2.298a3.5 3.5 0 114.066 4.066l6.099 6.099a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L.544 2.101 1.958.686zm8.84 6.01a2 2 0 102.828 2.83 2 2 0 00-2.829-2.83zm6.363 6.365a2 2 0 102.829 2.828 2 2 0 00-2.829-2.828z"
}));

export default SvgComponent;