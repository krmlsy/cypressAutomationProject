import DataProvider from "../support/Faker";

class Base{

constructor() {
this.dataProvider = new DataProvider()
}
    wait(ms){
        cy.wait(ms)
        return this
    }

}

export default Base