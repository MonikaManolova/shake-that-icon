import { MinusIcon, PlusIcon } from "../Icons";
import * as UI from "./InputFieldUI";
import Label from "../Label";

const InputField = ({
  decreaseTimes,
  increaseTimes,
  value,
  disabled,
  label,
  onChange,
  editable,
  ...props
}) => {
  return (
    <UI.Wrapper {...props}>
      <Label>{label}</Label>
      <UI.InputWrapper>
        <UI.Indicator onClick={decreaseTimes} disabled={disabled}>
          <MinusIcon />
        </UI.Indicator>

        <div className="d-flex align-items-center">
          <UI.Input
            type="text"
            value={value}
            aria-label="Username"
            onChange={onChange}
            style={{ pointerEvents: editable ? "all" : "none" }}
            readOnly={!editable}
          />
          {/* <UI.Label>{label}</UI.Label> */}
        </div>

        <UI.Indicator onClick={increaseTimes} id="basic-addon1">
          <PlusIcon />
        </UI.Indicator>
      </UI.InputWrapper>
    </UI.Wrapper>
  );
};

export default InputField;
