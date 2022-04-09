function hideAndShow(data) {
    console.log('clicked');
    let showElement = document.getElementById('indiaHomeSection')
    let hideElement = document.getElementById('otherHomeSection')
    if (data === 'India') {
        hideElement.style.display = 'none'
        showElement.style.display = 'block'
    } else {
        showElement.style.display = 'none'
        hideElement.style.display = 'block'
    }
}