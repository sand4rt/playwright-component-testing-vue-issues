import { test, expect } from '@playwright/experimental-ct-vue';
import ComponentWorks from './ComponentWorks.vue';

test('renders a link', async ({ mount }) => {
    const component = await mount(ComponentWorks, {
        props: {
            test: 'test'
        }
    });

    await expect(component).toHaveAttribute('href', '/');
});

