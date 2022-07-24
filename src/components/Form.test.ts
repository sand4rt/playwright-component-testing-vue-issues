import { test, expect } from '@playwright/experimental-ct-vue';
import Form from './Form.vue';
// import Input from './Input.vue';


test('renders a prop', async ({ mount }) => {
    const component = await mount(Form, {
        // components: {
        //     Input
        // },
        slots: {
            /**
             * Input is registered globally in playwright/index.ts. 
             * This is because it cannot be specified on a test by test basis
             * through the mount options like VTU (see example above).
             */
            default: `<Input />`
        }
    });

    await expect(component.locator('#some-input-id')).toBeVisible()
});
