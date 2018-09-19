import React from "react";
import TextFieldMUI from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

class TextField extends React.Component {
  handleChange = event => {
    const { onChange, type, select } = this.props;
    if (type === "number") {
      onChange(parseInt(event.target.value, 10) || 0);
    } else if (!select) {
      onChange(event.target.value || "");
    } else {
      onChange(event.target.value);
    }
  };

  render() {
    const {
      onChange,
      value,
      fullWidth = true,
      type,
      children,
      inputAdornmentContent,
      inputAdornmentPosition = "end",
      ...props
    } = this.props;
    let inputValue = null;
    if (type === "number") {
      inputValue = value || 0;
    } else {
      inputValue = value || "";
    }
    return (
      <TextFieldMUI
        InputProps={
          inputAdornmentContent
            ? inputAdornmentPosition === "end"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      {inputAdornmentContent}
                    </InputAdornment>
                  )
                }
              : {
                  startAdornment: (
                    <InputAdornment position="start">
                      {inputAdornmentContent}
                    </InputAdornment>
                  )
                }
            : undefined
        }
        fullWidth={fullWidth}
        value={inputValue}
        onChange={this.handleChange}
        {...props}
      >
        {children}
      </TextFieldMUI>
    );
  }
}

export default TextField;
