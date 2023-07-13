import Base from "./BasePage"

class Employee extends Base{

    employeeId
    //general
    goToCreateEmployeePage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        return this
    }

    clickSubmit(){
        cy.get("button[type='submit']").first().click()
        return this
    }

    verifyOperationSuccessfull(){
        cy.contains('Success', {timeout : 10000}).should('be.visible')
        return this
    }

    searchEmployee(id){
        cy.xpath("//label[text()='Employee Id']/parent::*/parent::*//input").type(id)
        return this
    }

    clickSearch(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("//button[@type=\'submit\']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }


    //add employee
    clickAddButton(){
        cy.get('i.oxd-icon.bi-plus').click()
        return this
    }

    setFirstName(name){
        cy.get('[name="firstName"]').type(name)
        return this
    }

    setLastName(lastName){
        cy.get('[name="lastName"]').type(lastName)
        return this
    }

    // edit employee
    clickEditButton(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("(//div[@class=\'oxd-table-cell-actions\']//button)[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }

    setEmployeeId(id){
        cy.xpath("(//label[text()='Employee Id']/following::input)[1]").clear().type(id)
        return this
    }

    setMiddleName(middleName){
        cy.get('[name="middleName"]').type(middleName)
        return this
    }


    //delete employee
    clickDeleteButton(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("(//div[@class=\'oxd-table-cell-actions\']//button)[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }

    clickYesToConfirmDialog() {
        cy.xpath('//button[text()=\' Yes, Delete \']').click()
    }

    // functions
    createCustomer(id, firstName, lastName){
        this.goToCreateEmployeePage()
            .clickAddButton()
            .setEmployeeId(id)
            .setFirstName(firstName)
            .setLastName(lastName)
            .clickSubmit()
        return this
    }

    updateCustomer(id, middleName){
        this.goToCreateEmployeePage()
            .searchEmployee(id)
            .clickSearch()
            .clickEditButton()
            .setMiddleName(middleName)
            .clickSubmit()
        return this
    }

    deleteCustomer(id){
        this.goToCreateEmployeePage()
            .searchEmployee(id)
            .clickSearch()
            .clickDeleteButton()
            .clickYesToConfirmDialog()
        return this
    }
}

export default Employee