console.log('helloworld from content script');

/**
 * @name observe
 * @param {string} selector - CSS selector, which represents the path to the element to observe
 * @param {MutationCallback} callback - Callback function to execute when mutations are observed
 * @returns {MutationObserver|null}
 */
function observe(selector: string, callback: MutationCallback): MutationObserver | null {
    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector(selector);

    if (targetNode) {
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);

        callback([], observer);
        
        return observer;
    } 

    return null;
}

function start({}, observer: MutationObserver) {
    const selector = '.community-points-summary > .tw-full-height.tw-relative.tw-z-above > .tw-transition:first-child';

    const callback = () => {
        const identifiableTarget = document.querySelector('.claimable-bonus__icon')
        if (identifiableTarget) {
            const bonusButton = identifiableTarget.closest('button')
            if (bonusButton) bonusButton.click();
        }
    };

    const bonusObserver = observe(selector, callback);

    if (bonusObserver) {
        observer.disconnect();
    }
}

var oldHref = document.location.href;
var observer: MutationObserver | null;

observe('body', () => {
    if (oldHref != document.location.href) {
        if (observer) {
            observer.disconnect();
        }
        oldHref = document.location.href;
        observer = observe('body', start);
    }
});

observer = observe('body', start);

export {};
