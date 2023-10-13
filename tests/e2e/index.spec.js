import {setTimeout} from 'node:timers/promises'
import {
	// expect,
	test,
} from '@playwright/test'

test('general', async ({page}) => {
	await page.goto('/')

	// const input = await page.getByTestId('doc')
	// const show = await page.getByTestId('show')

	// await expect(input).toBeVisible()
	// await expect(show).toBeVisible()

	// await input.fill('10.704.218/0001-80')

	// const gone = await page.getByTestId('gone')
	// await expect(gone).toBeVisible()

	await setTimeout(3000)

	await page.screenshot({
		path: './tests/e2e/__snapshots__/index.spec.js.png',
	})
})
