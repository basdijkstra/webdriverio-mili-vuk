import * as wdio from '../utils/wrapper_methods.js'

describe('The NewZoo platform', () => {

    it('should allow me to switch between months and see relevant statistics change', async () => {

        await wdio.openBrowserAt('https://platform-staging.newzoo.com/');

        await wdio.setValue('input[name="user_name"]', 'testingscenariodevs@gmail.com');

        await wdio.setValue('input[name="password"]', 'asd');

        await wdio.click('button[type="submit"]');

        await wdio.waitUntilContainsText('.big-header__text', 'Discover games and markets within the Newzoo Platform.');

        await wdio.hoverMouseOver('.main-nav__access');

        await wdio.click('a[href="/high-level-rankings"]');

        await wdio.hoverMouseOver('.about-the-data');

        let current_share = await wdio.getElementText("//table[@id='current-table']/tbody/tr[1]/td[6]/span");

        await wdio.click('.dashboard-title__action');

        await wdio.click('input[placeholder=\'MMMM dd, yyyy\']');

        await wdio.click('.react-datepicker__navigation--previous');

        await wdio.click('.react-datepicker__month-11');

        await wdio.click("//div[text()='Fetch Data']");

        let updated_share = await wdio.getElementText("//table[@id='current-table']/tbody/tr[1]/td[6]/span");

        expect(updated_share).not.toBe(current_share);
    });
});
