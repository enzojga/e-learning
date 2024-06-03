export interface Props {
  text: string;
  darkMode?: boolean;
  width?: string,
  onClick?: () => void;
  isSubmit?: boolean,
}

export interface ButtonProps {
  darkMode?: boolean,
  width?: string,
}
