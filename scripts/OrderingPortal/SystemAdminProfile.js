const notificationButton = document.querySelector('.notifications')
const notifications = document.querySelector('.notification__off')
notificationButton.addEventListener('click', () => {
    notifications.classList.toggle('notifications__on')
    if(notifications.classList.contains('notifications__on')){
        localStorage.setItem('notifications', 'on')
    } else {
        localStorage.setItem('notifications', 'off')
    }
})

if(localStorage.getItem('notifications')){
    if(localStorage.getItem('notifications') === 'on'){
        notifications.classList.add('notifications__on')
    }
}

checkUser()
function checkUser() {
    if(localStorage.getItem('user')){
        return
    } else {
        window.location.href = '../../OrderingPortal.html'
    }
}

const userRequest = JSON.parse(localStorage.getItem('user'))

let nameProfile = ''
let photoUpload = userRequest.profilePic
let oldPass = ''
let newPass = ''
let confirmPass = ''
let oldPin = ''
let newPin = ''
let confirmPin = ''

const nameProfileInput = document.querySelector('#nameProfile')
nameProfileInput.addEventListener('keyup', () => {nameProfile = nameProfileInput.value})
const photoUploadInput = document.querySelector('#photo-upload')
photoUploadInput.addEventListener('change', () => {
    const file = photoUploadInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        photoUpload = reader.result;
        updateImage();
    }

    reader.readAsDataURL(file);
})
const oldPassInput = document.querySelector('#oldPass')
oldPassInput.addEventListener('keyup', () => {oldPass = oldPassInput.value})
const newPassInput = document.querySelector('#newPass')
newPassInput.addEventListener('keyup', () => {newPass = newPassInput.value})
const confirmPassInput = document.querySelector('#confirmPass')
confirmPassInput.addEventListener('keyup', () => {confirmPass = confirmPassInput.value})
const oldPinInput = document.querySelector('#oldPin')
oldPinInput.addEventListener('keyup', () => {oldPin = oldPinInput.value})
const newPinInput = document.querySelector('#newPin')
newPinInput.addEventListener('keyup', () => {newPin = newPinInput.value})
const confirmPinInput = document.querySelector('#confirmPin')
confirmPinInput.addEventListener('keyup', () => {confirmPin = confirmPinInput.value})



const saveProfile = document.querySelector('#saveProfile')
const savePass = document.querySelector('#savePass')
const savePin = document.querySelector('#savePin')

saveProfile.addEventListener('click', () => {
    let nameHolder = nameProfile.split(' ')
    let nameCount = Math.ceil(nameHolder.length / 2)
    let state = []
    for (let i = 0; i < nameCount; i++) {
        state.push(nameHolder[i])
    }
    userRequest.firstName = state.join(" ")
    state = []
    if (nameCount === nameHolder.length) {
        userRequest.lastName = ''
    } else {
        for (let i = nameCount; i < nameHolder.length; i++) {
            state.push(nameHolder[i])
        }
        userRequest.lastName = state.join(" ")
    }
    userRequest.profilePic = photoUpload
    localStorage.setItem('user', JSON.stringify(userRequest))
    const profileName = document.querySelector('.profile__textarea h3')
    profileName.innerText = `${userRequest.firstName} ${userRequest.lastName}`
})

const profileName = document.querySelector('.profile__textarea h3')
profileName.innerText = `${userRequest.firstName} ${userRequest.lastName}`

savePass.addEventListener('click', () => {
    if(oldPass == userRequest.password && newPass == confirmPass && newPass !== ''){
        userRequest.password = newPass
        localStorage.setItem('user', JSON.stringify(userRequest))
        oldPassInput.value = ''
        newPassInput.value = ''
        confirmPassInput.value = ''
    }
})
savePin.addEventListener('click', () => {
    if(oldPin == userRequest.pin && newPin == confirmPin && newPin !== ''){
        userRequest.pin = newPin
        localStorage.setItem('user', JSON.stringify(userRequest))
        oldPinInput.value = ''
        newPinInput.value = ''
        confirmPinInput.value = ''
    }
})

const profileImage = document.querySelector('#profileImage')
const profileImg = document.querySelector('.img__profile')
updateImage()
function updateImage(){
    profileImage.src = ``
    profileImage.style = `background-image: url('${photoUpload}'); background-size: cover; background-position: center;`
    profileImg.style.backgroundImage = `url(${photoUpload})`;
    profileImg.style.backgroundPosition = 'center';
    profileImg.style.backgroundSize = 'cover';
}

const languageButton = document.querySelector('.language')
const selectLanguage = document.querySelector('.language__select')
const flagEn = document.querySelector('#flagEn')
const flagNor = document.querySelector('#flagNor')
const selectEn = document.querySelector('#langEn')
const selectNor = document.querySelector('#langNor')
languageButton.addEventListener('click', (e) => {
    if(e.target === languageButton || e.target === flagEn || e.target === flagNor){
        selectLanguage.classList.toggle('select__shown')
        selectEn.addEventListener('click', () => {
            selectEn.classList.add('active__language')
            selectNor.classList.remove('active__language')
            localStorage.setItem('language', 'en')
            selectLanguage.classList.add('profile__lang')
            updateLang()
        })
        selectNor.addEventListener('click', () => {
            selectEn.classList.remove('active__language')
            selectNor.classList.add('active__language')
            localStorage.setItem('language', 'nor')
            selectLanguage.classList.add('profile__lang')
            updateLang()
        })
    }
})
updateLang()
function updateLang() {
    const languageQuery = localStorage.getItem('language')
    if(languageQuery === 'en'){
        flagEn.style.display = ''
        flagNor.style.display = 'none'
        selectEn.classList.add('active__language')
        selectNor.classList.remove('active__language')
    } else if(languageQuery === 'nor'){
        flagEn.style.display = 'none'
        flagNor.style.display = ''
        selectEn.classList.remove('active__language')
        selectNor.classList.add('active__language')
    }
}