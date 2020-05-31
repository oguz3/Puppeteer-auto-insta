const puppeteer = require("puppeteer"); //Auto login

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/");

  await page.waitFor('input[name="username"]');
  await page.type('input[name="username"]', "exampleaccount20", { delay: 50 }); //your username

  await page.waitFor('input[name="password"]');
  await page.type('input[name="password"]', "123456789a", { delay: 50 }); // your password

  await page.waitFor('button[class="sqdOP  L3NKy   y3zKF     "]');
  await page.click('button[type="submit"]');

  await page.waitFor('div[class="LWmhU _0aCwM"]');
  await page.click('div[class="LWmhU _0aCwM"]');
  await page.waitFor(2000);
  await page.type(
    'input[class="XTCLo x3qfX focus-visible"]',
    "oguzhan.ulukaya",//message account
    { delay: 50 }
  );
  await page.waitFor(2000);
  await page.click('div[class="z556c"]');
  await page.waitFor('button[class="fAR91 sqdOP  L3NKy _4pI4F   _8A5w5    "]'); // send message
  await page.click('button[class="fAR91 sqdOP  L3NKy _4pI4F   _8A5w5    "]');
  await page.waitFor(2000);
  await page.waitFor('button[class="aOOlW   HoLwm "]');
  await page.click('button[class="aOOlW   HoLwm "]');

  for (var i = 0; i < 5; i++) {
    //5 times
    await page.type("textarea", "Hello!", { delay: 100 }); //message
    await page.waitFor(
      'div[class="                    Igw0E     IwRSH      eGOV_         _4EzTm                                        JI_ht                                                                      "]'
    ); //div class name?
    await page.click(
      'div[class="                    Igw0E     IwRSH      eGOV_         _4EzTm                                        JI_ht                                                                      "]'
    );
    await page.waitFor(500);
  }
  console.log("finish");
})();
