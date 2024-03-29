import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = () => {
	return <button className="text-blue-500">Button</button>;
};

export default Button;
