function modifier() {
    var text = document.getElementById('text')
    const confirm_text = document.getElementById('confirm_text')
    const button = document.getElementById('button')

    if (text.value == confirm_text.value) {
        // on ajoute une classe 'green' a l'input avec l'id button
        button.classList.add("green");
        button.classList.remove("red");
        // on supprime red
    } else {
        // on ajoute une classe 'red' a l'input avec l'id button
        button.classList.add("red");
        button.classList.remove("green");
    }
}

