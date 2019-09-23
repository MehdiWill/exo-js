function modifier() {

    // utiliser getElementsByTagsName
    var text = document.getElementsByTagName("input")[0]
    const confirm_text = document.getElementsByTagName("input")[1]
    const button = document.getElementsByTagName("input")[2]


    if (text.value == confirm_text.value) {

        // on ajoute une classe 'green' a l'input 
        button.style.borderColor='green';
        // on supprime red si id
    } else {

       
        // on ajoute une classe 'red' a l'input avec .style
        button.style.borderColor='red';

    }
}
