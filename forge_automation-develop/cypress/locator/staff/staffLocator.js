class StaffLocator {
    get leftNavForStaffUsers() {
        return cy.get('[data-testid="Staff users"]',{ timeout: 20000 })
    }

    get backButtonInStaffUsersPage(){
        return cy.get('.h-9.gap-2 > .w-7');
    }

    get addStaffUserButton(){
        return cy.get('.gap-3 > .px-4');
    }

    get staffUserPopupCrossIcon(){
        return cy.get('.items-start > .mt-1 > .cursor-pointer');
    }

    get staffDepartmentField(){
        return cy.get('.mb-6 > div.relative > :nth-child(1) > .px-6');
    }

    get prescriberFromStaffDepartmentDropdown(){
        return cy.get('[data-testid="Prescriber"] > .cursor-pointer');
    }

    get prescriberFromStaffRoleDropdown(){
        return cy.get('[data-testid="Prescriber"] > .cursor-pointer > .justify-between');
    }
    
    get prescriberFromDepartmentDropdown(){
        return cy.get(':nth-child(1) > .select-none > .flex');
    }

    get threeDotIconFromStaffList(){
        return cy.get(':nth-child(1) > .text-right');
    }

    get staffSearchField(){
        return cy.get('.gap-2 > .p-2 > .flex-1');
    }

    get staffListPage(){
        return cy.get('.px-16');
    }

    get roleDropdown(){
        return cy.get('[data-testid="filter-option-Role"]');
    }

    get prescriberFromRoleDropdown(){
        return cy.get('[data-testid="Prescriber"] > .select-none');
    }

    get prescriberTextFromRoleColumn(){
        return cy.get('tbody > :nth-child(1) > .text-forge-grey-700');
    }

    get departmentDropdown(){
        return cy.get('[data-testid="filter-option-Department"]');
    }

    get prescriberTextFromDepartmentColumn(){
        return cy.get(':nth-child(1) > .py-3.font-normal');
    }

    get statusDropdown(){
        return cy.get('[data-testid="filter-option-Status"]');
    }

    get onlineFieldFromStatusDropdown(){
        return cy.get('[data-testid="Online"] > .cursor-pointer');
    }

    get onlineTextFromStatusColumn(){
        return cy.get('tbody > :nth-child(1) > :nth-child(4)');
    }

    get staffFirstName(){
        return cy.get(':nth-child(1) > [data-testid="newForm-name-field"]');
    }

    get staffLastName(){
        return cy.get('.bg-pure-white.border-forge-grey-200 > :nth-child(2) > [data-testid="newForm-name-field"]');
    }

    get staffEmail(){
        return cy.get('.relative > [data-testid="newForm-name-field"]');
    }

    get generatePasswordButton(){
        return cy.get('[data-testid="generate-password-button"]');
    }

    get selectCountryField(){
        return cy.get('[data-testid="newForm-country-field"]');
    }

    get selectIndiaFromCountryDropdown(){
        return cy.get('[data-testid="India"] > .cursor-pointer > .justify-between');
    }

    get licenseNumberField(){
        return cy.get('.items-end > :nth-child(2) > .block');
    }

    get licenseExpiryDateField(){
        return cy.get('#date');
    }

    get selectDate(){
        return cy.get('.w-64 > :nth-child(13)');
    }

    get pharmacistFromStaffDepartmentDropdown(){
        return cy.get('[data-testid="Pharmacists"] > .cursor-pointer > .justify-between');
    }

    get pharmacistFromStaffRoleDropdown(){
        return cy.get('[data-testid="Pharmacist"] > .cursor-pointer > .justify-between')
    }

    get pctFromStaffDepartmentDropdown(){
        return cy.get('[data-testid="Patient Care Team"] > .cursor-pointer > .justify-between');
    }

    get pctFromStaffRoleDropdown(){
        return cy.get('[data-testid="PCT"] > .cursor-pointer > .justify-between');
    }

    get viewAccountFieldFromThreeDot(){
        return cy.get('.bg-white > ul > :nth-child(1) > .px-4');
    }

    get staffUserBreadcrumpFromAccountDetails(){
        return cy.get('.flex.mb-6 > :nth-child(2) > .text-forge-grey-500');
    }

    get staffFirstNameFieldInEditPage(){
        return cy.get(':nth-child(1) > [data-testid="newForm-name-field"]');
    }

    get staffLastNameFieldInEditPage(){
        return cy.get('.border-forge-grey-200 > :nth-child(2) > [data-testid="newForm-name-field"]');
    }

    get uploadSignatureField(){
        return  cy.get('.p-3 > div.w-full > .w-full');
    }
}

export default StaffLocator;