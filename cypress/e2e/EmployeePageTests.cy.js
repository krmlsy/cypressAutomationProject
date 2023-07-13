import Employee from "../PageObjects/EmployeePage"
import Login from "../PageObjects/LoginPage"
import DataProvider from "../support/Faker"

describe('Customer Page Tests', () => {

  let userData
  let employeeId = "1"
  const employeePage =  new Employee()
  const loginPage =  new Login()

  before( () => {
    cy.log("------- Launch App -------")
    cy.fixture("data").then( (data) => {
      userData = data
    })
  })

  beforeEach( () => {
    cy.log("------- Login -------")
    loginPage.login(userData.username, userData.password)
             .verifyLogin()
  })

  it('Create Customer Test', () => {
    const firstName = employeePage.dataProvider.firstName()
    const lastName = employeePage.dataProvider.lastName()

    employeePage.createCustomer(employeeId, firstName, lastName)
                 .verifyOperationSuccessfull()
    
  })

  it('Update Customer Test', () => {
    employeePage.updateCustomer(employeeId, employeePage.dataProvider.middleName())
                .verifyOperationSuccessfull()
  })

  it('Delete Customer Test', () => {
    employeePage.deleteCustomer(employeeId)
                .verifyOperationSuccessfull()
  })

})