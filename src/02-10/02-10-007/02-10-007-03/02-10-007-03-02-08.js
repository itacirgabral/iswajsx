function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.89 0l.72.719L7.827 2.5 9.61 4.281 8.891 5l-2.5-2.5L8.89 0zM10 2.125c.69.054 1.363.093 2 .188v.937a35.35 35.35 0 00-2-.188v-.937zm-5 0v.938a35.35 35.35 0 00-2 .187v-.938c.637-.094 1.31-.133 2-.187zm8 .375a19.93 19.93 0 012 .469v.812a17.501 17.501 0 00-2-.406V2.5zm-11 0v.875c-.765.115-1.427.25-2 .406V2.97A19.93 19.93 0 012 2.5zm14 .813c1.856.71 3 1.651 3 2.687 0 1.036-1.144 1.977-3 2.688V5.874c.618-.265 1-.56 1-.875 0-.315-.382-.61-1-.875v-.813zm-1 2.906V9.03c-1.155.349-2.51.583-4 .75V6.844c1.596-.134 2.967-.343 4-.625z"
}));

export default SvgComponent;