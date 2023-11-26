import {faker} from '@faker-js/faker';

Cypress.Commands.add('login', () => {

  cy.visit('/'); 

  cy.get('#identification').type('miguel1999parra@gmail.com'); 
  cy.get('#password').type('zbyHRuEWC6j.m*_a'); 

  cy.get('button[type="submit"]').click();

  cy.url().should('include', '/dashboard'); 

  cy.wait(2000);
});

// GIVEN: User is logged in
describe('Crear nueva etiqueta dato conocido', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new tag with a known name "test"
  it('Crea una nueva etiqueta con el nombre "test"', () => {
    cy.visit('http://localhost:2368/ghost/#/tags/new');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    const tagName = 'test';
    cy.get('#tag-name')
      .should('be.visible')
      .type(tagName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created
  });
});

// GIVEN: User is logged in
describe('Crear nueva etiqueta dato aleatorio pero valido', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new tag with a valid random name
  it('Crea una nueva etiqueta con un nombre aleatorio pero valido', () => {
    cy.visit('http://localhost:2368/ghost/#/tags/new');
    cy.wait(2000);

    // WHEN: User generates a valid random tag name using faker
    const tagName = faker.animal.cat();
    cy.get('#tag-name')
      .should('be.visible')
      .type(tagName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The new tag with the valid random name should be created
  });
});

// GIVEN: User is logged in
describe('Crear nueva etiqueta dato aleatorio', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to create a new tag with a random name
  it('Intenta crear una nueva etiqueta con un nombre aleatorio', () => {
    cy.visit('http://localhost:2368/ghost/#/tags/new');
    cy.wait(2000);

    // WHEN: User generates a random tag name using faker
    const tagName = faker.word.words();
    cy.get('#tag-name')
      .should('be.visible')
      .type(tagName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The system may or may not accept the tag creation depending on randomness
  });
});

// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the password field with a known value
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides the known old password
    const oldPassword = 'zbyHRuEWC6j.m*_a';
    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

    cy.wait(5000);

    // THEN: The password should be successfully changed
  });
});

// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to modify the password field with valid random data
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random passwords using faker
    const oldPassword = faker.internet.password();
    const newPassword = faker.internet.password();
    const verifyPassword = faker.internet.password();

    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(verifyPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

    cy.wait(5000);

    // THEN: The system should display a message indicating that new passwords do not match
    cy.contains('Your new passwords do not match');
  });
});

// GIVEN: User is logged in
describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido - Palabras]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to modify the password field with valid random words
  it('Modifica el campo contraseña y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const oldPassword = faker.word.words();
    const newPassword = faker.word.words();
    const verifyPassword = faker.word.words();

    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(oldPassword);

    cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newPassword);

    cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(verifyPassword);

    // WHEN: User clicks on the "Change Password" button
    cy.contains('Change Password').click();

    cy.wait(5000);

    // THEN: The system should display a message indicating that new passwords do not match
    cy.contains('Your new passwords do not match');
  });
});

// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the website field with a known value
  it('Modifica el campo website y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known website
    const newWebsite = 'https://sistemas.uniandes.edu.co/es/isis';
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newWebsite);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The website field should be successfully updated
    cy.get('#user-website').scrollIntoView().should('have.value', newWebsite);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the website field with valid random data
  it('Modifica el campo website y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random website using faker
    const newWebsite = faker.internet.url();
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newWebsite);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The website field should be successfully updated
    cy.get('#user-website').scrollIntoView().should('have.value', newWebsite);
  });
});


// GIVEN: User is logged in
describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User attempts to modify the website field with valid random words
  it('Modifica el campo website y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const newWebsite = faker.word.words();
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newWebsite);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The system should display a message indicating that the website is not a valid URL
    cy.contains('Website is not a valid url');
  });
});

