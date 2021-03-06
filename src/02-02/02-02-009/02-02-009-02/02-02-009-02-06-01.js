function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.728 19.627l5.657 5.657 1.414-1.414-4.243-4.243 4.243-4.242-1.414-1.414-5.657 5.656zM5 8V0h2v6h6v2H5zM1.062 0l-.75.75C1.574 1.435 2.796 2.239 4 3.125v-1.25C3.041 1.198 2.058.552 1.062 0zm8.875 9c1.317 1.943 2.203 4.077 2.72 6.281l.843-.812c-.51-1.9-1.36-3.755-2.438-5.469H9.937zm2.72 14.969a18.887 18.887 0 01-2.282 5.531l.875.5a20.219 20.219 0 002.219-5.219l-.813-.812z"
}));

export default SvgComponent;