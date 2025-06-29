/*const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:cesitar8526@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()

}
*/


const $form = document.querySelector('#form');
let saving = false;
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
    event.preventDefault()

    if(saving){
return;
    }
    const form = new FormData(this);

    if(!form.get('name') || !form.get('email') || !form.get('email')){
 Swal.fire({
    title: 'Information',
    text: 'All fields with * are required',
    icon: 'info',
    });
        return;
    }

    const buttonSend = document.getElementById("buttonSend");
    buttonSend.innerText = "Sent request...";
    
    console.log(form.get('name'))
        console.log(form.get('email'))
            console.log(form.get('message'))
saving = true;
            fetch('https://apisend.onrender.com/send-email', {
                method:'POST',
                headers: {
    'Content-Type': 'application/json', },
  body: JSON.stringify({
     name: form.get('name'),
                email: form.get('email'),
                message: form.get('message')
  })
            })
  .then(respuesta => {
     $form.reset();
 buttonSend.innerText = 'Send';
    Swal.fire({
    title: 'Information',
    text: 'The request was saved correctly',
    icon: 'success',
    })
saving = false;
    // Manejamos la respuesta de la petición aqui
  })
  .catch(error => {
     buttonSend.innerText = 'Send';
      Swal.fire({
    title: 'Information',
    text: 'An error occurred during the request',
    icon: 'error',
    })
    saving = false;
    // Si hay un error en la petición, lo manejamos aqui 
  })

}

