document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    const scheduleContainer = document.querySelector('.schedule-item').cloneNode(true)
    const scheduleField = scheduleContainer.querySelectorAll('input')

    scheduleField.forEach(function(field) {
        field.value = ''
    });

    document.querySelector('#schedule-items').appendChild(scheduleContainer)
}