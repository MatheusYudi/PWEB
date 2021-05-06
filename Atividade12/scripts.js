const validateForm = () => {
    const form = document.forms['form'];
    const nome = form.elements[0];
    const email = form.elements.email;
    const comentario = form.elements.comentario;
    const surveyFirstTime = document.getElementById('yes').checked;

    if (!nome.value || nome.value.length < 10) {
        alert('Nome precisa ter no mínimo 10 caracteres!');
        nome.focus();
        return false;
    };

    if (!email.value || !email.value.includes('@') || !email.value.includes('.')) {
        alert('Email inválido!');
        email.focus();
        return false;
    };

    if (!comentario.value || comentario.value.length < 20) {
        alert('Comentário precisa ter no mínimo 20 caracteres!');
        comentario.focus();
        return false;
    };

    alert(surveyFirstTime ? 'Volte sempre a esta página!' : 'Que bom que você voltou a visitar esta página!')

    return true;
}
