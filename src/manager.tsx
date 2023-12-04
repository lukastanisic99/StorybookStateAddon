import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, PANEL_ID } from "./constants";
import { Panel } from "./Panel";
import React from "react";
/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */
// Register the addon
addons.register(ADDON_ID, (api) => {

  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "State Transition",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => {
      if (!active || !api.getCurrentStoryData()) {
        return null;
      } else return (<Panel active={active} />);
    },
  });
});
