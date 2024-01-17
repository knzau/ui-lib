import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions"
	],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	},
	viteFinal: async (config) => {
		config.plugins?.push(
			/** @see https://github.com/aleclarson/vite-tsconfig-paths  */
			tsconfigPaths({ projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")] })
		);
		return config;
	}
};
export default config;
