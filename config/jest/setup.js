import '@testing-library/jest-dom';

global.afterEach(() => {
	jest.spyOn( console, 'info').mockImplementation(() => {})

	jest.clearAllMocks()
})
