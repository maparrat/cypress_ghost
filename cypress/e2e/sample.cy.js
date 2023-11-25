
import {faker} from '@faker-js/faker';

Cypress.Commands.add('login', () => {
  // Lógica para realizar la autenticación
  cy.visit('/'); // Ajusta la ruta según la estructura de tu aplicación

  // Ingresa el nombre de usuario y la contraseña
  cy.get('#identification').type('miguel1999parra@gmail.com'); // Reemplaza 'tu_usuario' con el nombre de usuario deseado
  cy.get('#password').type('zbyHRuEWC6j.m*_a'); // Reemplaza 'tu_contraseña' con la contraseña deseada

  // Hacer clic en el botón de inicio de sesión (ajusta el selector según la estructura de tu aplicación)
  cy.get('button[type="submit"]').click();

  // Verificar que la sesión se haya iniciado correctamente (puedes ajustar esto según tu aplicación)
  cy.url().should('include', '/dashboard'); // Reemplaza '/dashboard' con la ruta a la que se redirige después de iniciar sesión

  // Asegúrate de esperar a que la autenticación se complete antes de continuar
  cy.wait(2000);
});


describe('Modificar el campo user-name en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo user-name y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo user-name y modificar su valor
    const newUserName = 'nuevoNombreDeUsuario';
    cy.get('#user-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newUserName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-name').should('have.value', newUserName);
  });
});


describe('Modificar el campo user-name en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo user-name y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo user-name y modificar su valor
    const newUserName = faker.person.firstName();
    cy.get('#user-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newUserName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-name').should('have.value', newUserName);
  });
});

describe('Modificar el campo user-name en la página de configuración de personal [Dato aleatorio]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo user-name y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo user-name y modificar su valor
    const newUserName = faker.word.words();
    cy.get('#user-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newUserName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-name').should('have.value', newUserName);
  });
});

describe('Iniciar session [estrategia dato conocido]', () => {

  it('Accede a hacer sigin', () => {
 // Lógica para realizar la autenticación
 cy.visit('/'); // Ajusta la ruta según la estructura de tu aplicación

 // Ingresa el nombre de usuario y la contraseña
 cy.get('#identification').type('miguel1999parra@gmail.com'); // Reemplaza 'tu_usuario' con el nombre de usuario deseado
 cy.get('#password').type('zbyHRuEWC6j.m*_a'); // Reemplaza 'tu_contraseña' con la contraseña deseada

 // Hacer clic en el botón de inicio de sesión (ajusta el selector según la estructura de tu aplicación)
 cy.get('button[type="submit"]').click();

 // Verificar que la sesión se haya iniciado correctamente (puedes ajustar esto según tu aplicación)
 cy.url().should('include', '/dashboard'); // Reemplaza '/dashboard' con la ruta a la que se redirige después de iniciar sesión

 // Asegúrate de esperar a que la autenticación se complete antes de continuar
 cy.wait(2000);

   
  });
});
describe('Iniciar session [estrategia dato aleatorio ]', () => {

  it('Accede a hacer sigin', () => {
 // Lógica para realizar la autenticación
 cy.visit('/'); // Ajusta la ruta según la estructura de tu aplicación

 // Ingresa el nombre de usuario y la contraseña
 const email = faker.word.words();
 const password = faker.word.words();
 cy.get('#identification').type(email); // Reemplaza 'tu_usuario' con el nombre de usuario deseado
 cy.get('#password').type(password); // Reemplaza 'tu_contraseña' con la contraseña deseada

 // Hacer clic en el botón de inicio de sesión (ajusta el selector según la estructura de tu aplicación)
 cy.get('button[type="submit"]').click();

 // Verificar que la sesión se haya iniciado correctamente (puedes ajustar esto según tu aplicación)
 cy.contains('Please fill out the form to sign in.'); // Reemplaza '/dashboard' con la ruta a la que se redirige después de iniciar sesión

 // Asegúrate de esperar a que la autenticación se complete antes de continuar
 cy.wait(2000);

   
  });
});

describe('Iniciar session [estrategia dato aleatorio valido]', () => {

  it('Accede a hacer sigin', () => {
 // Lógica para realizar la autenticación
 cy.visit('/'); // Ajusta la ruta según la estructura de tu aplicación

 // Ingresa el nombre de usuario y la contraseña
 const email = faker.internet.email()
 cy.get('#identification').type(email); // Reemplaza 'tu_usuario' con el nombre de usuario deseado
 cy.get('#password').type('zbyHRuEWC6j.m*_a'); // Reemplaza 'tu_contraseña' con la contraseña deseada

 // Hacer clic en el botón de inicio de sesión (ajusta el selector según la estructura de tu aplicación)
 cy.get('button[type="submit"]').click();

 // Verificar que la sesión se haya iniciado correctamente (puedes ajustar esto según tu aplicación)
 cy.contains('There is no user with that email address.'); // Reemplaza '/dashboard' con la ruta a la que se redirige después de iniciar sesión

 // Asegúrate de esperar a que la autenticación se complete antes de continuar
 cy.wait(2000);

   
  });
});





describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });

  it('Accede a la página de configuración de personal y envía una invitación', () => {
    // Visitar la página de configuración de personal
    cy.visit('http://localhost:2368/ghost/#/settings/staff');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Hacer clic en el botón "Invite"
    cy.contains('Invite').click();

    // Esperar a que se cargue la ventana de invitación
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Ingresar el correo electrónico en el campo de invitación
    const email = faker.internet.email()
    cy.get('input[name="email"]').type('miguel.parra@bizagi.com');

    // Hacer clic en el botón "Send invitation now"
    cy.contains('Send invitation now').click();

    // Esperar a que se procese la invitación (ajusta según sea necesario)
    cy.wait(5000);


   
  });
});




describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
 
  it('Accede a la página de configuración de personal y envía una invitación', () => {
    // Visitar la página de configuración de personal
    cy.visit('http://localhost:2368/ghost/#/settings/staff');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Hacer clic en el botón "Invite"
    cy.contains('Invite').click();

    // Esperar a que se cargue la ventana de invitación
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Generar un correo electrónico aleatorio y válido
    const email = faker.internet.email()

    // Ingresar el correo electrónico en el campo de invitación
    cy.get('input[name="email"]').type(email);

    // Hacer clic en el botón "Send invitation now"
    cy.contains('Send invitation now').click();

    // Esperar a que se procese la invitación (ajusta según sea necesario)
    cy.wait(5000);


  });
});

describe('Invitar a un nuevo miembro del personal nuevo [estrategia dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
 
  it('Accede a la página de configuración de personal y envía una invitación', () => {
    // Visitar la página de configuración de personal
    cy.visit('http://localhost:2368/ghost/#/settings/staff');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Hacer clic en el botón "Invite"
    cy.contains('Invite').click();

    // Esperar a que se cargue la ventana de invitación
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Generar un correo electrónico aleatorio 
    const email = faker.word.words();

    // Ingresar el correo electrónico en el campo de invitación
    cy.get('input[name="email"]').type(email);

    // Hacer clic en el botón "Send invitation now"
    cy.contains('Send invitation now').click();

    // Esperar a que se procese la invitación (ajusta según sea necesario)
    cy.wait(5000);
    cy.contains('Invalid Email.').should('be.visible');

  });
});