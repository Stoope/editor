import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const TooltipComponent = ({ children, ...props }) => (
  <Tooltip
    PopperProps={{ keepMounted: true }}
    TransitionComponent={Zoom}
    {...props}
  >
    {children}
  </Tooltip>
);

export default TooltipComponent;
