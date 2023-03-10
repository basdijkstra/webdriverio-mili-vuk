export async function openBrowserAt(url) {
    await browser.url(url);
    await browser.maximizeWindow();
}

export async function setValue(locator, value) {
    await $(locator).scrollIntoView();
    await $(locator).setValue(value);
}

export async function click(locator) {
    await $(locator).scrollIntoView();
    await $(locator).click();
}

export async function waitUntilContainsText(locator, text) {
    await expect($(locator)).toBeExisting();
    await expect($(locator)).toHaveTextContaining(text);
}

export async function hoverMouseOver(locator) {
    await $(locator).scrollIntoView();
    await $(locator).moveTo();
}

export async function getElementText(locator) {
    await $(locator).scrollIntoView();
    return await $(locator).getText();
}
