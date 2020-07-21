
const Hubspot = require('hubspot')
const config = require('./.hubspot.json')

const hubspotClient = new Hubspot({
    apiKey: config.apiKey,
    checkLimit: false
})
/*
hubspotClient.getContactListIdByName = function(name, cb) {
    let search = function (offset) {
        hubspotClient.lists.get({
            count: 1,
            offset: offset
        }).then((res) => {
            for (let i in res.lists) {
                if (res.lists[i].name == name) {
                    return cb(res.lists[i].listId)
                }
            }
            if (res['has-more']) {
                return search(res['offset'])
            }
            return cb(null)
        }).catch((err) => {
            console.log("ERR", err)
            console.trace()
            return cb(null)
        })
    }
    search(0);
}

hubspotClient.getContactListIdByName('namaea', (id) => {
    console.log(id)
})
*/
/*
let name = 'namaea'
hubspotClient.lists.create({
    name: name,
    dynamic: false
}).then((res) => {
    console.log(res)
}).catch((err) => {
    if (err.error.errorType === 'LIST_EXISTS') {
        console.log(`ERROR! Try to create Contact List with name '${name}' but already exists.`)
    } else {
        console.log("ERR", err)
    }
    console.trace()
})
*/
/*
body = "undefined"
try {
    JSON.parse(body);
} catch (error) {
    console.log(`ERROR! Problem to process response: '${body}'`)
    console.log(error.stack);
}
*/



hubspotClient.getCompanyIdByName = function(name, cb) {
    let search = function (offset) {
        hubspotClient.companies.get({
            offset: offset,
            limit: 50,
            properties: 'name',
            propertiesWithHistory: false
        }).then((res) => {
            for (let i in res.companies) {
                if (res.companies[i].properties.name.value == name) {
                    return cb(res.companies[i].companyId)
                }
            }
            if (res['has-more']) {
                return search(res['offset'])
            }
            return cb(null)
        }).catch((err) => {
            console.log("ERR", err)
            console.trace()
            return cb(null)
        })
    }
    search(0);
}

hubspotClient.getCompanyIdByName('cavallo', (id) => {
    console.log(id)
})




