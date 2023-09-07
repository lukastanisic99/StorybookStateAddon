import type { Meta, StoryObj } from "@storybook/react";

import { PanelContent } from "./PanelContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PanelContent> = {
  title: "Example/PanelContent",
  component: PanelContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PanelContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const BasePanel: Story = {};