// GIVEN: User is logged in
describe('Modificar el campo bio en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the bio field with a known value
  it('Modifica el campo bio y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known bio
    const newBio = 'Escritor reconocido en el campo de las pruebas automaticas, esta triste porque los tutores no reconocen su trabajo como tester.';
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newBio);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The bio field should be successfully updated
    cy.get('#user-bio').scrollIntoView().should('have.value', newBio);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo bio en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the bio field with valid random data
  it('Modifica el campo bio y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random bio using faker
    const newBio = faker.lorem.paragraph();
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newBio);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The bio field should be successfully updated
    cy.get('#user-bio').scrollIntoView().should('have.value', newBio);
  });
});


// GIVEN: User is logged in
describe('Modificar el campo Bio en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the bio field with valid random words
  it('Modifica el campo  bio y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const newBio = faker.word.words();
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newBio);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The bio field should be successfully updated
    cy.get('#user-bio').scrollIntoView().should('have.value', newBio);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo twiter en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Twitter field with a known value
  it('Modifica el campo twiter y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known Twitter handle
    const newt = 'MiguelParra';
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newt);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Twitter field should be successfully updated with the full Twitter URL
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/' + newt);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo Twiter en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Twitter field with valid random data
  it('Modifica el campo twiter y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random Twitter handle using faker
    const newT = faker.person.firstName();
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newT);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Twitter field should be successfully updated with the full Twitter URL
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/' + newT);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo Twiter en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Twitter field with valid random words
  it('Modifica el campo fb y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const newT = faker.word.adjective();
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newT);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Twitter field should be successfully updated with the full Twitter URL
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/' + newT);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo facebook en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Facebook field with a known value
  it('Modifica el campo fb y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known Facebook handle
    const newFB = 'MiguelParra';
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newFB);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Facebook field should be successfully updated with the full Facebook URL
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/' + newFB);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo Facebook en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Facebook field with valid random data
  it('Modifica el campo fb y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random Facebook handle using faker
    const newFB = faker.person.firstName();
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newFB);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Facebook field should be successfully updated with the full Facebook URL
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/' + newFB);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo FACEBOOK en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the Facebook field with valid random words
  it('Modifica el campo fb y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words using faker
    const newFB = faker.word.adjective();
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newFB);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The Facebook field should be successfully updated with the full Facebook URL
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/' + newFB);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo user-location en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the location field with a known value
  it('Modifica el campo location y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known location
    const newLocation = 'Bogota';
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newLocation);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The location field should be successfully updated
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo user-location en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the location field with valid random data
  it('Modifica el campo location y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random location using faker
    const newLocation = faker.location.city();
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newLocation);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The location field should be successfully updated
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
});


