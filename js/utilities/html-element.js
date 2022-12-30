import { TAG_NAME } from "../const/tag-name.js";

export class HTMLElementUtilities {
    static isIMG(element) {
        return element.tagName === TAG_NAME.IMG;
    }
}