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
            vus: 10,
            iterations: 5000,
            maxDuration: '240s'
        },
    },
}

export default async function () {
    const page = browser.newPage();

    try {
        await page.goto('http://10.101.153.182');
    } finally {
        page.close();
    }
}
