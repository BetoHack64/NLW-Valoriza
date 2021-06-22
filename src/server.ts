import express from 'express';

const app = express();

/**
 * GET - buscar uma informação
 * POST - inserir (criar) uma informação
 * PUT - alterar uma informação
 * DELETE - apagar um dado
 * PATCH - alterar uma informação especifica
 */

app.get('/test', (request, response) => {
//request - tudo que está entrando
//response - tudo que está saindo
    return response.send('Olá NLW');
});

app.post('/test-post', (request, response) => {
    return response.send('Ola NLW POST');
});
//http: //localhost:3000
app.listen(3000, () => console.log("Servidor ligado cara"));