const inputEl = document.querySelector("#validation-input");

const setClass = (class1, class2) => {
    inputEl.classList.add(class1);
    inputEl.classList.replace(class2, class1);
}

const handleInputBlur = (e) => {
    const dataLength = Number(e.currentTarget.dataset.length);
    if (e.currentTarget.value.trim().length === dataLength) {
        setClass('valid', 'invalid');
    } else {
        setClass('invalid', 'valid');
    }
}

inputEl.addEventListener('blur', handleInputBlur);
