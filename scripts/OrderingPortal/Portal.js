const leaveButton = document.querySelector("#leaveAccount")
const signOut = document.querySelector('.tooltip__wrapper')
leaveButton.addEventListener('mouseenter', () => {
    signOut.classList.add('tooltip__active')
})
leaveButton.addEventListener('mouseleave', () => {
    signOut.classList.remove('tooltip__active')
})
leaveButton.addEventListener('click', () => {
    localStorage.removeItem('user')
    checkUser()
})
checkUser()
function checkUser() {
    if(localStorage.getItem('user')){
        return
    } else {
        window.location.href = '../../OrderingPortal.html'
    }
}

const notificationButton = document.querySelector('.notification__button')
const notifications = document.querySelector('.notifications')
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

const profile = document.querySelector('.profile')
profile.addEventListener('click', () => {
    window.location.href = './profile.html'
})
const userRequest = JSON.parse(localStorage.getItem('user'))
const profileName = document.querySelector('.profile .textarea h3')
profileName.innerText = `${userRequest.firstName} ${userRequest.lastName}`

const profileImage = document.querySelector('.profile__image .img')
profileImage.style = `background: url(${userRequest.profilePic}); background-size: cover; background-position: center;`


const dialog = document.querySelector('.dialog')
const dialogContent = document.querySelector('.dialog__content')
const buttonAdd = document.querySelector('#buttonAdd')

