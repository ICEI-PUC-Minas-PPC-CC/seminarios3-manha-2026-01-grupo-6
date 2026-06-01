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
        youtubeId: "wFOD0K1xWtI", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "Virtude é a capacidade constante de escolher o que é correto e bom de forma consciente"
    },
    {
        id: 1,
        titulo: "Prudência",
        youtubeId: "AJd5Jh1t9YE", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A virtude de agir com cautela e sensatez"
    },

    {
        id: 2,
        titulo: "Justiça",
        youtubeId: "BJqfHpAFXt0", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "Princípio ético e moral que busca a o equilíbrio e a igualdade de direitos"
    },

    {
        id: 3,
        titulo: "Fortaleza",
        youtubeId: "ZEAxQlJSPMY", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A firmeza e constância na luta pelo bem, mesmo diante de obstáculos"
    },

    {
        id: 4,
        titulo: "Temperança",
        youtubeId: "hyVqdCMhF7Q", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A virtude do equilíbrio e moderação, a capacidade de controlar seus impulsos"
    },

]

app.get(ENDPOINT_VIRTUDES, (req, res) => {
    res.json(virtudesCardeais);
});

app.listen(PORT, () => {
    console.log(`Servidor backend rodando em http://localhost:${PORT}`);
    console.log(`Rota de dados em: http://localhost:${PORT}${ENDPOINT_VIRTUDES}`);
})