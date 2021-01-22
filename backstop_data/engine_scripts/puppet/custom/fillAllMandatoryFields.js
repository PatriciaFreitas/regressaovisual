module.exports = async page => {
    await page.type("#first-name", "Patricia");
    await page.type("#last-name", "Freitas");
    await page.type("#email", "paty@example.com");
    await page.click("#agree");
  }