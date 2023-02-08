import { Plugin } from "../../../plugin/plugin";

export default class TestPlugin extends Plugin {
    constructor() {
        super();
        console.log("hello world");
    }

    async onload() {
        console.log("test plugin onload");
    }

    async onunload() {
        console.log("test plugin unload");
    }
}