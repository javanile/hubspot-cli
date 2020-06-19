
const hubspot = new Hubspot({
    apiKey: process.env.HUBSPOT_API_KEY,
    checkLimit: false
})


hubspot.lists.create({
    name: name,
    dynamic: false
}).then((res) => {
    cb(res.listId)
}).catch((err) => {
    console.log("ERR", err.error)
    console.trace()
    return cb(null)
})
