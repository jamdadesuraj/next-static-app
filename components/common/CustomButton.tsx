import { Button } from "@nextui-org/button";

interface customBtnProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}
const CustomButton = ({ children, className, type }: customBtnProps) => {
  return (
    <Button
      className={className}
      color="success"
      type={type}
      variant="bordered"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
