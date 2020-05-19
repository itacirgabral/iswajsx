function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.11 0l-.72.719L11.173 2.5 9.39 4.281l.718.719 2.5-2.5-2.5-2.5zM9 2.125c-.69.054-1.363.093-2 .188v.937a35.35 35.35 0 012-.188v-.937zm5 0v.938c.704.04 1.372.115 2 .187v-.938c-.637-.094-1.31-.133-2-.187zM6 2.5a19.93 19.93 0 00-2 .469v.812a17.501 17.501 0 012-.406V2.5zm11 0v.875c.765.115 1.427.25 2 .406V2.97a19.93 19.93 0 00-2-.469zM3 3.313C1.144 4.022 0 4.963 0 6c0 1.036 1.144 1.977 3 2.688V5.874C2.382 5.61 2 5.315 2 5c0-.315.382-.61 1-.875v-.813zm1 2.906V9.03c1.155.349 2.51.583 4 .75V6.844C6.404 6.71 5.033 6.5 4 6.219z"
}));

export default SvgComponent;