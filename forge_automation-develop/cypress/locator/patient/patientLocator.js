class PatientLocator {
    get leftNavForPatients() {
        return cy.get('[data-testid="Patient database"]',{ timeout: 20000 })
    }

    get backButtonInPatientsPage(){
        return cy.get('.flex.gap-2 > .w-7');
    }

    get patientSearchField(){
        return cy.get('[data-testid="patient-search-field"]');
    }

    get patientsPage() {
        return cy.get('.p-8', { timeout: 20000 });
    }

    get filterButton() {
        return cy.get('[name="Filter"]', { timeout: 5000 });
    }

    get sexAtBirthOptionFromFilterDropdown() {
        return cy.get('[data-testid="Sex at birth"]', { timeout: 20000 })
    }

    get countryOptionFromFilterDropdown() {
        return cy.get('[data-testid="Country"] > .cursor-pointer');
    }

    get statusOptionFromFilterDropdown() {
        return cy.get('[data-testid="Status"] > .cursor-pointer');
    }

    get countryDropdown() {
        return cy.get('[name="Country"]');
    }

    get selectIndiaFromCountryDropdown() {
        return cy.get('[data-testid="India"]',{timeout: 20000});
    }

    get sexAtBirthDropdown(){
        return cy.get('[data-testid="filter-option-Sex at birth"]')
    }

    get threeDotIconFromPatientList(){
        return cy.get(':nth-child(1) > .text-right');
    }

    get statusDropdown(){
        return cy.get('[data-testid="filter-option-Status"] > .items-center');
    }

    get selectActiveOptionFromStatusDropdown(){
        return cy.get('[data-testid="Active"] > .cursor-pointer')
    }

    get activeTextFromStatusColumn(){
        return cy.get('tbody > :nth-child(1) > :nth-child(3)');
    }

    get indiaTextFromCountryColumn(){
        return cy.get('tbody > :nth-child(1) > :nth-child(7)');
    }

    get femaleTextFromSexAtBirthColumn(){
        return cy.get('.border-b > :nth-child(4)');
    }

    get femaleOptionFromSexAtBirthDropdown(){
        return cy.get('[data-testid="Female"] > .cursor-pointer');
    }

    get viewAccountFieldFromThreeDot(){
        return cy.get('ul > :nth-child(1) > .px-4 > .flex');
    }

    get editButtonFromPatientDetails(){
        return cy.get('.justify-between > .flex > .text-font-size-sm');
    }

    get cancelButtonFromPatientEditPopup(){
        return cy.get('.mb-5.cursor-pointer > :nth-child(1) > .w-7');
    }

    get dateOfBirthFieldFromPatientEditPopup(){
        return cy.get('#date');
    }

    get selectDateField(){
        return  cy.get('.w-64 > :nth-child(9)');
    }

    get sexOfBirthFieldFromPatientEditPopup(){
        return cy.get('form > :nth-child(3) > :nth-child(2) > .w-full > :nth-child(2)');
    }
}

export default PatientLocator;
