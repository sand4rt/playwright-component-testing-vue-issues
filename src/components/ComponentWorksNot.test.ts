import { test, expect } from '@playwright/experimental-ct-vue';
import ComponentWorksNot from './ComponentWorksNot.vue';

test('renders plain text', async ({ mount }) => {
    const component = await mount(ComponentWorksNot);

    await expect(component).toHaveText('test');
});
