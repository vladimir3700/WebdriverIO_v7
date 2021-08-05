const Page = require('./page');

class scrolltext extends Page {

    get url_scroll(){
        return ('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/text-animations-scroll')
    }
     
    async get_text() {
        const text_id = await $('#widget_5abe7f3fb8a3d')
        const text_get = await text_id.getText()
        console.log("----------------------------------------------")
        console.log("Text output: " + text_get)
        console.log("----------------------------------------------")
    }

    async get_HTML() {
        var get_html = await $('#widget_5abe7f3fb8a3d').getHTML()
        console.log("-----------------------------------------------")
        console.log("HTML: ")
        console.log(get_html)
        console.log("-----------------------------------------------")
    }

    async text_animation_without_scrolling() {
       const get_class_text_animation = await $('#widget_5abe7f3fb8ba7')
       await get_class_text_animation.waitForExist()
       const get_text_animation = await get_class_text_animation.getText()
       if (get_text_animation === '')
       {
           console.log("Text content without scrolling is not available")
       } 
    }

    async text_animation_with_scrolling() {
        const get_class_text_animation = await $('#widget_5abe7f3fb8ba7')
        await get_class_text_animation.waitForExist()
        await get_class_text_animation.scrollIntoView()
        await browser.pause(3000)
        const get_text_animation = await get_class_text_animation.getText()
        if (get_text_animation != '')
        {
            console.log("After scrolling the text content is available"),
            console.log("Text: " + get_text_animation)
        } 
    }

    async get_size_text_animation() {
        const get_class_text_animation = await $('#widget_5abe7f3fb8ba7')
        await get_class_text_animation.waitForExist()
        await get_class_text_animation.scrollIntoView()
        await browser.pause(3000)
        const get_text_size_animation_width = await get_class_text_animation.getSize('width')
        const get_text_size_animation_height = await get_class_text_animation.getSize('height')
        console.log("Width text animation: " + get_text_size_animation_width)
        console.log("Height text animation: " + get_text_size_animation_height)
    }

    async get_properties_text_animation(){
        const get_class_text_animation = await $('#widget_5abe7f3fb8ba7')
        await get_class_text_animation.waitForExist()
        const color = await get_class_text_animation.getCSSProperty('color')
        console.log(color)
        const font = await get_class_text_animation.getCSSProperty('font-family')
        console.log(font)
        const background = await get_class_text_animation.getCSSProperty('background-color')
        console.log(background)
    }
    
}

module.exports = new scrolltext();