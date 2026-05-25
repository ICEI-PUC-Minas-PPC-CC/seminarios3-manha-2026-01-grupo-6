<<<<<<< HEAD
const path = require('path');

=======
>>>>>>> 61354d54dbab4632729bec8bdac699b250e5d6fa
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const ENDPOINT_VIRTUDES = '/api/valores';

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

=======
>>>>>>> 61354d54dbab4632729bec8bdac699b250e5d6fa
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

app.get(ENDPOINT_VIRTUDES, (req, res) => {
    res.json(virtudesCardeais);
});

app.listen(PORT, () => {
    console.log(`Servidor backend rodando em http://localhost:${PORT}`);
    console.log(`Rota de dados em: http://localhost:${PORT}${ENDPOINT_VIRTUDES}`);
<<<<<<< HEAD
=======
    console.log(`Aguarando conexão com o frontend`);
>>>>>>> 61354d54dbab4632729bec8bdac699b250e5d6fa
})