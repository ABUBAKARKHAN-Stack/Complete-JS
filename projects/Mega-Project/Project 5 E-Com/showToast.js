export const showToast = (operation, id) => {
    const toastDiv = document.createElement('div')
    toastDiv.classList.add('toast')

    if (operation === 'add') {
        toastDiv.textContent = `Product With ID ${id} has Been Added`
    } else {
        toastDiv.textContent = `Product With ID ${id} has Been Removed`
    }
    document.body.appendChild(toastDiv)

    setTimeout(() => {
        toastDiv.remove()
    }, 1500)
}
