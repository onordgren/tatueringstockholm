import Label from './Label';

interface InputProps {
  type: string;
  name: string;
  label: string;
}

const Input = ({ type, name, label }: InputProps) => {
  return (
    <label className="block">
      <Label label={label} />
      <input
        type={type}
        name={name}
        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default Input;
