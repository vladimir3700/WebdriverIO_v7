module.exports = class Page {
    
    open_smart_image() {
    browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage')
    }

    open_scroll_text() {
    browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/text-animations-scroll')
    }

    async maximize_browser(){
        await browser.maximizeWindow()
    }

    async Pause_one_second(){
       await browser.pause(1000)
    }

    async Pause_three_second(){
        await browser.pause(3000)
    }

    async Refresh(){
        await browser.refresh()
    }

    async Screenshot(){
        await browser.saveScreenshot('./screenshot/Screenshot_image_fullscreen.png')
    }
}
