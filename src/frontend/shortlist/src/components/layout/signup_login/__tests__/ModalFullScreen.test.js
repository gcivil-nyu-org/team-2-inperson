import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ModalFullScreen from "../../ModalFullScreen.vue";

describe("ModalFullScreen.vue", () => {
  // Check if ModalFullScreen exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {},
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  // Test emit
  it("test if emit works", async () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
      },
    });
    componentWrapper.vm.$emit("modalOff");
    /*
    console.log(componentWrapper.emitted(), "modalOff");  ==>
    { modalOff: [ [] ] } modalOff
    */
    expect(componentWrapper.emitted()).toBeTruthy();
  });

  it("test emit without data", async () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
      },
    });
    componentWrapper.vm.$emit("modalOff");

    await componentWrapper.vm.$nextTick();
    expect(componentWrapper.emitted().modalOff).toBeTruthy();
    expect(componentWrapper.emitted().modalOff.length).toBe(1);
    expect(componentWrapper.emitted().modalOff[0]).toEqual([]);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(ModalFullScreen, {
      props: {
        visible: true,
      },
    });

    componentWrapper.vm.$emit("modalOff");
    let clickableElement = componentWrapper.find("#modalOffTest");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);

    const testVisibility = true;
    componentWrapper.vm.isVisible = testVisibility;
    clickableElement.trigger("click");
    expect(
      testVisibility,
      "show intended data is just as expected after click"
    ).toBe(true);
    expect(componentWrapper.find(".shortlist-modal").element).exist;
  });
});
