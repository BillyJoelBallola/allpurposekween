function InputField({
  text,
  handleTextChange,
}: {
  text: string;
  handleTextChange: (text: string) => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => handleTextChange(e.target.value.toUpperCase() as string)}
      className="bg-white p-2 rounded-lg w-full shadow-md text-sm border border-neutral-200"
      id="kween-text"
      type="text"
      placeholder="Type here..."
    />
  );
}

export default InputField;
