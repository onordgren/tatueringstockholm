import Label from './Label';

interface TextareaProps {
  name: string;
  label: string;
}

const Textarea = ({ name, label }: TextareaProps) => {
  return (
    <label className="block">
      <Label label={label} />
      <textarea
        name={name}
        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default Textarea;
