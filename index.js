const express = require('express'),
    app = express(),
    port = process.env.PORT || 7000,
    router = require('./routes/router'),
    cors = require('cors');

    require("dotenv").config();
app.use(express.json({ strict : false}))
app.use(cors())
app.use('/images', express.static('public/images'))
app.use('/api/v1', router)

// Handle 404 route
app.get('*', (req, res) => {
    return res.status(404).json({
        error: 'End point is not registered'
    })
})

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})