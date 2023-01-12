import BaseCheckbox from "~/components/generic/form/BaseCheckbox";
import BaseTextArea from "~/components/generic/form/BaseTextArea";
import FormModal from "~/components/FormModal";

import { approve, review } from "~/utils/validation";

const initialValues = {
  review: "",
  approve: false,
};

export default function ResearchRespondModal({ open, setOpen }) {
  const handleSubmit = async (values) => {
    console.log(values);
    setOpen(false);
  };

  return (
    <FormModal
      validation={{ approve, review }}
      initialValues={initialValues}
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
    >
      <BaseTextArea label="Review" name="review" />
      <BaseCheckbox label="Terima Permohonan" name="approve" />
    </FormModal>
  );
}
