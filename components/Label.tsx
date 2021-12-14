interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => (
  <span className="text-neutral-200">{label}</span>
);

export default Label;
