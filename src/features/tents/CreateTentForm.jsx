import { useForm } from "react-hook-form";

import PropTypes from "prop-types";

import { useEditTent } from "./useEditTent";
import { useCreateTent } from "./useCreateTent";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import UploadFileInput from "../../ui/UploadFileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateTentForm({ tentToEdit = {}, onClickModal }) {
  const { id: editID, ...editValues } = tentToEdit;

  const isForEdit = Boolean(editID);
  const { register, handleSubmit, getValues, formState, reset } = useForm({
    defaultValues: isForEdit ? editValues : null,
  });

  const { creating, createTent } = useCreateTent();
  const { editing, editTent } = useEditTent();

  const isLoading = editing || creating;

  const { errors } = formState;

  function onSubmit(data) {
    const imagePath =
      typeof data.image === "string" ? data.image : data.image[0];

    if (isForEdit)
      editTent(
        { newTentData: { ...data, image: imagePath }, id: editID },
        {
          onSuccess: () => {
            reset();
            onClickModal?.();
          },
        }
      );
    else
      createTent(
        { ...data, image: imagePath },
        {
          onSuccess: () => {
            reset();
            onClickModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onClickModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.guestsNumber?.message}>
        <Input
          type="number"
          id="guestsNumber"
          disabled={isLoading}
          {...register("guestsNumber", {
            required: "This field is required",
            min: { value: 1, message: "Guests min number should be one" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          disabled={isLoading}
          {...register("price", {
            required: "This field is required",
            min: { value: 5, message: "Price starts at $5" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isLoading}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              Number(value) < Number(getValues().price) ||
              "Discount should be less than price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isLoading}
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Tent photo" error={errors?.image?.message}>
        <UploadFileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isForEdit ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          disabled={isLoading}
          type="reset"
          onClick={() => onClickModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isForEdit ? "Edit tent" : "Create new tent"}
        </Button>
      </FormRow>
    </Form>
  );
}
CreateTentForm.propTypes = {
  tentToEdit: PropTypes.object,
  onClickModal: PropTypes.func,
};
export default CreateTentForm;
