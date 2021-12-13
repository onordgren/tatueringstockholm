interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => (
  <span className="text-neutral-400">{label}</span>
);

export default Label;
