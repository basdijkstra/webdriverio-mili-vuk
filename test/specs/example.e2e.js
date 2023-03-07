describe('The NewZoo platform', () => {

    it('should allow me to switch between months and see relevant statistics change', async () => {

        await browser.url('https://platform-staging.newzoo.com/');

        await browser.maximizeWindow();

        await $('input[name="user_name"]').setValue('testingscenariodevs@gmail.com');
        await $('input[name="password"]').setValue('asd');

        await $('button[type="submit"]').scrollIntoView();
        await $('button[type="submit"]').click();

        await expect($('.big-header__text')).toBeExisting();
        await expect($('.big-header__text')).toHaveTextContaining(
            'Discover games and markets within the Newzoo Platform.');

        await $('.main-nav__access').moveTo();

        await $('a[href="/high-level-rankings"]').click();

        await $('.about-the-data').moveTo();

        await $("//table[@id='current-table']/tbody/tr[1]/td[6]/span").scrollIntoView();
        let current_share = await $("//table[@id='current-table']/tbody/tr[1]/td[6]/span").getText();

        await $('.dashboard-title__action').scrollIntoView();
        await $('.dashboard-title__action').click();

        await $('input[placeholder=\'MMMM dd, yyyy\']').scrollIntoView();
        await $('input[placeholder=\'MMMM dd, yyyy\']').click();

        await $('.react-datepicker__navigation--previous').scrollIntoView();
        await $('.react-datepicker__navigation--previous').click();

        await $('.react-datepicker__month-11').scrollIntoView();
        await $('.react-datepicker__month-11').click();

        await $("//div[text()='Fetch Data']").scrollIntoView();
        await $("//div[text()='Fetch Data']").click();

        await $("//table[@id='current-table']/tbody/tr[1]/td[6]/span").scrollIntoView();
        let updated_share = await $("//table[@id='current-table']/tbody/tr[1]/td[6]/span").getText();

        expect(updated_share).not.toBe(current_share);
    });

});
