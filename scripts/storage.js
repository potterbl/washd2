const users = [
    {
        id: 0,
        login: 'admin',
        password: 'admin',
        admin: true,
        firstName: 'Brooklyn',
        lastName: 'Simmons',
        gender: 'Male',
        profilePic: '../../src/SystemAdmin/Userpic.png',
    },
    {
        id: 2,
        login: '1',
        password: '1',
        admin: true,
        firstName: 'Rosa',
        lastName: 'Simmons',
        gender: 'Female',
        profilePic: '../../src/SystemAdmin/Userpic.png',
    },
]

const processedToday = [
    {
        title: 'Textiles registered',
        count: 1,
        img: './src/SystemAdmin/Icon.png',
    },
    {
        title: 'Textiles received',
        count: 2,
        img: './src/SystemAdmin/Icon-1.png',
    },
    {
        title: 'Textiles washed',
        count: 3,
        img: './src/SystemAdmin/Icon-2.png',
    },
    {
        title: 'Textiles dried',
        count: 6,
        img: './src/SystemAdmin/Icon-3.png',
    },
    {
        title: 'Ready for sorting',
        count: 3,
        img: './src/SystemAdmin/Icon-4.png',
    },
    {
        title: 'Textiles sorted',
        count: 4,
        img: './src/SystemAdmin/Icon-5.png',
    },
    {
        title: 'Textiles delivered',
        count: 7,
        img: './src/SystemAdmin/Icon-6.png',
    },
]

const processedTotal = [
    {
        title: 'Textiles registered',
        count: 1,
        img: './src/SystemAdmin/total.png',
    },
    {
        title: 'Textiles actions',
        count: 2,
        img: './src/SystemAdmin/total-1.png',
    },
    {
        title: 'Textiles delivered',
        count: 3,
        img: './src/SystemAdmin/total-2.png',
    },
    {
        title: 'Companies registered',
        count: 6,
        img: './src/SystemAdmin/total-3.png',
    },
    {
        title: 'Residents registered',
        count: 4,
        img: './src/SystemAdmin/total-4.png',
    },
    {
        title: 'Employees registered',
        count: 4,
        img: './src/SystemAdmin/total-5.png',
    },
    {
        title: 'Events logged',
        count: 7,
        img: './src/SystemAdmin/total-6.png',
    },
]

