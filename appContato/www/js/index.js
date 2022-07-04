var CONTACTS = new Array();
var EDIT_INDEX = -1;

function saveContact() {
    // pegando valores
    var name = document.getElementById('name');
    var email = document.getElementById('email');

    // verificações
    if(!name.value) {
        alertEmptyInput("nome", name);
        return false;
    }

    if(!email.value) {
        alertEmptyInput("email", email);
        return false;
    }

    // objeto com os dados digitados
    var contact = {
        name: name.value,
        email: email.value
    }

    if(EDIT_INDEX < 0) {
        // insere o obj contato no array CONTACTS
        CONTACTS.push(contact);
    }
    else {
        CONTACTS[EDIT_INDEX] = contact; // insere no indice os novos valores
        EDIT_INDEX = -1; // retorna para sua posição normal
        document.getElementById('btnSaveContact').innerHTML = 'Salvar Contato';
        alert({
            id: 'successfullEditAlert',
            title: '<strong class="text-green">Concluído</strong>',
            message: 'Contato alterado com sucesso!',
            class: 'white',
            buttons: [
                {
                    label: 'OK',
                    class: 'purple radius small',
                    onclick: () => {
                        closeAlertById('successfullEditAlert');
                    }
                }
            ]
        })
    }

    // limpa os campos
    name.value = '';
    email.value = '';

    console.log(CONTACTS);
    
}

function closeAlertById(idAlert) {
    closeAlert(idAlert);
}

// Custom Alerts
function alertEmptyInput(input, element) {
    alert({
        id: 'emptyInputAlert',
        title: '<strong class="text-amber-700">Ops!</strong>',
        message: `O campo <strong>${input}</strong> é obrigatório!`,
        class: 'white',
        buttons:[
            {
                label: 'OK',
                class: "small purple radius",
                onclick: () => {
                    closeAlertById('emptyInputAlert');
                    element.focus();
                }
            }
        ]
    })
}

function deleteContact(indexOfContact) {
    var name = CONTACTS[indexOfContact].name;
    alert({
        id: 'deleteContactAlert',
        title:'<strong class="text-red-400">Antenção</strong>',
        message: `Remover <strong>${name}</strong> da sua lista de contatos?`,
        class:'white',
        buttons:[
          {
            label: 'OK',
            class:'purple radius small',
            onclick: () => {
                //
                CONTACTS.splice(indexOfContact, 1);
                closeAlertById('deleteContactAlert');
            }
          },
          {
            label:'Cancelar',
            class:'text-white red-400 radius small',
            onclick: () => {
                closeAlertById('deleteContactAlert');
                return false;
            }
          }
        ]
    });
}

function editContact(indexOfContact) {

    // encontra no OBJ o id que foi passado como parâmetro
    var contact = CONTACTS.filter((obj, index) => {
        return indexOfContact == index ? obj : null; 
    });

    // atribui ao contact a posicao 0 do array dele mesmo
    contact = contact[0];

    document.getElementById('name').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('btnSaveContact').innerHTML = "Confirmar";

    EDIT_INDEX = indexOfContact;


}