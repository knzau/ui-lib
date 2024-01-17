import type { Meta, Story } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"]
};

export default meta;

type Story = Story<typeof meta>;

export const Default: Story = (Story = { args: { children: "Click me" } });
