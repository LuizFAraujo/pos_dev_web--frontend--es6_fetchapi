# Endpoints Utilizados

Lista dos endpoints utilizados na aplicação para obter informações sobre as raças de cães.

## 1. `/breeds`

**Descrição:** Obtém a lista completa das raças de cães disponíveis na API.

**Exemplo de Requisição:**

```javascript
    const racas = await fetchData('breeds');
```

## 2. /breeds/{id}

**Descrição:** Obtém os detalhes de uma raça específica, identificada pelo {id} da raça.

**Exemplo de Requisição:**

```javascript
    const raca = await fetchData(`breeds/${racaId}`);
```

## 3. /images/{id}

**Descrição:** Obtém a imagem de uma raça específica, identificada pelo {id} da imagem. Este endpoint é utilizado para buscar a imagem de referência da raça.

**Exemplo de Requisição:**

```javascript
    const image = await fetchData(`images/${raca.reference_image_id}`);
```

## 4. /breeds/search (não utilizado diretamente)

**Descrição:** Endpoint usado para buscar raças com base em parâmetros específicos. Não foi utilizado diretamente no código, mas é relevante para consultas mais específicas.

Nota: Este endpoint pode ser útil para futuras implementações com busca por parâmetros específicos.
