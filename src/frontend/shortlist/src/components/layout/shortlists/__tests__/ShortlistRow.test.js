import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ShortlistRow from "../ShortlistManager.vue";
import { listDataTest } from "../../../../api/examples/shortlistsTest.js";
import { dragStateStore } from "../../../../states/categorizeDragAndDrop";
import { config } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

describe("ShortlistRow.vue", () => {
  it("renders with null props", () => {
    /*
        TODO(Set the component to properly render "placeholder" 
        shapes so that it maintains its overall shape)
        */
    const componentWrapper = mount(ShortlistRow, {
      props: {},
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

  it("renders with well-formed props", () => {
    const componentWrapper = mount(ShortlistRow, {
      props: {
        listId: 0,
        listSettings: listDataTest.settings,
        listSchools: listDataTest.schools,
      },
    });

    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

  it("enter edit mode with button clicked", async () => {
    const componentWrapper = mount(ShortlistRow, {
      props: {
        listId: 0,
        listSettings: listDataTest.settings,
        listSchools: listDataTest.schools,
      },
    });

    const editButton = componentWrapper.find("#editButton");

    expect(editButton.exists()).toBe(true);

    await editButton.trigger("click");
    expect(componentWrapper.vm.inEditMode, "show edit mode").toBe(true);
    expect(componentWrapper.find(".layout-list-row-action-button").element)
      .exist;
  });

  it("cancel changes with cancel button clicked", () => {
    const componentWrapper = mount(ShortlistRow, {
      props: {
        listId: 0,
        listSettings: listDataTest.settings,
        listSchools: listDataTest.schools,
      },
    });

    //directly change setting without button click
    componentWrapper.vm.localSettings.color = "#000000";
    componentWrapper.vm.localSettings.icon = "science";

    const cancelButton = componentWrapper.find("#cancelButton");
    cancelButton.trigger("click");
    expect(componentWrapper.vm.inEditMode, "exit edit mode").toBe(false);
    expect(
      componentWrapper.vm.localSettings.color,
      "revert color back to original"
    ).toBe("#ffa7a1");
    expect(
      componentWrapper.vm.localSettings.icon,
      "revert icon back to original"
    ).toBe("token");
  });

  it("commit changes with change button clicked", () => {
    const componentWrapper = mount(ShortlistRow, {
      props: {
        listId: 0,
        listSettings: listDataTest.settings,
        listSchools: listDataTest.schools,
      },
    });

    //directly change setting without button click
    componentWrapper.vm.localSettings.color = "#000000";
    componentWrapper.vm.localSettings.icon = "science";
    const changeButton = componentWrapper.find("#changeButton");
    changeButton.trigger("click");
    expect(componentWrapper.vm.inEditMode, "exit edit mode").toBe(false);
    expect(componentWrapper.vm.localSettings.color, "change to new color").toBe(
      "#000000"
    );
    expect(
      componentWrapper.vm.localSettings.icon,
      "revert icon back to original"
    ).toBe("science");
  });
});