showWelcome()
function showWelcome() {
    dialog.style.display = 'flex'
    dialogContent.innerHTML =
        `
            <div class="welcome">
                <h1>Welcome to <br> Laundry ordering portal</h1>
                <p>On this Washd admin panel, you can easily create your first laundry service order. Let's see how it works!</p>
                <button id="createOrder">Create Order</button>
            </div>
        `
    const createOrderWelcome = document.querySelector('#createOrder')
    createOrderWelcome.addEventListener('click', () => {
        createOrder()
    })
    dialog.addEventListener('click', (e) => {
        if(e.target === dialog){
            dialog.style = ''
        }
    })
}
function createOrder() {
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target === closeDialog) {
            dialog.style = ''
        }
    })
    let addresses = []
    const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
    ordersPageQuery.forEach(listItem => {
        listItem.deliveryAddresses.forEach(address => {
            addresses.push(address)
        })
    })
    dialog.style.display = 'flex'
    dialogContent.innerHTML =
        `
        <div class="create__order">
                <div class="create__order__header">
                    <h3>Create Order</h3>
                    <img src="../../src/OrderingPortal/X.png" alt="" id="closeDialog">
                </div>
                <div class="orders__form">
                    <div class="item__wrapper">
                        <div class="item">
                            <input type="text">
                            <p>Item</p>
                        </div>
                        <div class="amount">
                            <input type="text">
                            <p>Amount</p>
                        </div>
                    </div>
                </div>
                    <div class="add__item">
                        <img src="../../src/OrderingPortal/PlusOrder.png" alt="">
                        <span>Add Item</span>
                    </div>
                <div class="order__additional">
                    <div class="input__wrapper">
                        <input type="text" id="reference">
                        <p>Order reference</p>
                    </div>
                    <div class="select__wrapper">
                        <div class="select">
                            <div class="selected">
                                
                            </div>
                            <div class="options__wrapper">
                                
                            </div>
                        </div>
                        <p>Delivery address</p>
                    </div>
                </div>
                <button id="createOrder">Create</button>
            </div>
        `
    const closeDialog = document.querySelector('#closeDialog')
    const optionsContent = document.querySelector('.options__wrapper')
    optionsContent.innerHTML = ''
    addresses.map(address => {
        optionsContent.innerHTML +=
            `
            <div class="option"><p>Department ${address.department}. <span>${address.street} ${address.street} ${address.city}, ${address.zip}. ${address.contactPerson} ${address.contactPhone}</span></p></div>       
            `
    })
    optionsContent.innerHTML +=
        `
        <div class="option" id="addDeliveryAddress"><img src="../../src/OrderingPortal/PlusOrder.png" alt="">Add Delivery Address</div>
        `
    const addDeliveryAddress = document.querySelector('#addDeliveryAddress')
    addDeliveryAddress.addEventListener('click', () => {
        addAddress()
    })

    const select = document.querySelector('.select')
    const selected = document.querySelector('.selected')
    const optionsWrapper = document.querySelector('.options__wrapper')
    select.addEventListener('click', (e) => {
        if (e.target === select || e.target === selected || selected.contains(e.target)) {
            optionsWrapper.classList.toggle('options__show')
        }
    })
    let address = ''
    const options = document.querySelectorAll('.option')
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML
            optionsWrapper.classList.remove('options__show')
            address = option.innerText
        })
    })
    let ordersForm = document.querySelector('.orders__form')
    ordersForm.innerHTML = ''
    let ordersCount = 0
    fillForm()

    function fillForm() {
        if (ordersCount !== 0 && ordersCount === 1) {
            ordersForm.innerHTML =
                `
                    <div class="item__wrapper">
                        <div class="item">
                            <input type="text">
                            <p>Item</p>
                        </div>
                        <div class="amount">
                            <input type="text">
                            <p>Amount</p>
                        </div>
                    </div>
                `
        } else if (ordersCount > 1) {
            ordersForm.classList.add('orders__form__grid')
            ordersForm.innerHTML = ''
            for (let i = 0; i < ordersCount; i++) {
                ordersForm.innerHTML +=
                    `
                    <div class="item__wrapper">
                        <div class="item">
                            <input type="text">
                            <p>Item</p>
                        </div>
                        <div class="amount">
                            <input type="text">
                            <p>Amount</p>
                        </div>
                    </div>
                    `
            }
        }
    }

    const addItem = document.querySelector('.add__item')
    addItem.addEventListener('click', () => {
        ordersCount += 1
        fillForm()
    })
    const ordersPageRequest = JSON.parse(localStorage.getItem('ordersPage'))
    function generateRfid() {
        // генерируем 12 случайных байтов
        const bytes = new Uint8Array(12);
        window.crypto.getRandomValues(bytes);

        // конвертируем байты в шестнадцатеричный формат
        const hex = Array.from(bytes, byte => ('0' + byte.toString(16)).slice(-2)).join('');

        // возвращаем идентификатор RFID-тега
        return hex.toUpperCase();
    }
    let lastOrder = 0
    let items = []
    let amounts = []
    let reference = ''
    const createOrderButton = document.querySelector('#createOrder')
    createOrderButton.addEventListener('click', () => {
        const itemsAll = document.querySelectorAll('.item input')
        const amountsAll = document.querySelectorAll('.amount input')
        const referenceInput = document.querySelector('#reference')
        const userQuery = JSON.parse(localStorage.getItem('user'))
        for (let i = 0; i < ordersCount; i++) {
            let state = []
            let id = state.length
            ordersPageRequest.forEach(listItem => {
                listItem.orders.forEach(order => {
                    state.push(order)
                    if(order.id === id){
                        id+=1
                    }
                })
            })
            lastOrder = id
            items.push(itemsAll[i].value)
            amounts.push(amountsAll[i].value)
        }
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        const currentDate = `${day}/${month}/${year}`;
        const newOrder = {
            id: lastOrder,
            orderNumber: lastOrder,
            date: currentDate,
            admin: `${userQuery.firstName} ${userQuery.lastName}`,
            status: '-',
            item: items,
            amount: amounts,
            client: '-',
            orderReference: referenceInput.value,
            rfid: generateRfid(),
            color: '-',
            temp: '-',
            weight: '-',
            lastSeen: currentDate,
            washes: '-',
            department: address,
            speciality: '-',
            size: '-',
        }
        ordersPageRequest.forEach(listItem => {
            listItem.orders.push(newOrder)
        })
        localStorage.setItem('ordersPage', JSON.stringify(ordersPageRequest))
        console.log(ordersPageRequest)
        dialog.style.display = 'flex'
        dialogContent.innerHTML =
            `
            <div class="order__success">
                <h3>Order <span>${lastOrder}</span><br>was successfully created</h3>
                <button id="done">Done</button>
            </div>
            `
        const doneButton = document.querySelector('#done')
        doneButton.addEventListener('click', () => {
            dialog.style = ''
            dialogContent.innerHTML = ''
            ordersListPage()
        })
        ordersListPage()
    })
}
// addAddress()
function addAddress() {
    dialog.addEventListener('click', (e) => {
        if(e.target === dialog || e.target === closeDialog){
            dialog.style = ''
        }
    })
    let addresses = []
    const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
    ordersPageQuery.forEach(listItem => {
        listItem.deliveryAddresses.forEach(address => {
            addresses.push(address)
        })
    })
    dialog.style.display = 'flex'
    dialogContent.innerHTML =
        `
            <div class="add__address">
                <div class="address__header">
                    <h3>Add Delivery Address</h3>
                    <img src="../../src/OrderingPortal/X.png" alt="" id="closeDialog">
                </div>
                <div class="input__wrapper">
                    <input type="text" id="department">
                    <p>Department</p>
                </div>
                <div class="input__wrapper">
                    <input type="text" id="sAddress">
                    <p>Street address</p>
                </div>
                <div class="form__address">
                    <div class="input__wrapper">
                        <input type="text" id="bNumber">
                        <p>Building number</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="zip">
                        <p>ZIP code</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="city">
                        <p>City</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="country">
                        <p>Country</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="cPerson">
                        <p>Contact person</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="cPhone">
                        <p>Contact phone</p>
                    </div>
                </div>
                <button id="saveAddress">Save</button>
            </div>
        `
    const closeDialog = document.querySelector('#closeDialog')
    let department = ''
    let streetAddress = ''
    let buildingNumber = ''
    let zip = ''
    let city = ''
    let country = ''
    let contactPerson = ''
    let contactPhone = ''
    const departmentInput = document.querySelector('#department')
    const streetAddressInput = document.querySelector('#sAddress')
    const buildingNumberInput = document.querySelector('#bNumber')
    const zipInput = document.querySelector('#zip')
    const cityInput = document.querySelector('#city')
    const countryInput = document.querySelector('#country')
    const contactPersonInput = document.querySelector('#cPerson')
    const contactPhoneInput = document.querySelector('#cPhone')
    departmentInput.addEventListener('input', () => {department = departmentInput.value})
    streetAddressInput.addEventListener('input', () => {streetAddress = streetAddressInput.value})
    buildingNumberInput.addEventListener('input', () => {buildingNumber = buildingNumberInput.value})
    zipInput.addEventListener('input', () => {zip = zipInput.value})
    cityInput.addEventListener('input', () => {city = cityInput.value})
    countryInput.addEventListener('input', () => {country = countryInput.value})
    contactPersonInput.addEventListener('input', () => {contactPerson = contactPersonInput.value})
    contactPhoneInput.addEventListener('input', () => {contactPhone = contactPhoneInput.value})

    const saveAddress = document.querySelector('#saveAddress')
    saveAddress.addEventListener('click', () => {
        let id = addresses.length
        addresses.forEach(address => {
            if(address.id === id){
                id++
            }
        })
        const newAddress = {
            id: id,
            department: department,
            street: streetAddress,
            bdNumber: buildingNumber,
            zip: zip,
            city: city,
            country: country,
            contactPerson: contactPerson,
            contactPhone: contactPhone,
        }
        ordersPageQuery.forEach(listItem => {
            listItem.deliveryAddresses.push(newAddress)
        })
        localStorage.setItem('ordersPage', JSON.stringify(ordersPageQuery))
        addressesListPage()
        dialog.style = ''
        dialogContent.innerHTML = ''
    })
}

