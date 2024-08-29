import { useUpdateSetting } from "./useUpdateSetting";
import { useSettings } from "./useSettings";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  //at first settingsData is undefined that's why we make it {}
  const { isLoading: loading, settingsData = {} } = useSettings();
  const { maxGuestsPerBooking, breakfastPrice, minDays, maxDays } =
    settingsData;

  const { isLoading: updating, editSetting } = useUpdateSetting();

  const isLoading = loading || updating;
  if (isLoading) return <Spinner />;

  function handleOnBlue(e, field) {
    const { value } = e.target;
    if (!value) return;
    editSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minDays}
          onBlur={(e) => handleOnBlue(e, "minDays")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxDays}
          onBlur={(e) => handleOnBlue(e, "maxDays")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleOnBlue(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleOnBlue(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
