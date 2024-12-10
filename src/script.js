const CreateAccount = document.getElementById('create-account');

CreateAccount.addEventListener('submit', async (e) => {
  e.preventDefault();

  let nombre = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let r_seguridad = document.getElementById('securityAnswer').value;
  let contraseña = document.getElementById('password').value;
  
  let Create = {nombre : nombre, email : email, r_seguridad: r_seguridad, contraseña : contraseña,}
  let CreateJson = JSON.stringify(Create);
  console.log(CreateJson);

  fetch('http://localhost:4000/api/usuarios',{
    method: 'POST',
    body: CreateJson,
  })

    .then(x => console.log('hola'))
 
});

fetch('http://localhost:4000/api/usuarios/').then(x=> x.json()).then(x => console.log(x));