const languageButton = document.querySelector('.language__button')
const selectLanguage = document.querySelector('.select__language')
const flagEn = document.querySelector('#flagEn')
const flagNor = document.querySelector('#flagNor')
const selectEn = document.querySelector('#selectEn')
const selectNor = document.querySelector('#selectNor')
languageButton.addEventListener('click', (e) => {
    if(e.target === languageButton || e.target === flagEn || e.target === flagNor){
        selectLanguage.classList.toggle('select__shown')
        selectEn.addEventListener('click', () => {
            selectEn.classList.add('active__language')
            selectNor.classList.remove('active__language')
            localStorage.setItem('language', 'en')
            selectLanguage.classList.remove('select__shown')
            updateLang()
        })
        selectNor.addEventListener('click', () => {
            selectEn.classList.remove('active__language')
            selectNor.classList.add('active__language')
            localStorage.setItem('language', 'nor')
            selectLanguage.classList.remove('select__shown')
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

const calendarButton = document.querySelector('.button__wrapper__calendar')
const calendarMonths = document.querySelector('.calendar__months')
const jan = document.querySelector('#January')
jan.addEventListener('click', () => {
    jan.classList.add('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(0)
})
const feb = document.querySelector('#February')
feb.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.add('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(1)
})
const mar = document.querySelector('#March')
mar.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.add('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(2)
})
const apr = document.querySelector('#April')
apr.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.add('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(3)
})
const may = document.querySelector('#May')
may.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.add('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(4)
})
const jun = document.querySelector('#June')
jun.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.add('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(5)
})
const jul = document.querySelector('#July')
jul.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.add('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(6)
})
const aug = document.querySelector('#August')
aug.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.add('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(7)
})
const sep = document.querySelector('#September')
sep.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.add('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(8)
})
const oct = document.querySelector('#October')
oct.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.add('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(9)
})
const nov = document.querySelector('#November')
nov.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.add('active__card')
    dec.classList.remove('active__card')
    updateCalendar(10)
})
const dec = document.querySelector('#December')
dec.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.add('active__card')
    updateCalendar(11)
})
calendarButton.addEventListener('click', (e) => {
    if(e.target !== calendarMonths){
        calendarMonths.classList.toggle('calendar__month__shown')
    }
})

