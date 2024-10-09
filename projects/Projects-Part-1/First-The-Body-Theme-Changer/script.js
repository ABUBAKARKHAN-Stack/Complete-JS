const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
const text = document.querySelector('.nav')
const colorName = document.querySelector('.colorName')
body.style.backgroundColor = '#212121'
body.style.transition = '1s ease-in-out, background-color 1.5s ease-in-out';
button.forEach(
    (btns) => {
        btns.addEventListener('click', (e) => {
            console.log(e);
            console.log(e.target);


            switch (e.target.id) {
                case 'grey':
                    body.style.backgroundColor = 'grey'
                    text.style.color = 'white'
                    colorName.innerHTML = 'grey'
                    colorName.style.textAlign = 'center'
                    colorName.style.fontSize = '40px'
                    colorName.style.marginTop = '30px'
                    colorName.style.textAlign = 'center'
                    colorName.style.textTransform = 'uppercase'
                    colorName.style.color = 'white'
                    colorName.style.fontWeight = '900'
                    colorName.style.fontStyle = 'italic'
                    colorName.style.padding = '30px'
                    colorName.style.backgroundColor = '#e25555'
                    colorName.style.transition = 'background ease-in 2s';
                    break;
                case 'purple':
                    body.style.backgroundColor = 'purple'
                    text.style.color = 'black'
                    colorName.innerHTML = 'purple'
                    colorName.style.color = 'black'
                    colorName.style.fontSize = '40px'
                    colorName.style.marginTop = '30px'
                    colorName.style.textAlign = 'center'
                    colorName.style.textTransform = 'uppercase'
                    colorName.style.fontWeight = '900'
                    colorName.style.fontStyle = 'italic'
                    colorName.style.padding = '30px'
                    colorName.style.backgroundColor = '#e25555'
                    colorName.style.transition = 'background ease-in 2s';

                    break;
                case 'yellow':
                    body.style.backgroundColor = 'yellow'
                    text.style.color = '#212121'
                    colorName.innerHTML = 'yellow'
                    colorName.style.color = '#212121'
                    colorName.style.fontSize = '40px'
                    colorName.style.marginTop = '30px'
                    colorName.style.textAlign = 'center'
                    colorName.style.textTransform = 'uppercase'
                    colorName.style.fontWeight = '900'
                    colorName.style.fontStyle = 'italic'
                    colorName.style.padding = '30px'
                    colorName.style.backgroundColor = '#e25555'
                    colorName.style.transition = 'background ease-in 2s';
                    break;
                case 'green':
                    body.style.backgroundColor = 'green'
                    text.style.color = 'rgb(194, 235, 235)'
                    colorName.innerHTML = 'green'
                    colorName.style.color = 'rgb(194, 235, 235)'
                    colorName.style.fontSize = '40px'
                    colorName.style.marginTop = '30px'
                    colorName.style.textAlign = 'center'
                    colorName.style.textTransform = 'uppercase'
                    colorName.style.fontWeight = '900'
                    colorName.style.fontStyle = 'italic'
                    colorName.style.padding = '30px'
                    colorName.style.backgroundColor = '#e25555'
                    colorName.style.transition = 'background ease-in 2s';


                    break;
                default:
                    body.style.backgroundColor = '#212121'
                    break;
            }
        })


    }
)



