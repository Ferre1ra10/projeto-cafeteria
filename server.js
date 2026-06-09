const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/sobre", (req, res) => {
    res.json({
        empresa: process.env.EMPRESA || "Cafeteria Central",
        cidade: "Brasília"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Empresa: ${process.env.EMPRESA}`);
});