import {fetchPost} from "../util/fetch";

export const flashcard = {
    element: undefined as Element,
    genHTML: () => {
        let responsiveHTML = `<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardMark}
        <div class="b3-label__text">${window.siyuan.languages.flashcardMarkTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="mark" type="checkbox"${window.siyuan.config.flashcard.mark ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardList}
        <div class="b3-label__text">${window.siyuan.languages.flashcardListTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="list" type="checkbox"${window.siyuan.config.flashcard.list ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardHeading}
        <div class="b3-label__text">${window.siyuan.languages.flashcardHeadingTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="heading" type="checkbox"${window.siyuan.config.flashcard.heading ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardSuperBlock}
        <div class="b3-label__text">${window.siyuan.languages.flashcardSuperBlockTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="superBlock" type="checkbox"${window.siyuan.config.flashcard.superBlock ? " checked" : ""}/>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardDeck}
        <div class="b3-label__text">${window.siyuan.languages.flashcardDeckTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="deck" type="checkbox"${window.siyuan.config.flashcard.deck ? " checked" : ""}/>
</label>
<div class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
        ${window.siyuan.languages.reviewMode}
        <div class="b3-label__text">${window.siyuan.languages.reviewModeTip}</div>
    </div>
    <span class="fn__space"></span>
    <select class="b3-select fn__flex-center fn__size200" id="reviewMode">
      <option value="0" ${window.siyuan.config.flashcard.reviewMode === 0 ? "selected" : ""}>${window.siyuan.languages.reviewMode0}</option>
      <option value="1" ${window.siyuan.config.flashcard.reviewMode === 1 ? "selected" : ""}>${window.siyuan.languages.reviewMode1}</option>
      <option value="2" ${window.siyuan.config.flashcard.reviewMode === 2 ? "selected" : ""}>${window.siyuan.languages.reviewMode2}</option>
    </select>    
</div>`;
        /// #if MOBILE
        responsiveHTML = `${responsiveHTML}<div class="b3-label">
    ${window.siyuan.languages.flashcardNewCardLimit}
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__block" id="newCardLimit" step="1" min="0" type="number"${window.siyuan.config.flashcard.newCardLimit ? " checked" : ""} value="${window.siyuan.config.flashcard.newCardLimit}"/>
    <div class="b3-label__text">${window.siyuan.languages.flashcardNewCardLimitTip}</div>
</div>
<div class="b3-label">
    ${window.siyuan.languages.flashcardReviewCardLimit}
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__block" id="reviewCardLimit" step="1" min="0" type="number"${window.siyuan.config.flashcard.reviewCardLimit ? " checked" : ""} value="${window.siyuan.config.flashcard.reviewCardLimit}"/>
    <div class="b3-label__text">${window.siyuan.languages.flashcardReviewCardLimitTip}</div>
</div>
<div class="b3-label">
    ${window.siyuan.languages.flashcardFSRSParamRequestRetention}
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__block" id="requestRetention" step="0.01" min="0" max="1" type="number" value="${window.siyuan.config.flashcard.requestRetention}"/>
    <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamRequestRetentionTip}</div>
</div>
<div class="b3-label">
    ${window.siyuan.languages.flashcardFSRSParamMaximumInterval}
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__block" id="maximumInterval" step="1" min="365" max="36500" type="number" value="${window.siyuan.config.flashcard.maximumInterval}"/>
    <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamMaximumIntervalTip}</div>
</div>
<div class="b3-label">
    ${window.siyuan.languages.flashcardFSRSParamWeights}
    <div class="fn__hr"></div>
    <input class="b3-text-field fn__block" id="weights" value="${window.siyuan.config.flashcard.weights}"/>
    <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamWeightsTip}</div>
</div>`;
        /// #else
        responsiveHTML = `${responsiveHTML}<div class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardNewCardLimit}
        <div class="b3-label__text">${window.siyuan.languages.flashcardNewCardLimitTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="newCardLimit" step="1" min="0" type="number"${window.siyuan.config.flashcard.newCardLimit ? " checked" : ""} value="${window.siyuan.config.flashcard.newCardLimit}"/>
</div>
<div class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardReviewCardLimit}
        <div class="b3-label__text">${window.siyuan.languages.flashcardReviewCardLimitTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="reviewCardLimit" step="1" min="0" type="number"${window.siyuan.config.flashcard.reviewCardLimit ? " checked" : ""} value="${window.siyuan.config.flashcard.reviewCardLimit}"/>
</div>
<div class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardFSRSParamRequestRetention}
        <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamRequestRetentionTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="requestRetention" step="0.01" min="0" max="1" type="number" value="${window.siyuan.config.flashcard.requestRetention}"/>
</div>
<div class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${window.siyuan.languages.flashcardFSRSParamMaximumInterval}
        <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamMaximumIntervalTip}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-text-field fn__flex-center fn__size200" id="maximumInterval" step="1" min="365" max="36500" type="number" value="${window.siyuan.config.flashcard.maximumInterval}"/>
</div>
<div class="fn__flex b3-label">
    <div class="fn__block">
        ${window.siyuan.languages.flashcardFSRSParamWeights}
        <div class="b3-label__text">${window.siyuan.languages.flashcardFSRSParamWeightsTip}</div>
        <span class="fn__hr"></span>
        <input class="b3-text-field fn__block" id="weights" value="${window.siyuan.config.flashcard.weights}"/>
    </div>
</div>`;
        /// #endif
        return responsiveHTML;
    },
    bindEvent: () => {
        flashcard.element.querySelectorAll("input, select.b3-select").forEach((item) => {
            item.addEventListener("change", () => {
                fetchPost("/api/setting/setFlashcard", {
                    reviewMode: Number.parseInt((flashcard.element.querySelector("#reviewMode") as HTMLSelectElement).value),
                    newCardLimit: Number.parseInt((flashcard.element.querySelector("#newCardLimit") as HTMLInputElement).value),
                    reviewCardLimit: Number.parseInt((flashcard.element.querySelector("#reviewCardLimit") as HTMLInputElement).value),
                    mark: (flashcard.element.querySelector("#mark") as HTMLInputElement).checked,
                    list: (flashcard.element.querySelector("#list") as HTMLInputElement).checked,
                    superBlock: (flashcard.element.querySelector("#superBlock") as HTMLInputElement).checked,
                    heading: (flashcard.element.querySelector("#heading") as HTMLInputElement).checked,
                    deck: (flashcard.element.querySelector("#deck") as HTMLInputElement).checked,
                    requestRetention: Number.parseFloat((flashcard.element.querySelector("#requestRetention") as HTMLInputElement).value),
                    maximumInterval: Number.parseInt((flashcard.element.querySelector("#maximumInterval") as HTMLInputElement).value),
                    weights: (flashcard.element.querySelector("#weights") as HTMLInputElement).value,
                }, response => {
                    window.siyuan.config.flashcard = response.data;
                });
            });
        });
    },
};