const employeers = [
    {id: 0, mailUser: 'debra.holt@example.com', fullName: 'testing', createdBy: 'testing', canChangePass: true, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 1, mailUser: 'asd@sada', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 2, mailUser: 'asdasdasd', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 3, mailUser: 'ffff@bgbbbbbbbbb', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 4, mailUser: 'saddddddddd', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 5, mailUser: 'ASDASD', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 6, mailUser: 'dsadasdasd', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 7, mailUser: 'AAAAAAAA', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 8, mailUser: 'bvb@bhgfh', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 9, mailUser: 'sobakasobaka@sobaka.sobaka', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 10, mailUser: 'jackson.graham@mail.com', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 11, mailUser: 'asdas', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 12, mailUser: '312', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 13, mailUser: 'aaaaaaa', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 14, mailUser: 'as', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 15, mailUser: '23333', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 16, mailUser: 'vdfgdfgdfg', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
    {id: 17, mailUser: 'dfgdfg@gdddd', fullName: 'testing', createdBy: 'testing', canChangePass: false, mustChangePass: false, pin: '1234', password: '1234'},
]
const groups = [
    {id: 0, name: 'test', description: 'test', systemGroup: true},
    {id: 1, name: 'test', description: 'test', systemGroup: true},
    {id: 2, name: 'test', description: 'test', systemGroup: true},
    {id: 3, name: 'test', description: 'test', systemGroup: true},
    {id: 4, name: 'test', description: 'test', systemGroup: false},
    {id: 5, name: 'test', description: 'test', systemGroup: true},
    {id: 6, name: 'test', description: 'test', systemGroup: true},
    {id: 7, name: 'test', description: 'test', systemGroup: false},
    {id: 8, name: 'test', description: 'test', systemGroup: true},
    {id: 9, name: 'test', description: 'test', systemGroup: true},
    {id: 10, name: 'test', description: 'test', systemGroup: true},
    {id: 11, name: 'test', description: 'test', systemGroup: true},
]
const mobileScanners = [
    {id: 0, name: 'Zebra mobile', lastOnline: '2023-03-12 20:26:45', timeIncactive: 1234, signedIn: false, userSignedIn: false},
    {id: 1, name: 'Zebra mobile', lastOnline: '2023-03-12 20:26:45', timeIncactive: 774, signedIn: false, userSignedIn: false},
    {id: 2, name: 'Zebra mobile', lastOnline: '2023-03-12 20:26:45', timeIncactive: 32, signedIn: false, userSignedIn: false},
    {id: 3, name: 'Zebra mobile', lastOnline: '2023-03-12 20:26:45', timeIncactive: 2134, signedIn: false, userSignedIn: false},
    {id: 4, name: 'Zebra mobile', lastOnline: '2023-03-12 20:26:45', timeIncactive: 1232, signedIn: false, userSignedIn: false},
]
const fixedScanners = [
    {id:0, name: 'Dev Reader', systemName: 'test', location: 'Vantevo', lastOnline: '2021-12-09', activated: true, scanningNow: false, function: 'Everything', loginRequired: true, signedIn: 0},
    {id:1, name: 'Dev Reader', systemName: 'test', location: 'Vantevo', lastOnline: '2021-12-09', activated: true, scanningNow: true, function: 'Everything', loginRequired: true, signedIn: 0},
    {id:2, name: 'Dev Reader', systemName: 'test', location: 'Vantevo', lastOnline: '2021-12-09', activated: true, scanningNow: false, function: 'Everything', loginRequired: true, signedIn: 0},
]
const tod = [
    {id: 0, name: 'Revnet', description: 'Tekstil er skadet av revner', systemDeviation: false},
    {id: 1, name: 'Revnet', description: 'Tekstil er skadet av revner', systemDeviation: false},
    {id: 2, name: 'Revnet', description: 'Tekstil er skadet av revner', systemDeviation: false},
    {id: 3, name: 'Revnet', description: 'Tekstil er skadet av revner', systemDeviation: true},
    {id: 4, name: 'Revnet', description: 'Tekstil er skadet av revner', systemDeviation: false},
]
const sortingLocations = [
    {id: 0, name: 'Sorteringsbord A', description: 'Revnet'},
]
const rutines = {
    pinRequired: false,
    pin: '1234',
}

const customers = [
    {id: 0, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 1, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 2, name: 'Gokkstad', color: '#8DDA71', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 3, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 4, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 5, name: 'Gokkstad gotell AS', color: '#8DDA71', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 6, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
    {id: 7, name: 'Gokkstad gotell AS', color: '#DAB3F9', number: 654212212, date: '2021-02-04 09:43:02', address: 'Vekkiveien 87', city: 'Gokkstad', postcode: '7015', residents: '-', maxWash: 50, createdBy: 'test', category: 'Genser', size: '', uniform: false, temperature: '40', weight: '520', status: 'In reception', deviation: '', rfid: 'E28068940000500CBC62FD4F', track: false, action: 'In reception'},
]
const contacts = [
    {id: 0, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 1, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 2, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 3, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 4, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 5, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 6, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 7, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 8, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 9, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 10, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
    {id: 11, name: 'test', email: 'asd', phone: 2312313, customer: 'Gokkstad gotell AS', title: 'Hotellsjef', updated: '2021-02-04 08:45:37', createdBy: 'test'},
]
const residents = [
    {id: 0, identify: 'Beboer Beboersen', room: 108, department: '-', customer: 'test', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:25', createdBy: 'test'},
    {id: 1, identify: 'Beboer ', room: 128, department: '-', customer: 'test', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:25', createdBy: 'test'},
    {id: 2, identify: 'Beboer Beboersen', room: 103, department: '-', customer: 'test', created: '2021-02-05 09:45:37', updated: '2021-02-04 10:40:25', createdBy: 'test'},
]
const categories = [
    {id: 0, name: 'Skjorte', description: '-', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'test'},
    {id: 1, name: 'Skjorte', description: '-', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'test'},
]
const colors = [
    {id: 0, name: 'Farget', value: '#7AC5AA', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: ''},
    {id: 1, name: 'Red', value: '#b63a3a', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: ''},
]
const temperatures = [
    {id: 0, temperature: '30', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'test'},
]
const sizes = [
    {id: 0, size: 'S', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'Test'},
    {id: 1, size: 'M', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'Test'},
    {id: 2, size: 'L', created: '2021-02-04 09:45:37', updated: '2021-02-04 10:40:37', createdBy: 'Test'},
]

const printers = [
    {id: 0, name: 'Washd Dev Etikett', assigned: 'Sorteringsbord A', lastSeen: '21.12.2021 - 13:05', lastStatus: 'Online', mac: '00:11:62:0D:E4:28', wan: '10.128.10.3'},
    {id: 1, name: 'Washd Test Printer', assigned: 'Ingen', lastSeen: '21.12.2021 - 13:05', lastStatus: 'Online', mac: '00:11:62:0D:E4:28', wan: '10.128.10.3'},
]

const textileLog = [
    {id: 0, time: '2023-02-04 10:40:37', rfid: 'E2808127391DFfDSf342', customer: 'Gokkstad gotell AS', resident: '', action: 'Ready for delivery', performedBy: '', track: false},
    {id: 1, time: '2023-03-07 10:40:37', rfid: 'E2808127391DFfDSf342', customer: 'Gokkstad', resident: '', action: 'In reception', performedBy: '', track: false},
    {id: 2, time: '2023-03-01 10:40:37', rfid: 'E2808127391DFfDSf342', customer: 'Gokkstad gotell AS', resident: '', action: 'In reception', performedBy: '', track: false},
    {id: 3, time: '2023-01-16 10:40:37', rfid: 'E2808127391DFfDSf342', customer: 'Gokkstad', resident: '', action: '-', performedBy: '', track: false},
]
const actions = [
    {id: 0, action: 'In reception'},
    {id: 1, action: 'To wash'},
    {id: 2, action: 'To dry'},
    {id: 3, action: 'Ready for sorting'},
    {id: 4, action: 'Ready for delivery'},
]

const systemLog = [
    {id: 0, securityLevel: 'None', severity: 'Low', activity: 'Login - OK', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
    {id: 1, securityLevel: 'Low', severity: 'Info', activity: 'Scanner started scanning', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
    {id: 2, securityLevel: 'Low', severity: 'Medium', activity: 'Admin form added member to Group', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
    {id: 3, securityLevel: 'Medium', severity: 'Medium', activity: 'Admin form added member to Group', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
    {id: 4, securityLevel: 'Medium', severity: 'Medium', activity: 'Admin form added member to Group', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
    {id: 5, securityLevel: 'Medium', severity: 'Medium', activity: 'Admin form added member to Group', description: 'testtesttest', emailUsername: 'testtest@gmail.com', occurrence: '2021-12-09 09:57:54'},
]
const ordersPage = [
    {
        id: 0,
        customer: "Gokham",
        resident: 'Test',
        accounts: [
            {
                id: 0,
                name: "Brooklyn Simmons",
                emailUsername: "example@gmail.com",
                department: 'Test',
                password: '1234',
                phone: "1234523456",
            }
        ],
        orders: [
            {
                id: 0,
                orderNumber: 0,
                date: '30/06/2022',
                admin: 'Brooklyn Simmons',
                status: 'completed',
                item: 'Uniform',
                amount: '100',
                orderReference: '',
                deliveryAddress: 'Department 1.',
                client: 'Adobe Digital Government',
                rfid: 'E28068940000500CBC62FD4F',
                color: 'White',
                temp: '12 C',
                weight: '-',
                lastSeen: '12:00:35',
                washes: '30 / ∞',
                department: 'AVD',
                speciality: 'Resident clothing',
                size: 'M',
            },
            {
                id: 1,
                orderNumber: 0,
                date: '30/03/2022',
                admin: 'Brooklyn Simmons',
                status: 'In reception',
                item: ['Uniform', 'T-Shirt'],
                amount: ['100', '200'],
                orderReference: '',
                deliveryAddress: 'Department 1.',
                client: 'Adobe Digital Government',
                rfid: 'E28068940000500CBC62FD4F',
                color: 'White',
                temp: '12 C',
                weight: '-',
                lastSeen: '12:00:35',
                washes: '30 / ∞',
                department: 'AVD',
                speciality: 'Resident clothing',
                size: 'M',
            },
            {
                id: 2,
                orderNumber: 0,
                date: '30/03/2022',
                admin: 'Brooklyn Simmons',
                status: 'Delivered',
                item: 'Uniform',
                amount: '100',
                orderReference: '',
                deliveryAddress: 'Department 1.',
                client: 'Adobe Digital Government',
                rfid: 'E2806894000050BC62FD4F',
                color: 'White',
                temp: '12 C',
                weight: '-',
                lastSeen: '12:00:35',
                washes: '30 / ∞',
                department: 'AVD',
                speciality: 'Resident clothing',
                size: 'M',
            },
        ],
        deliveryAddresses: [
            {
                id: 0,
                department: 'AVD',
                street: '6391 Elgin St.',
                bdNumber: '104',
                zip: '10299',
                city: 'Celina',
                country: 'USA',
                contactPerson: 'Alex Brown',
                contactPhone: '(684) 555-0102',
            }
        ]
    }
]

const language = 'en'
localStorage.setItem('language', language)
localStorage.setItem('scanner', 'online')
localStorage.setItem('users', JSON.stringify(users))
localStorage.setItem('employeers', JSON.stringify(employeers))
localStorage.setItem('groups', JSON.stringify(groups))
localStorage.setItem('mobileScanners', JSON.stringify(mobileScanners))
localStorage.setItem('fixedScanners', JSON.stringify(fixedScanners))
localStorage.setItem('tod', JSON.stringify(tod))
localStorage.setItem('sortingLocations', JSON.stringify(sortingLocations))
localStorage.setItem('rutines', JSON.stringify(rutines))
localStorage.setItem('customers', JSON.stringify(customers))
localStorage.setItem('contacts', JSON.stringify(contacts))
localStorage.setItem('residents', JSON.stringify(residents))
localStorage.setItem('categories', JSON.stringify(categories))
localStorage.setItem('colors', JSON.stringify(colors))
localStorage.setItem('temperatures', JSON.stringify(temperatures))
localStorage.setItem('sizes', JSON.stringify(sizes))
localStorage.setItem('printers', JSON.stringify(printers))
localStorage.setItem('textileLog', JSON.stringify(textileLog))
localStorage.setItem('systemLog', JSON.stringify(systemLog))
localStorage.setItem('actions', JSON.stringify(actions))
localStorage.setItem('ordersPage', JSON.stringify(ordersPage))
localStorage.setItem('processedToday', JSON.stringify(processedToday))
localStorage.setItem('processedTotal', JSON.stringify(processedTotal))