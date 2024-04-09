import {openModel} from "../menu/model";
import {flashcard} from "../../config/flashcard";

export const initRiffCard = () => {
    window.sout.tracker("invoked");
    openModel({
        title: window.siyuan.languages.riffCard,
        icon: "iconRiffCard",
        html: flashcard.genHTML(),
        bindEvent(modelMainElement: HTMLElement) {
            flashcard.element = modelMainElement;
            flashcard.bindEvent();
        }
    });
};
