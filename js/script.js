function checkPhone(phone) {
    const regex = /8[0-9]{10}/;
    return regex.test(phone)
}    

function checkWord(word) {
    const regex = /^[А-Яа-я]*$/;
    return regex.test(word);
}

function checkMail(mail){
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    return regex.test(mail);
}

function validateForm(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const payment = document.getElementById("payment").value;

        document.getElementById('name').style = "border-color: none;";
        document.getElementById('surname').style = "border-color: none;";
        document.getElementById('phone').style = "border-color: none;";

        if (name == "" || surname == "" || address == "" || email == "" || payment == "") {
            alert('Пожалуйста, заполните все поля');
            return false;
        }
        
        if(!checkWord(name)){
            alert('Введите имя на русском без специальных символов');
            document.getElementById('name').style = "border-color: red;";
            return false;
        } 

        if(!checkWord(surname)){
            alert('Введите фамилию на русском без специальных символов');
            document.getElementById('surname').style = "border-color: red;";
            return false;
        } 

        if(!checkPhone(phone)){
            alert('Введите 11 цифр вашего номера телефона без +, начиная с 8');
            document.getElementById('phone').style = "border-color: red;";
            return false;
        } 

        if(!checkMail(email)){
            alert('Адрес электронной почты введен некорректно');
            return false;
        } 

        if(payment == "empty"){
            alert('Выберите способ оплаты');
            return false;
        } 
        
        alert(name + " " + surname + ", заказ принят! \nАдрес: " 
            + address + "\nПочта: " + email + "\nНомер телефона: "
            + phone + "\nСпособ оплаты: " + payment) 

        form.submit();
        return true;
    });
}

document.addEventListener("DOMContentLoaded", validateForm);