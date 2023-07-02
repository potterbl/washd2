const menuButton1 = document.querySelector('#button-1')
const menuButton2 = document.querySelector('#button-2')
const menuButton3 = document.querySelector('#button-3')
const menuButton4 = document.querySelector('#button-4')
const menuButton5 = document.querySelector('#button-5')
const menuButton6 = document.querySelector('#button-6')
const menuButton7 = document.querySelector('#button-7')
const menuButton8 = document.querySelector('#button-8')
const menuButton9 = document.querySelector('#button-9')
const leaveButton = document.querySelector('#leaveAccount')

checkAcc()
function checkAcc() {
    if(localStorage.getItem('user')){
        return
    } else {
        window.location.href = '../../SystemAdmin.html'
    }
}


leaveButton.addEventListener('click', () => {
    localStorage.removeItem('user')
    checkAcc()
})

const activeButton = document.querySelector('.active__button')

function firstSect() {
    activeButton.style = 'transform: translateY(0)'
    window.location.href = './dashboard.html'
}
function secondSect() {
    activeButton.style = 'transform: translateY(64px)'
    window.location.href = './Employees.html'
}
function thirdSect() {
    activeButton.style = 'transform: translateY(128px)'
    window.location.href = './customers.html'
}
function fourthSect() {
    activeButton.style = 'transform: translateY(192px)'
    window.location.href = './textiles.html'
}
function fifthSect() {
    activeButton.style = 'transform: translateY(256px)'
    window.location.href = './printer.html'
}
function sixthSect() {
    activeButton.style = 'transform: translateY(320px)'
    window.location.href = './log.html'
}
function seventhSect() {
    activeButton.style = 'transform: translateY(384px)'
    window.location.href = './systemLog.html'
}
function atethSect() {
    activeButton.style = 'transform: translateY(448px)'
}
function ninthSect() {
    activeButton.style = 'transform: translateY(512px)'
    window.location.href = './modules.html'
}


menuButton1.addEventListener('click', firstSect)
menuButton2.addEventListener('click', secondSect)
menuButton3.addEventListener('click', thirdSect)
menuButton4.addEventListener('click', fourthSect)
menuButton5.addEventListener('click', fifthSect)
menuButton6.addEventListener('click', sixthSect)
menuButton7.addEventListener('click', seventhSect)
menuButton8.addEventListener('click', atethSect)
menuButton9.addEventListener('click', ninthSect)

const tooltipHome = document.querySelector('#tooltipHome')
const tooltipSystemAdmin = document.querySelector('#tooltipSystemAdmin')
const tooltipCustomerAdmin = document.querySelector('#tooltipCustomerAdmin')
const tooltipTextileAdmin = document.querySelector('#tooltipTextileAdmin')
const tooltipPrintAdmin = document.querySelector('#tooltipPrintAdmin')
const tooltipTextileLog = document.querySelector('#tooltipTextileLog')
const tooltipSystemLog = document.querySelector('#tooltipSystemLog')
const tooltipStatistic = document.querySelector('#tooltipStatistic')
const tooltipModules = document.querySelector('#tooltipModules')
const tooltipLeave = document.querySelector('#tooltipLeave')

leaveButton.addEventListener('mouseenter', () => {
    tooltipLeave.classList.add('tooltip__active')
})
leaveButton.addEventListener('mouseleave', () => {
    tooltipLeave.classList.remove('tooltip__active')
})
menuButton1.addEventListener('mouseenter', () => {
    tooltipHome.classList.add('tooltip__active')
})
menuButton1.addEventListener('mouseleave', () => {
    tooltipHome.classList.remove('tooltip__active')
})
menuButton2.addEventListener('mouseenter', () => {
    tooltipSystemAdmin.classList.add('tooltip__active')
})
menuButton2.addEventListener('mouseleave', () => {
    tooltipSystemAdmin.classList.remove('tooltip__active')
})
menuButton3.addEventListener('mouseenter', () => {
    tooltipCustomerAdmin.classList.add('tooltip__active')
})
menuButton3.addEventListener('mouseleave', () => {
    tooltipCustomerAdmin.classList.remove('tooltip__active')
})
menuButton4.addEventListener('mouseenter', () => {
    tooltipTextileAdmin.classList.add('tooltip__active')
})
menuButton4.addEventListener('mouseleave', () => {
    tooltipTextileAdmin.classList.remove('tooltip__active')
})
menuButton5.addEventListener('mouseenter', () => {
    tooltipPrintAdmin.classList.add('tooltip__active')
})
menuButton5.addEventListener('mouseleave', () => {
    tooltipPrintAdmin.classList.remove('tooltip__active')
})
menuButton6.addEventListener('mouseenter', () => {
    tooltipTextileLog.classList.add('tooltip__active')
})
menuButton6.addEventListener('mouseleave', () => {
    tooltipTextileLog.classList.remove('tooltip__active')
})
menuButton7.addEventListener('mouseenter', () => {
    tooltipSystemLog.classList.add('tooltip__active')
})
menuButton7.addEventListener('mouseleave', () => {
    tooltipSystemLog.classList.remove('tooltip__active')
})
menuButton8.addEventListener('mouseenter', () => {
    tooltipStatistic.classList.add('tooltip__active')
})
menuButton8.addEventListener('mouseleave', () => {
    tooltipStatistic.classList.remove('tooltip__active')
})
menuButton9.addEventListener('mouseenter', () => {
    tooltipModules.classList.add('tooltip__active')
})
menuButton9.addEventListener('mouseleave', () => {
    tooltipModules.classList.remove('tooltip__active')
})