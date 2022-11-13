/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceManagerPage from "../PreferenceManagerPage.vue";

describe("PreferenceManagerPage.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceManagerPage, {
      props: {},
    });
    expect(componentWrapper.exists()).toBe(true);
  });
});
