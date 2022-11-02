import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SchoolCard from "../SchoolCard.vue";
import { schoolDataTest } from "../../../api/examples/school.js";

describe("SchoolCard.vue", () => {
  it("renders with null props", () => {
    /*
      TODO(Set the component to properly render "placeholder" 
      shapes so that it maintains its overall shape)
     */
    const componentWrapper = mount(SchoolCard, {
      props: {},
    });

    // exists
    expect(componentWrapper.exists());
  });

  it("renders with well-formed props", () => {
    const componentWrapper = mount(SchoolCard, {
      props: { schoolData: schoolDataTest },
    });

    // exists
    expect(componentWrapper.exists());
    expect(componentWrapper.vm.isDetail, "starts in simple mode").toBe(false);
  });

  it("shows detail when clicked", () => {
    const componentWrapper = mount(SchoolCard, {
      props: { schoolData: schoolDataTest },
    });

    let clickableElement = componentWrapper.find(".school-simple-container");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);

    clickableElement.trigger("click");
    expect(
      componentWrapper.vm.isDetail,
      "show detail data is true after click"
    ).toBe(true);
    expect(componentWrapper.find(".school-simple-container").element).exist;

    clickableElement.trigger("click");
    expect(
      componentWrapper.vm.isDetail,
      "show detail data is false after second click"
    ).toBe(false);
  });
});
