import { describe, it, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import CategorizeView from "../CategorizeView.vue";
//import { shortLists } from "../../api/examples/shortlists.js";
//import { recommendations } from "../../api/examples/recommendations.js";
import { dragStateStore } from "../../states/categorizeDragAndDrop";
import { config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

describe("ShortlistRow.vue", () => {
  it("renders without failure", () => {
    const componentWrapper = mount(CategorizeView, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });
});
