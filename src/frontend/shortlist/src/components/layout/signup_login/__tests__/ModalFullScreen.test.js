import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ModalFullScreen from "../../ModalFullScreen.vue";

describe("ModalFullScreen.vue", () => {
  // Check if ModalFullScreen exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
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
    });

    const modalButton = componentWrapper.find("#modalOffTest");
    expect(modalButton.exists()).toBe(true);
    modalButton.element.disabled = false;

    modalButton.trigger("click");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent).toBeTruthy();
    expect(emittedEvent.stopPropagation).toBeUndefined();
  });
});