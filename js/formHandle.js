
document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.getElementById('form');

    document.querySelectorAll('.job').forEach(job => {
        job.addEventListener("click", handleClick);
    });

    document.querySelectorAll('.job').forEach(job => {
        job.addEventListener("keydown", handleClick);
    });


    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }

});

const handleClick = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32 || e.type === 'click') {
        var job = e.currentTarget
        var button = job.querySelector('.btn');
        var checkedBox = job.querySelector('input');
        var p = document.createElement('p');
    } else
        return

    if (e.keyCode === 13 || e.keyCode === 32)
        checkedBox.checked = !checkedBox.checked

    if (checkedBox.checked) {
        p.className = 'btn btn-checked'
        p.innerHTML = 'בחרתי'
    } else {
        p.className = 'btn'
        p.innerHTML = 'רוצה להגיש מועמדות'
    }
    button.parentNode.replaceChild(p, button);

}
const processForm = (e) => {
    // if (e.preventDefault)
    e.preventDefault();
    let formEl = document.forms.form;
    let formData = new FormData(formEl);
    let name = formData.get('firstName');
    let phone = formData.get('phoneNumber');
    let phoneInput = document.querySelector('#phoneNumber');
    let nameInput = document.querySelector('#firstName');
    let checkedBoxes = formEl.querySelectorAll('input[type=checkbox]:checked');
    let afterSubmit = document.querySelector('.fixed-submitted')
    let fixedDiv = document.querySelector('.fixed')
    let beforeSubmit = document.querySelector('.fixed-container')

    let error = ''
    if (phone.length > 10) phone = phone.replace(/-/g, "");
    if (phone.length < 10 || !phone.match(/^\d+$/)) {
        error += "אנא בדוק/י את מספר טלפון"
        error += "  <br />"
        phoneInput.classList.add('error-input')
    } else {
        phoneInput.classList.remove('error-input')
    }
    if (name.length < 2) {
        error += 'אנא הכנס/י שם מלא '
        error += "  <br />"

        nameInput.classList.add('error-input')
    } else
        nameInput.classList.remove('error-input')

    let checkboxValuesArr = Array.from(checkedBoxes).map(checkbox => checkbox.value)

    if (checkboxValuesArr.length === 0) {
        error += 'לא בחרת משרה'
    }

    if (error) {
        let er = document.querySelectorAll('.error')
        let myArray = Array.from(er)
        myArray.forEach(el => {
            el.innerHTML = error
            el.setAttribute('aria-hidden', 'false')
        })
        return false
    }

    let relaventInputs = {
        name: name, phone: phone, jobList: checkboxValuesArr
    }
    alert('send form', relaventInputs)
    /* do what you want with the form */

    // You must return false to prevent the default form behavior

    fixedDiv.classList.add('fixed-after-click')
    beforeSubmit.classList.add('u-hidden')
    afterSubmit.classList.remove('u-hidden')
    return false;
}
