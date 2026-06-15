const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const ENDPOINT_VIRTUDES = '/api/valores';

app.use(cors());
app.use(express.json());

const virtudesCardeais = [
     {
        id: 0,
        titulo: "Virtude",
        emoji: "⭐",
        youtubeId: "wFOD0K1xWtI",
        significado: "Virtude é a capacidade constante de escolher o que é correto e bom de forma consciente."
    },

    {
        id: 1,
        titulo: "Prudência",
        emoji: "🦉",
        youtubeId: "AJd5Jh1t9YE",
        significado: "A virtude de agir com cautela e sensatez."
    },

    {
        id: 2,
        titulo: "Justiça",
        emoji: "⚖️",
        youtubeId: "BJqfHpAFXt0",
        significado: "Princípio ético e moral que busca o equilíbrio e a igualdade de direitos."
    },

    {
        id: 3,
        titulo: "Fortaleza",
        emoji: "🛡️",
        youtubeId: "ZEAxQlJSPMY",
        significado: "A firmeza e constância na luta pelo bem, mesmo diante de obstáculos."
    },

    {
        id: 4,
        titulo: "Temperança",
        emoji: "🌿",
        youtubeId: "hyVqdCMhF7Q",
        significado: "A virtude do equilíbrio e moderação, a capacidade de controlar seus impulsos."
    }

]

app.get(ENDPOINT_VIRTUDES, (req, res) => {
    res.json(virtudesCardeais);
});

app.listen(PORT, () => {
    console.log(`Servidor backend rodando em http://localhost:${PORT}`);
    console.log(`Rota de dados em: http://localhost:${PORT}${ENDPOINT_VIRTUDES}`);
})