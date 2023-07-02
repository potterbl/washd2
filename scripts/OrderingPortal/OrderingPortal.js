const activeLang = document.querySelector('.active__lang')
const flagNor = document.querySelector('#flagNor')
const flagEn = document.querySelector('#flagEn')

if(localStorage.getItem('language') === 'nor'){
    activeLang.style = 'transform: translateX(0)'
} else if (localStorage.getItem('language') === 'en') {
    activeLang.style = 'transform: translateX(60px)'
}
flagNor.addEventListener('click', () => {
    activeLang.style = 'transform: translateX(0)'
    localStorage.setItem('language', 'nor')
})
flagEn.addEventListener('click', () => {
    activeLang.style = 'transform: translateX(60px)'
    localStorage.setItem('language', 'en')
})

const usersQuery = JSON.parse(localStorage.getItem('users'))

let emailUsername = ''
let password = ''
const emailUsernameInput = document.querySelector('#emailUsernameInput')
const passwordInput = document.querySelector('#passwordInput')
const logInButton = document.querySelector('#logInButton')

emailUsernameInput.addEventListener('keyup', () => {
    emailUsername = emailUsernameInput.value
})
passwordInput.addEventListener('keyup', () => {
    password = passwordInput.value
})

logInButton.addEventListener('click', () => {
    const usersQuery = JSON.parse(localStorage.getItem('users'))
    usersQuery.forEach(user => {
        if(user.login === emailUsername){
            if(user.password === password){
                localStorage.setItem('user', JSON.stringify(user))
                window.location.href = './pages/OrderingPortal/OrderingPortal.html'
            }
        }
    })
})