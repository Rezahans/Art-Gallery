const express = require('express'),
    app = express(),
    port = process.env.PORT || 7000,
    router = require('./routes/router'),
    cors = require('cors');

app.use(express.json({ strict : false}))
app.use(cors())
app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})