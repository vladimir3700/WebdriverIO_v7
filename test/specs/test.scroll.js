const { url_scroll, get_text, get_HTML, open_scroll_text, maximize_browser, text_animation_without_scrolling, text_animation_with_scrolling, get_size_text_animation, get_properties_text_animation} = require('../pageobjects/scroll.text');

describe('Tests text scroll animation', () => {
    
    it('1) Test getText', async() => {
        await maximize_browser()
        await open_scroll_text()
        await expect(browser).toHaveUrl(url_scroll)
        await get_text()
    })

    it ('2) Test getHtml', async() => {
        await get_HTML()
    })

    it ('3) Test text animation without scrolling function in automation mode', async() => {
        await text_animation_without_scrolling()    
    })

    it ('4) Test text animation with scrolling in automation mode', async() => {
        await text_animation_with_scrolling()
    })

    it ('5) Get size block with text animation', async() => {
        await get_size_text_animation()
    })

    it ('6) get css property', async() => {
        await get_properties_text_animation()
    })
})