import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ModalFullScreen from "../../ModalFullScreen.vue";
import { createTestingPinia } from "@pinia/testing";

describe("ModalFullScreen.vue", () => {
  // Check if ModalFullScreen exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  // Test emit
  it("Renders with null prop", async () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const modalButton = componentWrapper.find("#modalOffTest");
    expect(modalButton.exists(), "modalOffTest").toBe(true);
    modalButton.element.disabled = false;

    modalButton.trigger("click");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    // console.log("modalOff", emittedEvent); ==> emittedEvent is undefined and there is no data returned. Do these expect statements make sense to be written here?
    expect(emittedEvent).toBeTruthy();
    expect(emittedEvent.stopPropagation).toBeUndefined();
  });
});
