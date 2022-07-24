import { test, expect } from '@playwright/experimental-ct-vue';
import Form from './Form.vue';

test('emit a submit event when the button is clicked', async ({ mount }) => {
    const component = await mount(Form);

    await component.locator('button').click();

    await expect(component.emitted().submit).toMatchObject({ username: 'admin' })
});