updateCalendar(new Date().getMonth())
function updateCalendar(monthQuery) {
    let month = monthQuery;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const buttonCalendar = document.querySelector('.button__wrapper__calendar button')
    const abbreviatedMonthName = monthNames[month];
    buttonCalendar.textContent = abbreviatedMonthName;

    const daysInMonth = new Date(2023, month + 1, 0).getDate();


    const calendarBody = document.querySelector('.body__wrapper')
    calendarBody.innerHTML = ''
    for (let i = 0; i < 35; i++) {
        if (i < daysInMonth) {
            const dayOfWeek = new Date(2023, month, i + 1).getDay();
            calendarBody.innerHTML +=
                `
                <div class="card">
                    <p>${daysOfWeek[dayOfWeek]}</p>
                    <p>${i + 1}</p>
                </div>
                `
        } else {
            calendarBody.innerHTML +=
                `
                <div class="card">
                </div>
                `
        }
    }
    let weekPage = 0
    const currentDay = new Date().getDate();
    if(new Date().getMonth() === month){
        if(currentDay <= 7){
            weekPage = 0
        } else if(currentDay > 7 && currentDay <=14){
            weekPage = 1
        } else if(currentDay > 14 && currentDay <= 21){
            weekPage = 2
        } else if(currentDay > 21 && currentDay <= 28){
            weekPage = 3
        } else if(currentDay > 28 && currentDay <= 31){
            weekPage = 4
        }
    }

    if(new Date().getMonth() === month){
        const cards = document.querySelectorAll('.card')
        for(let i = 0; i < cards.length; i++){
            if(i + 1 == currentDay){
                cards[i].classList.add('current__day')
            }
        }
    } else {
        const cards = document.querySelectorAll('.card')
    }

    moveCalendar()
    function moveCalendar() {
        if(weekPage === 0){
            calendarBody.style.transform = 'translateX(0)'
        } else if(weekPage === 1) {
            calendarBody.style.transform = 'translateX(calc(-20% - 2px))'
        } else if(weekPage === 2) {
            calendarBody.style.transform = 'translateX(calc(-40% - 4px))'
        } else if(weekPage === 3) {
            calendarBody.style.transform = 'translateX(calc(-60% - 6px))'
        } else if(weekPage === 4) {
            calendarBody.style.transform = 'translateX(calc(-80% - 8px))'
        }
    }
    const buttonNext = document.querySelector('#nextWeek')
    const buttonPrev = document.querySelector('#prevWeek')
    buttonNext.addEventListener('click', () => {
        if(weekPage < 4){
            weekPage += 1
        }
        moveCalendar()
    })
    buttonPrev.addEventListener('click', () => {
        if(weekPage > 0){
            weekPage -= 1
        }
        moveCalendar()
    })
}

