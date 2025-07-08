class AssessmentLocator {
    get creatNewFormButton() {
        return cy.get('.pt-4 > .gap-3 > .bg-primary-blue-600');
    }

    get nameInputField() {
        return cy.get('input[type="text"]');
    }

    get selectCountry() {
        return cy.get(':nth-child(2) > div.relative > :nth-child(1) > .px-6');
    }

    get selectCondition() {
        return cy.get(':nth-child(3) > div.relative > :nth-child(1) > .px-6');
    }

    get selectUpsellProduct() {
        return cy.get(':nth-child(5) > .relative > .flex');
    }

    get startBuldingButton() {
        return cy.get('button[name="Start Building"]');
    }

    get clinicalDropdownField() {
        return cy.get(':nth-child(5) > .whitespace-nowrap', { timeout: 20000 });
    }

    get assessmentFormField() {
        return cy.get('.text-forge-grey-900 > .flex-1');
    }

    get goBackButton() {
        return cy.get('.p-3 > :nth-child(1) > .px-4', { timeout: 5000 });
    }

    get assessmentFormPage() {
        return cy.get('.p-8', { timeout: 20000 });
    }

    get assessmentSearchField() {
        return cy.get('[data-testid="assessmentForm-search-field"]');
    }

    get leftNavForClinical() {
        return cy.get('[data-testid="Clinical team"]', { timeout: 20000 });
    }

    get leftNavForAssessmentForm() {
        return cy.get('[data-testid="Assessment forms"] > .flex-1',{ timeout: 20000 });
    }

    get assesmentFromsTableRow() {
        return cy.get("tbody tr", { timeout: 20000 });
    }

    get validatePageLoaded() {
        cy.get('div.rounded-full').should('exist');
        // cy.get('div.rounded-full').should('not.exist');
        cy.get('body').then($el => {
            if ($el.find('nav li ul li').length == 0) {
                this.leftNavForClinical.contains("Clinical").click();
                this.validatePageLoaded;
            }
        })
    }

    get draftField() {
        return cy.get('[data-testid="draft-tab-fromAssessmentPage"]', { timeout: 5000 });
    }

    get liveField() {
        return cy.get('[data-testid="live-tab-fromAssessmentPage"]');
    }

    get publishButton() {
        return cy.get('.px-6');
    }

    get closeButtonFromPublishPopup() {
        return cy.get('[name="Close"]');
    }

    get publishedPopup() {
        return cy.get('.relative > .bg-white', { timeout: 20000 });
    }

    get countrySearchField() {
        return cy.get('.z-10 > .p-2 > .flex-1');
    }

    get alertExitButton() {
        return cy.get('.bg-primary-blue-600');
    }

    get threeDotButtonFromAssessmentSection() {
        return cy.get('span > .px-2');
    }

    get duplicateSectionButton() {
        return cy.get('[name="Duplicate section"]');
    }

    get deleteButtonFromSection() {
        return cy.get('[name="Delete"]');
    }

    get sectionCard() {
        return cy.get(':nth-child(4) > .rounded-xl');
    }

    get editButtonFromAssessmentList() {
        return cy.get('[name="Edit"]');
    }

    get duplicateButtonFromAssessmentList() {
        return cy.get('[name="Duplicate"]');
    }

    get deleteButtonFromAssessmentList() {
        return cy.get('[name="Delete"]');
    }

    get closeButtonFromDeleteAlert() {
        return cy.get('[name="Close"]');
    }

    get continueButtonFromDeleteAlert() {
        return cy.get('[name="Continue"]');
    }

    get threeDotButtonFromAssessmentList() {
        return cy.get(':nth-child(1) > .text-right > div.relative > span > .px-2', { timeout: 5000 });
    }

    get filterButton() {
        return cy.get('[name="Filter"]', { timeout: 5000 });
    }

    get countryOptionFromFilterDropdown() {
        return cy.get(':nth-child(1) > .cursor-pointer > .justify-between');
    }

    get dateOptionFromFilterDropdown() {
        return cy.get(':nth-child(2) > .cursor-pointer > .justify-between');
    }

    get statusOptionFromFilterDropdown() {
        return cy.get(':nth-child(3) > .cursor-pointer > .justify-between');
    }

    get countryDropdown() {
        return cy.get('[name="Country"]');
    }

    get selectIndiaFromCountryDropdown() {
        return cy.get(':nth-child(7) > .select-none');
    }

    get dateDropdown() {
        return cy.get('[name="Date"]');
    }

    get selectPastWeekFromDateDropdown() {
        return cy.get('[data-testid="Past week"] > .cursor-pointer');
    }

    get statusDropdown() {
        return cy.get('[name="Status"]');
    }

    get selectDraftStatus() {
        return cy.get('[data-testid="Draft"] > .select-none');
    }

    get addButtonFromSelectOneField() {
        return cy.get(':nth-child(1) > .px-2 > .flex > :nth-child(2) > span');
    }

    get questionTitleField() {
        return cy.get('input[placeholder="This is a select one question title"]');
    }

    get option1FromQuestionField() {
        return cy.get('[data-testid="questionOption-input-field0"]');
    }

    get option2FromQuestionField() {
        return cy.get('[data-testid="questionOption-input-field1"]');
    }

    get DeleteOption1FromQuestionField() {
        return cy.get('[data-testid="delete-icon-forOption0"]');
    }

    get assessmentFormDetailsHeader() {
        return cy.get('.p-3');
    }

    get addButtonFromMutipleChoiceField(){
        return cy.get(':nth-child(2) > .px-2 > .flex');
    }

    get MutiplechoiceQuestionTitleField(){
        return cy.get('[placeholder="This is a multiple choice question title"]');
    }

    get Option1(){
        return cy.get('[placeholder="Option 1*"]');
    }

    get Option2(){
        return cy.get('[placeholder="Option 2*"]');
    }

    get addanotheroptionButton(){
        return cy.get('[name="Add another"]');
    }

    get Option3(){
        return cy.get('[placeholder="Option 3*"]');
    }

    get addButtonFromYesOrNoField(){
        return cy.get(':nth-child(3) > .px-2 > .flex');
    }

    get YesOrNoQuestionTitleField(){
        return cy.get('[placeholder="This is a yes no question title"]');
    }


    get addButtonFromDropDownSelectField(){
        return cy.get(':nth-child(4) > .px-2 > .flex');
    }

    get DropDownSelectQuestionTitleField(){
        return cy.get('[placeholder="This is a select dropdown question title"]');
    }


    get addButtonFromGPlookupField(){
        return cy.get(':nth-child(5) > .px-2 > .flex');
    }

    get gplookupQuestionTitleField(){
        return cy.get('[placeholder="This is a gp lookup question title"]');
    }


    get addButtonFromAddressField(){
        return cy.get(':nth-child(6) > .px-2 > .flex');
    }

    get AddressQuestionTitleField(){
        return cy.get('[placeholder="This is a address question title"]');
    }

    get addButtonFromMedicationField(){
        return cy.get(':nth-child(7) > .px-2 > .flex');
    }

    get MedicationQuestionTitleField(){
        return cy.get('[placeholder="This is a medication question title"]');
    }

    get SearchField(){
        return cy.get('[placeholder="Search field"]');
    }


    get addButtonFromBMIField(){
        return cy.get(':nth-child(8) > .px-2 > .flex');
    }

    get BMIQuestionTitleField(){
        return cy.get('[placeholder="This is a bmi question title"]');
    }

    get BMIheightWithoutShoes(){
        return cy.get('[placeholder="Your height (without shoes)"]');
    }

    get BMIweightinIndoorClothes(){
        return cy.get('[placeholder="Your weight (in indoor clothes)"]');
    }


    get addButtonFromAllergiesField(){
        return cy.get(':nth-child(9) > .px-2 > .flex');
    }

    get AllergiesQuestionTitleField(){
        return cy.get('[placeholder="This is a allergies question title"]');
    }

    get addButtonFromDateField(){
        return cy.get(':nth-child(10) > .px-2 > .flex');
    }

    get DateQuestionTitleField(){
        return cy.get('[placeholder="This is a date question title"]');
    }

    get selectDateField(){
        return cy.get('[placeholder="DD/MM/YYYY"]');
    }

    get addButtonFromConsentField(){
        return cy.get(':nth-child(11) > .px-2 > .flex');
    }

    get ConsentQuestionTitleField(){
        return cy.get('[placeholder="This is a consent question title"]');
    }

    get addButtonFromEmailField(){
        return cy.get(':nth-child(12) > .px-2 > .flex');
    }

    get EmailQuestionTitleField(){
        return cy.get('[placeholder="This is a email question title"]');
    }

    get PatientNeedToAnswer(){
        return cy.get('[placeholder="Patient will be able to answer here"]');
    }

    get addButtonFromNumberField(){
        return cy.get(':nth-child(13) > .px-2 > .flex');
    }

    get NumberQuestionTitleField(){
        return cy.get('[placeholder="This is a number question title"]');
    }

    get NumberSearchField(){
        return cy.get('[placeholder="00000000"]');
    }

    get addButtonFromInputplainTextField(){
        return cy.get(':nth-child(14) > .px-2 > .flex');
    }

    get InputPlainTextQuestionTitleField(){
        return cy.get('[placeholder="This is a input plain text question title"]');
    }

    get addButtonFromFreeTextParagraphField(){
        return cy.get(':nth-child(16) > .px-2 > .flex');
    }

    get InputFreeTextParagraphQuestionTitleField(){
        return cy.get('[placeholder="This is a free text paragraph question title"]');
    }

    get addButtonFromFileUploadField(){
        return cy.get(':nth-child(17) > .px-2 > .flex');
    }

    get FileUploadTitleField(){
        return cy.get('[placeholder="This is a file upload question title"]');
    }

    get FileUploadIcon(){
        return cy.get('[id="Icons"]');
    }

    get clickonheading(){
        return cy.get('[class="flex justify-between items-center mb-5 border-b border-forge-grey-100 pb-[12px]"]');
    }

    get AssessmentquestionDetails(){
        return cy.get('[name="Details"]');
    }

    get showDescriptionField(){
        return cy.get('[data-testid="showDescription-toggle-button"]');
    }

    get TypeDescription() {
        return cy.get('.ql-editor');
    }

    get EnableButtonUnderDetails(){
        return cy.get('[class="w-[36px] h-[20px] rounded-full shadow-inner bg-primary-blue-600"]'); 
    }

    get ExpiresDropdown(){
        return cy.get('[data-testid="saveResponse-toggle-select"]');
    }

    get selectNeverDropdown(){
        return cy.get('[data-tooltip-id="0Never-drop-down"]');
    }

    get clickonSelectParentDropdown(){
        return cy.get('[data-testid="parent-field"]');
    }

    get NoOptionFoundDropdown(){
       return cy.get('.z-10 > .p-2');
    }

    get question1Dropdown(){
        return cy.get('[data-tooltip-id="0question1-drop-down"]');
    }

    get Expires1WeekDropdown(){
        return cy.get('[data-tooltip-id="11 week-drop-down"]');
    }

    get Expires2WeekDropdown(){
        return cy.get('[data-tooltip-id="22 weeks-drop-down"]');
    }

    get Expires3WeekDropdown(){
        return cy.get('[data-tooltip-id="33 weeks-drop-down"');
    }

    get Expires4WeekDropdown(){
        return cy.get('[data-tooltip-id="44 weeks-drop-down"');
    }

    get clickonquestion1Heading(){
        return cy.get('.truncate');
    }
    get checkParentOptions1(){
        return cy.get('[id="Option 1-0"]');
    }
    get checktwoOptionscheckbox(){
        return cy.get('[id="Option 2-1"]');
    }
    get checkyesoption(){
        return cy.get('[id="yes-0"]');
    }
    get checknoOption(){
        return cy.get('[id="no-1"]');
    }
    get clickagainquestion1(){
        return cy.get('[class="flex justify-between items-center mb-5 border-b border-forge-grey-100 pb-[12px]"]');
    }

    get checkParentOptions2(){
        return cy.get('[id="option21"]');
    }
    get checkParentOption3(){
        return cy.get('[id="Option 3-0"]');
    }

    get clickfirstquestion1(){
        return cy.get(':nth-child(3) > .false');
    }

    get clickonFreeTextQuestion(){
        return cy.get(':nth-child(3) > :nth-child(2) > .justify-between');
    }

    get clickonQuestion1(){
        return cy.get(':nth-child(4) > .false > .justify-between');
    }

    get TypeDescription(){
        return cy.get('[class="ql-editor ql-blank"]');
    }

    get exitButtonInAssessmentForm(){
        return cy.get('[data-testid="assessmentForm-exit-icon"]');
    }

    get settingsIconInAssessmentDetailsPage(){
        return cy.get('.p-3 > :nth-child(3) > :nth-child(1)');
    }

    get nameFieldInSettingsPage(){
        return cy.get(':nth-child(2) > .bg-pure-white');
    }

    get saveButtonInSettingsPage(){
        return cy.get('.flex-wrap > .px-2');
    }

    get goBackButtonInSettingsPage(){
        return cy.get('[name="Go Back"]');
    }

    get clickonThreedots(){
        return cy.get('[class="text-forge-grey-500"]');
    }

    get addGlobalBank(){
        return cy.findByText('Add to global bank');
    }

    get addDuplicatequestion(){
        return cy.findByText('Duplicate question');
    }

    get getDuplicateQuestion(){
        return cy.contains('Multiple questions')
        .parent() // Move up to the container
        .find('button[name="PopOver"]') // Find the button with the attribute
        .should('exist');
      
    }

    get checkDuplicatequestion(){
        return cy.get('[value="Copy of Multiple questions"]');
    }

    get getResettoDefault(){
         return cy.contains('reset to default')
         .parent() // Move up to the container
         .find('button[name="PopOver"]') // Find the button with the attribute
         .should('exist');
    }

    get clickonResetToDefault(){
        return cy.findByText('Reset to default');
    }

    get DeleteQuestion(){
        return cy.contains('Real time photos')
        .parent() // Move up to the container
        .find('button[name="PopOver"]') // Find the button with the attribute
    }

    get verifyDeleteWarningIcon(){
        return cy.get('.mb-4');
    }

    get verifyDeleteAssessmentquestionText(){
        return cy.findByText('Are you sure you want to delete this question?');
    }

    get verifyDeletewarningMessageText(){
       return cy.get('.relative > .text-forge-grey-600');
    }

    get verifyDeleteButton(){
        return cy.get('.relative > .bg-pure-white > .flex > div');
    }

    get verifyCloseButton(){
        return cy.findByText('Close');
    }

    get clickOnDeleteButton(){
        return cy.get('.relative > .bg-pure-white > .flex > div');
    }

    get nameSort(){
        return cy.get('[class="text-grey-600 cursor-pointer"]');
    }

    get verifySotingName(){
        return cy.get('table tbody tr td:nth-child(1)');
    }

    get checkAsessmentFormTable(){
        return cy.get('tbody tr');
    }

    get verifySortingStatus(){
       return cy.get('table tbody tr td:nth-child(2)');
    }

    get verifySortingLastEdited(){
        return cy.get('table tbody tr td:nth-child(3)');
    }

    get checkBreadcrumb(){
        return cy.get('[class="flex h-9 items-center gap-2 relative self-stretch w-full"]');
    }

    get verifyAssessmentFormUnderBreadcrumb(){
        return cy.get('div.relative.w-fit');
    }

    get clickonHomeUnderBreadCrumb(){
        return cy.get('.flex.gap-2 > .w-7');
    }

    get checkPagination(){
        return cy.get('.space-x-2');
    }

    get clickonSecondPage(){
        return cy.get('.space-x-2 > :nth-child(3)');
    }

    get verifyPageButtonActive(){
        return cy.get('.space-x-2 > .bg-primary-blue-600');
    }

    get goToPreviousPage(){
        return cy.get('.space-x-2 > :nth-child(1)');
    }

    get clickonThreeDotsFromPagination(){
        return cy.get('.focus\:outline-offset-0 > div.relative > span > .px-2');
    }

    get checktheOtherPages(){
        return cy.get('.react-tiny-popover-container > .bg-white');
    }  

    get nameSort(){
        return cy.get('[class="text-grey-600 cursor-pointer"]');
    }

    get verifySotingName(){
        return cy.get('table tbody tr td:nth-child(1)');
    }

    get checkAsessmentFormTable(){
        return cy.get('tbody tr');
    }

    get verifySortingStatus(){
       return cy.get('table tbody tr td:nth-child(2)');
    }

    get verifySortingLastEdited(){
        return cy.get('table tbody tr td:nth-child(3)');
    }

    get checkBreadcrumb(){
        return cy.get('[class="flex h-9 items-center gap-2 relative self-stretch w-full"]');
    }

    get verifyAssessmentFormUnderBreadcrumb(){
        return cy.get('div.relative.w-fit');
    }

    get checkPagination(){
        return cy.get('[class="flex space-x-2"]');
    }

    get clickonSecondPage(){
        return cy.get('.space-x-2 > :nth-child(3)');
    }

    get verifyPageButtonActive(){
        return cy.get('.space-x-2 > .bg-primary-blue-600');
    }

    get goToPreviousPage(){
        return cy.get('.space-x-2 > :nth-child(1)');
    }

    get ClickonThreeDots(){
        return cy.get('.space-x-2 > .shadow-shadow-sharp');
    }

    get checktheOtherPages(){
        return cy.get('.react-tiny-popover-container > .bg-white');
    }   

    get sectionDescriptionField(){
        return cy.get('[data-testid="description-input-field"]');
    }

    get defaultSection(){
        return cy.get('.rounded-xl.bg-forge-grey-50');
    }

    get sectionAlertField(){
        return cy.get('.bottom-0 > .block');
    }

    get questionAlertField(){
        return cy.get('.bottom-0 > .block');
    }

    get alertDeleteIconFromSection(){
        return cy.get('.bottom-0 > .px-4');
    }

    get alertDeleteIconFromQuestion(){
        return cy.get('.bottom-0 > .px-4');
    }

    get clickOnPreviewButton(){
        return cy.get('.p-3 > :nth-child(3) > :nth-child(2)');
    }

    get checkDraftStatusUnderPreview(){
        return cy.findByText('Draft');
    }

    get checkAssessmentPreviewSection(){
        return cy.get('[class="text-font-size-4xl font-medium text-forge-grey-900 mb-3 leading-[46.8px]"]');
    }

    get verifyUrlforPreview(){
        return cy.url().should('contain', 'assessment-form/preview');
    }

    get addAssessmentQuestions(){
        return cy.get('[data-testid="add-question-button"]');
    }
     get questionTitle(){
        return cy.get('[data-testid="questionTitle-input-field"]');
     }

     get option1InputField(){
        return cy.get('[data-testid="questionOption-input-field0"]');
     }

     get option2InpitField(){
        return cy.get('[data-testid="questionOption-input-field1"]');
     }

    get checkAssessmentquestionPreviewHeading(){
        return cy.get('.text-font-size-4xl');
    }

    get checkOptionsUnderquestionPreview(){
        return cy.get('[class="mb-7"]');
    }

    get checkDisabledOption1(){
        return cy.get('[id="Option 10"]');
    }

    get checkDisabledOption2(){
        return cy.get('[id="Option 21"]');
    }

    get checkOption1ButtonPreview(){
        return cy.get(':nth-child(1) > .flex-wrap > .flex-1 > .cursor-pointer');
    }

    get checkOption2ButtonPreview(){
    return cy.get(':nth-child(2) > .flex-wrap > .flex-1 > .cursor-pointer');
    }

    get clickOnContinueButton(){
        return cy.findByText('Continue');
    }

    get checkTheThankYouMessage(){
        return cy.findByRole('heading', {  name: "This was the last assessment question, Thank you!"});
    }

    get goBackIconPreview(){
        return cy.get('[id="Icons"]');
    }

    get checkSection1HeadingPreview(){
        return cy.get('[class="mb-2 text-forge-grey-500 text-font-size-sm"]');
    }

    get warningMessageUnderPreview(){
        return cy.findByText('This field is required!');
    }

    get selectLiveStatus() {
        return cy.get('[data-testid="Live"] > .select-none')
    }

    get selectArchiveStatus(){
        return cy.get('[data-testid="Archived"] > .select-none');
    }

    get leftNavForStaffUser() {
        return cy.get('[data-testid="Staff Users"]',{ timeout: 20000 })
    }


    get showDescriptionToggleButton() {
        return cy.get('[data-testid="showDescription-toggle-button"]',{ timeout: 20000 })
    }

    get homePageHeader(){
        return cy.get('.text-font-size-3xl');
    }

    get speedbumpUploadoption(){
        return cy.get('[class="flex flex-col items-center pointer-events-auto"]');
    }

    get addSpeedbumpDescription(){
        return cy.get('[class="ql-container ql-snow"]');
    }
}

export default AssessmentLocator;