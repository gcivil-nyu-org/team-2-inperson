import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import RecommendationStack from "../RecommendationStack.vue";
// import { recommendation } from "src/backend/server/api/models/recommendation.py"; 

describe("RecommendationStack.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(RecommendationStack, {
      props: {},
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

  // TODO()
  it("renders with well-formed props", () => {
    const componentWrapper = mount(RecommendationStack, {
      props: {
        /*
        TODO(Need to add recommendaton properties here to match API calls)
        */
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

  // Component Testing
  it("check if reco-stack-container exists", () => {
    const componentWrapper = mount(RecommendationStack, {
      props: {
        /*
        TODO(Need to add recommendaton properties here to match API calls)
        */
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    // exists
    const reco_stack_container = componentWrapper.find(".reco-stack-container")
    expect(reco_stack_container.exists()).toBe(true);
  });

  it("check if reco-stack-grid-position exists", () => {
    const componentWrapper = mount(RecommendationStack, {
      props: {
        /*
        TODO(Need to add recommendaton properties here to match API calls)
        */
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    // exists. This does not exist in the file. 
    const reco_stack_grid_positionr = componentWrapper.find(".reco-stack-grid-position")
    expect(reco_stack_grid_positionr.exists()).toBe(false);
  });
}); 