const ordersButton = document.querySelector('#ordersButton')
const adressButton = document.querySelector('#adressButton')
ordersButton.addEventListener('click', () => {
    ordersListPage()
})
adressButton.addEventListener('click', () => {
    addressesListPage()
})

ordersListPage()
function ordersListPage() {
    buttonAdd.innerText = 'Add Order'
    buttonAdd.addEventListener('click', () => {
        createOrder()
    })
    const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
    const table = document.querySelector('.table')
    let state = []
    ordersPageQuery.forEach(listItem => {
        listItem.orders.forEach(order => {
            state.push(order)
        })
    })
    if(state.length){
        table.style.display = ''
    } else {
        table.style.display = 'none'
    }

    let pagesCount = Math.ceil(state.length / 7)
    let currentPage = 1

    const buttonsPages = document.querySelector('.buttons__pages')
    buttonsPages.innerHTML = ''
    for(let i = 0; i < pagesCount; i++){
        buttonsPages.innerHTML +=
            `
            <div class="button">
                ${i + 1}
            </div>
            `
    }
    updateButtons()
    function updateButtons() {
        const buttonsPage = document.querySelectorAll('.buttons__pages .button')
        buttonsPage.forEach(button => {
            button.classList.remove('current__page')
            if(button.innerText == currentPage){
                button.classList.add('current__page')
            }
            button.addEventListener('click', () => {
                currentPage = parseInt(button.innerText)
                updateButtons()
                updateList()
            })
        })
    }

    const prevPageButton = document.querySelector('#prevPage')
    const nextPageButton = document.querySelector('#nextPage')
    prevPageButton.addEventListener('click', () => {
        if(currentPage > 1){
            currentPage-=1
        }
        updateButtons()
        updateList()
    })
    nextPageButton.addEventListener('click', () => {
        if(currentPage < pagesCount){
            currentPage+=1
        }
        updateButtons()
        updateList()
    })

    ordersButton.classList.add('active__page')
    adressButton.classList.remove('active__page')
    const tableContent = document.querySelector('.table__content')

    updateList()
    function updateList() {
        tableContent.innerHTML =
        `
        <div class="row__header">
            <div class="order__number">
                <p>Order Number</p>
            </div>
            <div class="order__date">
                <p>Date</p>
            </div>
            <div class="order__admin">
                <p>Admin</p>
            </div>
            <div class="order__status">
                <p>Status</p>
            </div>
            <div class="order__details">
                <p>Details</p>
            </div>
        </div>
        `
        for (let i = 0; i < state.length; i++) {
            if (i >= (currentPage - 1) * 7 && i < currentPage * 7) {
                tableContent.innerHTML +=
                    `
                <div class="row__content">
                    <div class="order__number">
                        <p>${state[i].id}</p>
                    </div>
                    <div class="order__date">
                        <p>${state[i].date}</p>
                    </div>
                    <div class="order__admin">
                        <p>${state[i].admin}</p>
                    </div>
                    <div class="order__status">
                        <p>${state[i].status}</p>
                    </div>
                    <div class="order__details">
                        <img src="../../src/OrderingPortal/Details.png" alt="" id="${state[i].id}">
                    </div>
                </div>
                `
            }
        }
        const detailsButtons = document.querySelectorAll('.order__details img')
        detailsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                dialog.style.display = 'flex'
                dialog.addEventListener('click', (e) => {
                    if(e.target === dialog || e.target === closeDialog){
                        dialog.style = ''
                        dialogContent.innerHTML = ''
                    }
                })
                let items = []
                let amounts = []
                const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
                let state = []
                ordersPageQuery.forEach(listItem => {
                    listItem.orders.forEach(order => {
                        state.push(order)
                    })
                })
                const id = e.target.id
                const index = state.findIndex(order => order.id == id)

                console.log(state)
                console.log(state[index])
                console.log(state[index].item)
                if (typeof state[index].item === "string") {
                    items.push(state[index].item)
                    amounts.push(state[index].amount)
                    fillStroke()
                } else {
                    state[index].item.forEach((item, i) => {
                        items.push(item)
                        amounts.push(state[index].amount[i])
                    })
                    fillArray()
                }
                function fillStroke() {
                    console.log(state[index].deliveryAddress)
                    dialogContent.innerHTML =
                        `
                    <div class="details__order">
                        <div class="details__header">
                            <h3>Order ${state[index].id}</h3>
                            <img src="../../src/OrderingPortal/X.png" alt="" id="closeDialog">
                        </div>
                        <div class="info">
                            <div class="info__content">
                                <p class="sub">Date</p>
                                <p>${state[index].date}</p>
                            </div>
                            <div class="info__content">
                                <p class="sub">Admin</p>
                                <p>${state[index].admin}</p>
                            </div>
                        </div>
                                <div class="info__col">
                                    <div class="info__items">
                                        <p class="sub">
                                        Item
                                        </p>
                                        <p>
                                        ${state[index].item}
                                        </p>
                                    </div>
                                    <div class="info__amounts">
                                        <p class="sub">
                                        Amount
                                        </p>
                                        <p>
                                        ${state[index].amount}
                                        </p>
                                    </div>
                                </div>
                        <div class="section__wrapper">
                            <p class="title">Order reference</p>
                            <p class="text">${state[index].orderReference}</p>
                        </div>
                        <div class="section__wrapper">
                            <p class="title">Delivery address</p>
                            <p class="text">${state[index].department}</p>
                        </div>
                        <button id="closeButton">Close</button>
                    </div>
                    `
                    const closeButton = document.querySelector('#closeButton')
                    closeButton.addEventListener('click', () => {
                        dialog.style = ''
                        dialogContent.innerHTML = ''
                    })
                }
                function fillArray() {
                    console.log(state[index].deliveryAddress)
                    dialogContent.innerHTML =
                        `
                    <div class="details__order">
                        <div class="details__header">
                            <h3>Order ${state[index].id}</h3>
                            <img src="../../src/OrderingPortal/X.png" alt="" id="closeDialog">
                        </div>
                        <div class="info">
                            <div class="info__content">
                                <p class="sub">Date</p>
                                <p>${state[index].date}</p>
                            </div>
                            <div class="info__content">
                                <p class="sub">Admin</p>
                                <p>${state[index].admin}</p>
                            </div>
                        </div>
                        <div class="info">
                            ${state[index].amount.map((item, i) => {
                            return `
                                <div class="info__column">
                                    <div class="info__items">
                                        <p class="sub">
                                        Item
                                        </p>
                                        <p>
                                        ${state[index].item[i]}
                                        </p>
                                    </div>
                                    <div class="info__amounts">
                                        <p class="sub">
                                        Amount
                                        </p>
                                        <p>
                                        ${state[index].amount[i]}
                                        </p>
                                    </div>
                                </div>
                                `
                        }).join('')}
                        </div>
                        <div class="section__wrapper">
                            <p class="title">Order reference</p>
                            <p class="text">${state[index].orderReference}</p>
                        </div>
                        <div class="section__wrapper">
                            <p class="title">Delivery address</p>
                            <p class="text">${state[index].department}</p>
                        </div>
                        <button id="closeButton">Close</button>
                    </div>
                    `
                    const closeButton = document.querySelector('#closeButton')
                    closeButton.addEventListener('click', () => {
                        dialog.style = ''
                        dialogContent.innerHTML = ''
                    })
                }
            })
        })
    }
}