// GIVEN: User is logged in
describe('Modificar el campo user-location en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the location field with random words
  it('Modifica el campo location y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates random words for location using faker
    const newLocation = faker.word.words();
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')
      .clear()
      .type(newLocation);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The location field should be successfully updated
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo user-name en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the user-name field with a known value
  it('Modifica el campo user-name y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User provides a known user-name
    const newUserName = 'nuevoNombreDeUsuario';
    cy.get('#user-name')
      .should('be.visible')
      .clear()
      .type(newUserName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The user-name field should be successfully updated
    cy.get('#user-name').should('have.value', newUserName);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo user-name en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the user-name field with valid random data
  it('Modifica el campo user-name y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates a valid random user-name using faker
    const newUserName = faker.person.firstName();
    cy.get('#user-name')
      .should('be.visible')
      .clear()
      .type(newUserName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The user-name field should be successfully updated
    cy.get('#user-name').should('have.value', newUserName);
  });
});

// GIVEN: User is logged in
describe('Modificar el campo user-name en la página de configuración de personal [Dato aleatorio]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User modifies the user-name field with valid random words
  it('Modifica el campo user-name y verifica el cambio', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');
    cy.wait(2000);

    // WHEN: User generates valid random words for user-name using faker
    const newUserName = faker.word.words();
    cy.get('#user-name')
      .should('be.visible')
      .clear()
      .type(newUserName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The user-name field should be successfully updated
    cy.get('#user-name').should('have.value', newUserName);
  });
});


// GIVEN: User is on the login page
describe('Iniciar session [estrategia dato conocido]', () => {
  // THEN: User successfully signs in with known credentials
  it('Accede a hacer sigin', () => {
    cy.visit('/');

    // WHEN: User provides known email and password
    cy.get('#identification').type('miguel1999parra@gmail.com');
    cy.get('#password').type('zbyHRuEWC6j.m*_a');

    // WHEN: User clicks on the "Sign In" button
    cy.get('button[type="submit"]').click();

    // THEN: User is redirected to the dashboard
    cy.url().should('include', '/dashboard');

    cy.wait(2000);
  });
});

// GIVEN: User is on the login page
describe('Iniciar session [estrategia dato aleatorio ]', () => {
  // THEN: User attempts to sign in with invalid random data
  it('Accede a hacer sigin', () => {
    cy.visit('/');

    // WHEN: User generates random email and password using faker
    const email = faker.word.words();
    const password = faker.word.words();
    cy.get('#identification').type(email);
    cy.get('#password').type(password);

    // WHEN: User clicks on the "Sign In" button
    cy.get('button[type="submit"]').click();

    // THEN: User should see an error message
    cy.contains('Please fill out the form to sign in.');

    cy.wait(2000);
  });
});

// GIVEN: User is on the login page
describe('Iniciar session [estrategia dato aleatorio valido]', () => {
  // THEN: User attempts to sign in with valid random email and known password
  it('Accede a hacer sigin', () => {
    cy.visit('/');

    // WHEN: User generates a valid random email using faker
    const email = faker.internet.email();
    cy.get('#identification').type(email);
    cy.get('#password').type('zbyHRuEWC6j.m*_a');

    // WHEN: User clicks on the "Sign In" button
    cy.get('button[type="submit"]').click();

    // THEN: User should see an error message indicating no user with that email
    cy.contains('There is no user with that email address.');

    cy.wait(2000);
  });
});

// GIVEN: User is logged in
describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato conocido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User navigates to staff settings and sends an invitation with known email
  it('Accede a la página de configuración de personal y envía una invitación', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff');
    cy.wait(2000);

    // WHEN: User clicks on "Invite" and provides a known email
    cy.contains('Invite').click();
    cy.wait(2000);
    cy.get('input[name="email"]').type('miguel.parra@bizagi.com');

    // WHEN: User clicks on "Send invitation now"
    cy.contains('Send invitation now').click();

    cy.wait(5000);
  });
});

// GIVEN: User is logged in
describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato aleatorio valido]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User navigates to staff settings and sends an invitation with a valid random email
  it('Accede a la página de configuración de personal y envía una invitación', () => {
    cy.visit('http://localhost:2368/ghost/#/settings/staff');
    cy.wait(2000);

    // WHEN: User clicks on "Invite" and provides a valid random email using faker
    cy.contains('Invite').click();
    cy.wait(2000);
    const email = faker.internet.email();
    cy.get('input[name="email"]').type(email);

    // WHEN: User clicks on "Send invitation now"
    cy.contains('Send invitation now').click();

    cy.wait(5000);
  });
});

// GIVEN: User is logged in
describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato aleatorio ]', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User navigates to staff settings and attempts to send an invitation with invalid random email
  it('Accede a la página de configuración de personal y envía una invitación', () => {
    // WHEN: User visits staff settings
    cy.visit('http://localhost:2368/ghost/#/settings/staff');
    cy.wait(2000);

    // WHEN: User clicks on "Invite"
    cy.contains('Invite').click();
    cy.wait(2000);

    // WHEN: User provides an invalid random email using faker
    const email = faker.word.words();
    cy.get('input[name="email"]').type(email);

    // WHEN: User clicks on "Send invitation now"
    cy.contains('Send invitation now').click();

    cy.wait(5000);

    // THEN: User should see an error message indicating an invalid email
    cy.contains('Invalid Email.').should('be.visible');
  });
});
