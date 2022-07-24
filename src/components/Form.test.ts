import { test, expect } from '@playwright/experimental-ct-vue';
import Form from './Form.vue';
import Input from './input.vue';


test('renders a prop', async ({ mount }) => {
    const component = await mount(Form, {
        slots: {
            default: Input
        }
    });

    await expect(component.locator('#input')).toBeVisible()
});
