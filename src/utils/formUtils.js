export const handleFormSubmission = async (dispatch, submitFormAction, formData, onSuccess, onError) => {
  try {
    await dispatch(submitFormAction(formData)).unwrap();
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error("Form submission failed:", err);
    if (onError) onError(err);
  }
};
