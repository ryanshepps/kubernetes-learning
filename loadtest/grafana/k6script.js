import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        ui: {
            executor: 'shared-iterations',
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
    },
}

export default async function () {
    const page = browser.newPage();

    try {
        await page.goto('http://FRONTEND_IP');
        sleep(1);
    } finally {
        page.close();
    }
}
