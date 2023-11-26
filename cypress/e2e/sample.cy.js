
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


describe('Crear nueva etiqueta dato conocido', () => {


  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });

  it('Crea una nueva etiqueta con el nombre "test"', () => {
    // Visitar la página para crear una nueva etiqueta
    cy.visit('http://localhost:2368/ghost/#/tags/new');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo tag-name y escribir el valor "test"
    const tagName = 'test';
    cy.get('#tag-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .type(tagName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que la etiqueta se haya creado correctamente
    
  });
});



describe('Crear nueva etiqueta dato aleatorio pero valido', () => {


  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Crea una nueva etiqueta con el nombre "test"', () => {
    // Visitar la página para crear una nueva etiqueta
    cy.visit('http://localhost:2368/ghost/#/tags/new');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo tag-name y escribir el valor "test"
    const tagName = faker.animal.cat();
    cy.get('#tag-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .type(tagName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que la etiqueta se haya creado correctamente
    
  });
});

describe('Crear nueva etiqueta dato aleatorio ', () => {


  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Crea una nueva etiqueta con el nombre "test"', () => {
    // Visitar la página para crear una nueva etiqueta
    cy.visit('http://localhost:2368/ghost/#/tags/new');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario

    // Encontrar el campo tag-name y escribir el valor "test"
    const tagName = faker.word.words();
    cy.get('#tag-name')
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .type(tagName);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que la etiqueta se haya creado correctamente
    
  });
});

describe('Modificar el campo contraseña en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo contraseña y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const oldPassword = 'zbyHRuEWC6j.m*_a';
    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(oldPassword);



      cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(oldPassword);      

      cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(oldPassword);   

    // Hacer clic en el botón "Save"
    cy.contains('Change Password').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);


   
  });
});


describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo contraseña y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const oldPassword = faker.internet.password();
    const newPassword = faker.internet.password();
    const verifyPassword = faker.internet.password();
    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(oldPassword);



      cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newPassword);      

      cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(verifyPassword);   

    // Hacer clic en el botón "Save"
    cy.contains('Change Password').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    cy.contains('Your new passwords do not match');


   
  });
});

describe('Modificar el campo contraseña en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo contraseña y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const oldPassword = faker.word.words();
    const newPassword = faker.word.words();
    const verifyPassword = faker.word.words();
    cy.get('#user-password-old').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(oldPassword);



      cy.get('#user-password-new').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newPassword);      

      cy.get('#user-new-password-verification').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(verifyPassword);   

    // Hacer clic en el botón "Save"
    cy.contains('Change Password').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    cy.contains('Your new passwords do not match');


   
  });
});



describe('Modificar el campo website en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo website y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newWebsite = 'https://sistemas.uniandes.edu.co/es/isis';
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newWebsite);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-website').scrollIntoView().should('have.value',  newWebsite);
  });
});


describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo website y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newWebsite= faker.internet.url();
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newWebsite);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-website').scrollIntoView().should('have.value', newWebsite);
  });
});

describe('Modificar el campo website en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo  website y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newWebsite = faker.word.words();
    cy.get('#user-website').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newWebsite);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.contains('Website is not a valid url');
  });
});





describe('Modificar el campo bio en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo bio y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newBio = 'Escritor reconocido en el campo de las pruebas automaticas, esta triste porque los tutores no reconocen su trabajo como tester.';
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newBio);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-bio').scrollIntoView().should('have.value',  newBio);
  });
});


describe('Modificar el campo bio en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo bio y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newBio = faker.lorem.paragraph();
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newBio);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-bio').scrollIntoView().should('have.value', newBio);
  });
});

describe('Modificar el campo Bio en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo  bio y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newBio = faker.word.words();
    cy.get('#user-bio').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newBio);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-bio').scrollIntoView().should('have.value', newBio);
  });
});



describe('Modificar el campo twiter en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo twiter y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newt = 'MiguelParra';
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newt);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/'+ newt);
  });
});


describe('Modificar el campo Twiter en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo twiter y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newT = faker.person.firstName();
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newT);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/'+ newT);
  });
});

describe('Modificar el campo Twiter en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo fb y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newT = faker.word.adjective();
    cy.get('#user-twitter').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newT);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-twitter').scrollIntoView().should('have.value', 'https://twitter.com/'+ newT);
  });
});



describe('Modificar el campo facebook en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo fb y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newFB = 'MiguelParra';
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newFB);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/'+ newFB);
  });
});


describe('Modificar el campo Facebook en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo fb y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newFB = faker.person.firstName();
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newFB);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/'+ newFB);
  });
});

describe('Modificar el campo FACEBOOK en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo fb y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newFB = faker.word.adjective();
    cy.get('#user-facebook').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newFB);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-facebook').scrollIntoView().should('have.value', 'https://www.facebook.com/'+ newFB);
  });
});
describe('Modificar el campo user-location en la página de configuración de personal [Dato conocido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo location y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newLocation = 'Bogota';
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newLocation);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
});


describe('Modificar el campo user-location en la página de configuración de personal [Dato aleatorio valido]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo location y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newLocation = faker.location.city();
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newLocation);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
});

describe('Modificar el campo user-location en la página de configuración de personal [Dato aleatorio ]', () => {
  beforeEach(() => {
    // Llamar al comando de autenticación antes de cada prueba
    cy.login();
  });
  
  it('Modifica el campo location y verifica el cambio', () => {
    // Visitar la página de configuración de personal para el usuario 'miguel'
    cy.visit('http://localhost:2368/ghost/#/settings/staff/miguel');

    // Esperar a que la página se cargue completamente
    cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
    
    // Encontrar el campo user-name y modificar su valor
    const newLocation = faker.word.words();
    cy.get('#user-location').scrollIntoView()
      .should('be.visible')  // Opcional: Asegurarse de que el elemento sea visible
      .clear()  // Limpiar el campo antes de ingresar el nuevo valor
      .type(newLocation);

    // Hacer clic en el botón "Save"
    cy.contains('Save').click();

    // Esperar a que se procese la acción (ajusta según sea necesario)
    cy.wait(5000);

    // Verificar que el nuevo valor se haya guardado correctamente
    cy.get('#user-location').scrollIntoView().should('have.value', newLocation);
  });
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