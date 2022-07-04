let CONTACTS = new Array();

function saveContact() {
    // pegando valores
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    // verificações
    if(!name.value) {
        alert("Campo nome é obrigatório!");
        name.focus();
        return false;
    }

    if(!email.value) {
        alert("Campo email é obrigatório!");
        email.focus();
        return false;
    }

    // objeto com os dados digitados
    let contact = {
        name: name.value,
        email: email.value
    }

    // insere o obj contato no array CONTACTS
    CONTACTS.push(contact);

    // limpa os campos
    name.value = '';
    email.value = '';

    // console.log("Contato:", contact);
    
}