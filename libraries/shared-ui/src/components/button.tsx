
export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY
}

export interface ButtonProps {
  onClick?: () => void;
  variant?: Variant;
  children?: React.ReactNode;
}

const BUTTON_CLASSES = 'text-white font-bold py-2 px-4 border-b-1 rounded';
const BUTTON_VARIANT_CLASSES = {
  [Variant.PRIMARY]: 'bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500',
  [Variant.SECONDARY]: 'bg-teal-500 hover:bg-teal-400 border-teal-700 hover:border-teal-500',
  [Variant.TERTIARY]: 'bg-slate-500 hover:bg-slate-400 border-slate-700 hover:border-slate-500'
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = Variant.PRIMARY,
  children
}) => {
  return (
    <button
      className={`${BUTTON_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]}`}
      onClick={onClick}
    >{children}</button>
  );
}

export default Button;