function addressesListPage() {
    buttonAdd.innerText = 'Add Address'
    buttonAdd.addEventListener('click', () => {
        addAddress()
    })
    const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
    const table = document.querySelector('.table')
    let state = []
    ordersPageQuery.forEach(listItem => {
        listItem.deliveryAddresses.forEach(order => {
            state.push(order)
        })
    })
    if(state.length){
        table.style.display = ''
    } else {
        table.style.display = 'none'
    }

    let pagesCount = Math.ceil(state.length / 7)
    let currentPage = 1

    const buttonsPages = document.querySelector('.buttons__pages')
    buttonsPages.innerHTML = ''
    for(let i = 0; i < pagesCount; i++){
        buttonsPages.innerHTML +=
            `
            <div class="button">
                ${i + 1}
            </div>
            `
    }
    updateButtons()
    function updateButtons() {
        const buttonsPage = document.querySelectorAll('.buttons__pages .button')
        buttonsPage.forEach(button => {
            button.classList.remove('current__page')
            if(button.innerText == currentPage){
                button.classList.add('current__page')
            }
            button.addEventListener('click', () => {
                currentPage = parseInt(button.innerText)
                updateButtons()
                updateList()
            })
        })
    }

    const prevPageButton = document.querySelector('#prevPage')
    const nextPageButton = document.querySelector('#nextPage')
    prevPageButton.addEventListener('click', () => {
        if(currentPage > 1){
            currentPage-=1
        }
        updateButtons()
        updateList()
    })
    nextPageButton.addEventListener('click', () => {
        if(currentPage < pagesCount){
            currentPage+=1
        }
        updateButtons()
        updateList()
    })

    ordersButton.classList.remove('active__page')
    adressButton.classList.add('active__page')
    const tableContent = document.querySelector('.table__content')

    updateList()
    function updateList() {
        tableContent.innerHTML =
            `
        <div class="row__header">
            <div class="adresses__department">
                <p>Department</p>
            </div>
            <div class="adresses__street">
                <p>Street</p>
            </div>
            <div class="adresses__bd__number">
                <p>Bd.number</p>
            </div>
            <div class="adresses__zip">
                <p>ZIP code</p>
            </div>
            <div class="adresses__city">
                <p>City</p>
            </div>
            <div class="adresses__country">
                <p>Country</p>
            </div>
            <div class="adresses__contact__person">
                <p>Contact person</p>
            </div>
            <div class="adresses__contact__phone">
                <p>Contact phone</p>
            </div>
            <div class="adresses__edit">
                <p>Edit</p>
            </div>
            <div class="adresses__delete">
                <p>Delete</p>
            </div>
        </div>
        `
        for (let i = 0; i < state.length; i++) {
            if (i >= (currentPage - 1) * 7 && i < currentPage * 7) {
                tableContent.innerHTML +=
                    `
                <div class="row__content">
                    <div class="adresses__department">
                        <p>${state[i].department}</p>
                    </div>
                    <div class="adresses__street">
                        <p>${state[i].street}</p>
                    </div>
                    <div class="adresses__bd__number">
                        <p>${state[i].bdNumber}</p>
                    </div>
                    <div class="adresses__zip">
                        <p>${state[i].zip}</p>
                    </div>
                    <div class="adresses__city">
                        <p>${state[i].city}</p>
                    </div>
                    <div class="adresses__country">
                        <p>${state[i].country}</p>
                    </div>
                    <div class="adresses__contact__person">
                        <p>${state[i].contactPerson}</p>
                    </div>
                    <div class="adresses__contact__phone">
                        <p>${state[i].contactPhone}</p>
                    </div>
                    <div class="adresses__edit">
                        <img src="../../src/OrderingPortal/Edit.png" alt="" id="edit${state[i].id}">
                    </div>
                    <div class="adresses__delete">
                        <img src="../../src/OrderingPortal/Delete.png" alt="" id="${state[i].id}">
                    </div>
                </div>
                `
            }
        }
        const deleteButtons = document.querySelectorAll('.adresses__delete img')
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const addressId = e.target.id
                const index = state.findIndex(address => address.id == addressId);
                state.splice(index, 1);
                ordersPageQuery.forEach(listItem => {
                    listItem.deliveryAddresses = state
                })
                console.log(ordersPageQuery)
                localStorage.setItem('ordersPage', JSON.stringify(ordersPageQuery))
                updateList()
            })
        })
        const editButtons = document.querySelectorAll('.adresses__edit img')
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const addressId = e.target.id.slice(4)
                const index = state.findIndex(address => address.id == addressId);

                dialog.addEventListener('click', (e) => {
                    if(e.target === dialog || e.target === closeDialog){
                        dialog.style = ''
                    }
                })
                dialog.style.display = 'flex'
                dialogContent.innerHTML =
                    `
                <div class="add__address">
                    <div class="address__header">
                        <h3>Edit ${state[index].department}</h3>
                        <img src="../../src/OrderingPortal/X.png" alt="" id="closeDialog">
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="department">
                        <p>Department</p>
                    </div>
                    <div class="input__wrapper">
                        <input type="text" id="sAddress">
                        <p>Street address</p>
                    </div>
                    <div class="form__address">
                        <div class="input__wrapper">
                            <input type="text" id="bNumber">
                            <p>Building number</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="zip">
                            <p>ZIP code</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="city">
                            <p>City</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="country">
                            <p>Country</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="cPerson">
                            <p>Contact person</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="cPhone">
                            <p>Contact phone</p>
                        </div>
                    </div>
                    <button id="saveAddress">Save</button>
                </div>
        `
                const closeDialog = document.querySelector('#closeDialog')
                let department = ''
                let streetAddress = ''
                let buildingNumber = ''
                let zip = ''
                let city = ''
                let country = ''
                let contactPerson = ''
                let contactPhone = ''
                const departmentInput = document.querySelector('#department')
                const streetAddressInput = document.querySelector('#sAddress')
                const buildingNumberInput = document.querySelector('#bNumber')
                const zipInput = document.querySelector('#zip')
                const cityInput = document.querySelector('#city')
                const countryInput = document.querySelector('#country')
                const contactPersonInput = document.querySelector('#cPerson')
                const contactPhoneInput = document.querySelector('#cPhone')
                departmentInput.addEventListener('input', () => {department = departmentInput.value})
                streetAddressInput.addEventListener('input', () => {streetAddress = streetAddressInput.value})
                buildingNumberInput.addEventListener('input', () => {buildingNumber = buildingNumberInput.value})
                zipInput.addEventListener('input', () => {zip = zipInput.value})
                cityInput.addEventListener('input', () => {city = cityInput.value})
                countryInput.addEventListener('input', () => {country = countryInput.value})
                contactPersonInput.addEventListener('input', () => {contactPerson = contactPersonInput.value})
                contactPhoneInput.addEventListener('input', () => {contactPhone = contactPhoneInput.value})

                const saveAddress = document.querySelector('#saveAddress')
                saveAddress.addEventListener('click', () => {
                    state[index].department = department
                    state[index].street = streetAddress
                    state[index].bdNumber = buildingNumber
                    state[index].zip = zip
                    state[index].city = city
                    state[index].country = country
                    state[index].contactPerson = contactPerson
                    state[index].contactPhone = contactPhone
                    ordersPageQuery.forEach(listItem => {
                        listItem.deliveryAddresses = state
                    })
                    localStorage.setItem('ordersPage', JSON.stringify(ordersPageQuery))
                    addressesListPage()
                    dialog.style = ''
                    dialogContent.innerHTML = ''
                })
            })
        })
    }
}