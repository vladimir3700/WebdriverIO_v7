const Page = require('./page');

class smartimage extends Page {

    get url(){
      return ('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage')
  }
  
  async click_fullscreen(){
     const click_image = await $('#widget_15380469937145a1e54d5')
     await click_image.waitForExist()
     await click_image.click()
  }

  async click_close_icon(){
    const click_icon_close = await $('body > div.inline-gallery-wrapper.n2-appshell-styles:nth-child(27) > inline-gallery#hash-326580504.ng-isolate-scope > div.gallery-container-small.stop-propagation-content-stack.stop-propagation-content-stack-horizontal.expandable.fullscreen > div.n2-icon.gallery-close-icon:nth-child(2)')
    await click_icon_close.waitForExist()
    await browser.waitUntil(() => click_icon_close.isClickable())
    await click_icon_close.click()
  }

   async close_button_wrong_clickable(){
    //const close_icon = await $('div.n2-icon.gallery-close-icon')
    //const close_icon = await $('<svg />')
    //const close_icon = await $('#icon-close-icon')
    const close_icon = await $('//*[@aria-label="Close fullscreen"]')
    await close_icon.waitForExist()
    let clickable = await close_icon.isClickable();
    console.log("-------------------------------------")
    console.log(clickable); // outputs: true or false
    if (clickable == false)
    {
       console.log("element is not clickable")
    }
    console.log("-------------------------------------") 
  }

  async click_to_image() {
      const image = await $('.zoom-image-cover')
      await image.waitForExist()
      await browser.waitUntil(() => image.isClickable())
      await image.click()
    }

    async image_size() {
      const class_image = await $('.zoom-image-contain')
      await class_image.waitForExist()
      const width_image = await class_image.getSize('width')
      console.log("width_image: " + width_image)
      const height_image = await class_image.getSize('height')
      console.log("height_image: " + height_image)
    }

    async get_src_image() {
      const link_src_class = await $('.zoom-image-contain')
      await link_src_class.waitForExist()
      const link_src_image = await link_src_class.getAttribute('src')
      console.log("link src image: " + link_src_image) 
        }


    async get_full_text() {
      const text_under = await $('div.gallery-container-small.stop-propagation-content-stack.stop-propagation-content-stack-horizontal.expandable.fullscreen')
      await text_under.waitForExist()
      const text_under_text = await text_under.getText()
      console.log("Full text under image: " + text_under_text)
    }

    async double_click_image() {
      const class_image_click = await $('/html/body/div[4]/inline-gallery/div/div[4]/div/figure/div/img')
      await class_image_click.waitForExist()
      await browser.waitUntil(() => class_image_click.isClickable())
      await class_image_click.doubleClick()
    }

    async click_text_under_image() {
      const class_text_click = await $('/html/body/div[4]/inline-gallery/div/div[4]/div/figure/figcaption/p[2]/span')
      await class_text_click.waitForExist()
      await class_text_click.click()
    }


    }
 

module.exports = new smartimage();