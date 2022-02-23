elForm = document.querySelector(".form");
elSelect = document.querySelector(".select-item");
elSpan = document.querySelector(".form-span")
elInput = document.querySelector(".form__input")
elForm.addEventListener("submit", function(event){
    event.preventDefault();

    var selectVal = elSelect.value;

    var inputVal = elInput.value;

    var result = selectVal * inputVal;

    elSpan.textContent = (`${result}`);
})