// This is CTA component for Modal to make it reusable
const ModalCtas = ({
  handleClose,
  isTimeValid,
  isTitleValid,
  cancelCta,
  confirmCta,
}: {
  handleClose: () => void;
  isTimeValid: boolean;
  isTitleValid: boolean;
  cancelCta: string;
  confirmCta: string;
}) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t">
      <button
        type="button"
        onClick={handleClose}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      >
        {cancelCta}
      </button>
      <button
        type="submit"
        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
          isTitleValid && isTimeValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-400 cursor-not-allowed"
        }`}
        disabled={!isTitleValid || !isTimeValid}
      >
        {confirmCta}
      </button>
    </div>
  );
};

export default ModalCtas;
