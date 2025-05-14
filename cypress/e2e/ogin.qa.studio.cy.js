describe('Проверка авторизация', function () {

    it('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик
     })


//Напишу проверку на позитивный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

it('автотест на проверку логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажать забыли пароль?
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести любой имейл
         cy.get('#restoreEmailButton').click(); // отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик
         })
})


//Напишу автотест на проверку логики восстановления пароля:
//а) Нажать «Забыли пароль»
//б) Ввести любой имейл
//в) Проверка, что получили нужный текст и есть кнопка крестика

it('автотест на проверку неправильного пароля', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio20201'); // Ввести НЕправильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик

})
//Напиши проверку на негативный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести НЕправильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

it('автотест на проверку неправильного логина', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('gerdfbdfbdfbman@dolnikov.ru'); // Ввести НЕправильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик

})

//Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

it('автотест проверки на негативный кейс валидации', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('germandolnikovпрпртпрru'); // Сделать ошибку валидации
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик

})



//Напиши проверку на негативный кейс валидации:
//а) Ввести логин без @
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что получаем текст с ошибкой

it('автотест проверки на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // приведение к строчным буквам в логине
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //проверить что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверить наличие кнопки крестик
     })

//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна
//(текст именно «Авторизация прошла успешно» и наличие кнопки крестик)