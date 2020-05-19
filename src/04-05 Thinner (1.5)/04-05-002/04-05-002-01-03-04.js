function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.19 14.625c.473-.092.944-.261 1.414-.442 1.225-.456 2.909-1.113 4.199-1.193.977-.06 2.894.464 2.894.464 1.04.34 2.223.12 3.05-.707.826-.827 1.046-2.01.707-3.05 0 0-.525-1.917-.464-2.894.08-1.284.717-3.001 1.17-4.22.173-.47.34-.939.465-1.393C10.896-.192 6.55.558 3.555 3.554.557 6.55-.193 10.896 1.19 14.625zm1.016-1.812c-.601-2.867.182-5.971 2.409-8.198 2.221-2.221 5.314-3.021 8.176-2.43-.463 1.443-1.086 3.378-1.06 4.286.033 1.211.795 3.536.795 3.536a1.993 1.993 0 01-.486 2.033 1.993 1.993 0 01-2.033.486s-2.325-.762-3.536-.796c-.905-.025-2.822.621-4.265 1.083z"
}));

export default SvgComponent;