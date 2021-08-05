const { Pause_one_second, maximize_browser, Pause_three_second, url, click_fullscreen, Refresh, click_to_image, image_size, get_full_text, click_close_icon, get_src_image, close_button_wrong_clickable, Screenshot, double_click_image, click_text_under_image} = require('../pageobjects/smart.image');

const smartimage = require('../pageobjects/smart.image');

describe('Test smart page on the <<storied.co>>', () => {
   
    it ('1) Load time test in default mode', async () => {
       const start_time = new Date().getTime()

       await maximize_browser()
       await smartimage.open_smart_image()   
       await expect(browser).toHaveUrl(url)

       const end_time = new Date().getTime()
       const time_test = end_time - start_time
       console.log("-----------------------------------------")
       console.log("Start time first test: " + start_time)
       console.log("End time first test: " + end_time)
       console.log("Time for first test: " + time_test + " ms")
       console.log("-----------------------------------------")
  })

  it ('2) Image opening test with <<FULLSCREEN>> link', async () => {
    await click_fullscreen()
    await Pause_one_second()
    //await Pause_three_second()
  })

  it ('3) Test close_icon (close fullscreen mode)', async () => {
    await click_close_icon()
    await Pause_one_second()
    //await Pause_three_second()
  })

  it ('4) Test clickable close_icon (with wrong Xpath) in automation mode', async () => {
    await click_fullscreen()
    await close_button_wrong_clickable()
    await Pause_one_second()
   //await Pause_three_second()
  })

  it ('5) Image opening test by clicking (on the image)', async () => {
    //await Refresh()
    await click_close_icon()
    await expect(browser).toHaveUrl(url)
    await click_to_image()
    await Pause_one_second()
    //await Pause_three_second()
  })

  it('6) get image size in fullscreen mode', async () => {
    await Pause_three_second()
    await image_size()
    await Pause_one_second()
    //await Pause_three_second()
   })
  
  it('7) screenshot image in browser', async () => {
   await Screenshot()
  })

  it ('8) test get src link image', async () => {
    await get_src_image()
    //await Pause_three_second()
  })

  it ('9) get fulltext under image', async () => {
    await get_full_text()
    //await Pause_three_second()
  })

  it('10) click on the text under image', async () => {
    await click_text_under_image()
    await Pause_one_second()
    //await Pause_three_second()
  })

  it('11) double click image in fullscreen mode', async () => {
    await double_click_image()
    await Pause_one_second()
    //await Pause_three_second()
    await click_close_icon()
    await Pause_one_second()
    //await Pause_three_second()
    await click_to_image()
    await Pause_one_second()
    //await Pause_three_second()
  })
  
})


