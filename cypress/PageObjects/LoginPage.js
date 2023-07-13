import Base from "./BasePage"

class Login extends Base {

    goToLoginPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        return this
    }

    verifyTitle(title){
        cy.title().should('eq', title)
        return this
    }

    setUserName(username){
        cy.get("input[name='username']").type(username)
        return this
    }

    setPassword(password){
        cy.get("input[type='password']").type(password)
        return this
    }

    clickSubmit(){
        cy.get("button[type='submit']").click()
        return this
    }

    verifyLogin(){
        cy.contains('Dashboard').should('be.visible')
        return this
    }

    verifyInvalidCredentials(){
        cy.contains('Invalid credentials').should('be.visible')
        return this
    }

    login(username, password){
        this.goToLoginPage()
            .setUserName(username)
            .setPassword(password)
            .clickSubmit()
        return this
    }
}

export default Login