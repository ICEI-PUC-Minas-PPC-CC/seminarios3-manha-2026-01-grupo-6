const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

const virtudesCardeais = [
    {
        id: 1,
        titulo: "Prudência",
        youtubeId: "", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A virtude de agir com cautela e sensatez"
    },

    {
        id: 2,
        titulo: "Justiça",
        youtubeId: "", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "Princípio ético e moral que busca a o equilíbrio e a igualdade de direitos"
    },

    {
        id: 3,
        titulo: "Fortaleza",
        youtubeId: "", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A firmeza e constância na luta pelo bem, mesmo diante de obstáculos"
    },

    {
        id: 4,
        titulo: "Temperança",
        youtubeId: "", //Reservado para o id real do vídeo fornecido pela instituição
        significado: "A virtude do equilíbrio e moderação, a capacidade de controlar seus impulsos"
    },

]
