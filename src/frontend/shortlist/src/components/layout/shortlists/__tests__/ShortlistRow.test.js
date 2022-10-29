import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ShortlistRow from "../ShortlistManager.vue";
import { listDataTest } from "../../../../api/examples/shortlistsTest.js";
 
describe("ShortlistRow.vue", () => {
    it("renders with null props", () => {
        /*
        TODO(Set the component to properly render "placeholder" 
        shapes so that it maintains its overall shape)
        */
        const componentWrapper = mount(ShortlistRow, {
        props: {},
        });

        // exists
        expect(componentWrapper.exists()).toBe(true);
    });

    it("enter edit mode with button clicked", () => {
        const componentWrapper = mount(ShortlistRow, {
            props: { listId:0, listSettings:listDataTest.settings, listSchools:listDataTest.schools },
        });

        let clickableElement = componentWrapper.find(".layout-list-row-action-button");
        const changeButton = componentWrapper.find('changeButton');
        const cancelButton = componentWrapper.find('cancelButton');
        expect(clickableElement.exists()).toBe(true);

        clickableElement.trigger("click");
        expect(componentWrapper.vm.inEditMode, "show edit mode").toBe(true);
        expect(componentWrapper.find(".layout-list-row-action-button").element).exist;

    });

    it("cancel changes with cancel button clicked", () => {
        const componentWrapper = mount(ShortlistRow, {
            props: { listId:0, listSettings:listDataTest.settings, listSchools:listDataTest.schools },
        });

        //directly change setting without button click
        componentWrapper.vm.localSettings.color = "#000000";
        componentWrapper.vm.localSettings.icon = "science";

        cancelButton.trigger("click");
        expect(componentWrapper.vm.inEditMode, "exit edit mode").toBe(false);
        expect(componentWrapper.vm.localSettings.color, "revert color back to original").toBe("#ffa7a1")
        expect(componentWrapper.vm.localSettings.icon, "revert icon back to original").toBe("token")

    });

    it("commit changes with change button clicked", () => {
        const componentWrapper = mount(ShortlistRow, {
            props: { listId:0, listSettings:listDataTest.settings, listSchools:listDataTest.schools },
        });

        //directly change setting without button click
        componentWrapper.vm.localSettings.color = "#000000";
        componentWrapper.vm.localSettings.icon = "science";

        changeButton.trigger("click");
        expect(componentWrapper.vm.inEditMode, "exit edit mode").toBe(false);
        expect(componentWrapper.vm.localSettings.color, "change to new color").toBe("#000000")
        expect(componentWrapper.vm.localSettings.icon, "revert icon back to original").toBe("science")
        
    });

});