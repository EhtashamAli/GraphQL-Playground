const express = require('express');
const PORT = 3000 || process.env.PORT;
const app = express();

app.listen(PORT , () => {
    console.log(`Server is up and running on Port : ${PORT}`);
});