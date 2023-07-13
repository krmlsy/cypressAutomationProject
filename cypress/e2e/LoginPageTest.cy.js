import Login from "../PageObjects/LoginPage"

describe('Login Page Tests', () => {

  let userData 
  const loginPage =  new Login()

  before( () => {
    cy.log("------- Launch App -------")
    cy.fixture("data").then( (data) => {
      userData = data
    })
  })

  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  it('Check Title Test', () => {
    loginPage.goToLoginPage()
        .verifyTitle('OrangeHRM')
  })
  
  it('Successfull Login Test', () => {
    loginPage.login(userData.username, userData.password)
             .verifyLogin()
  })

  it('Invalid credentials Test', () => {
    loginPage.login(loginPage.dataProvider.fullName(), generatePassword())
             .verifyInvalidCredentials()
  })
})