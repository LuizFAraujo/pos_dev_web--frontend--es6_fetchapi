# Features do ES6+ Utilizadas

Lista das features do ES6+ utilizadas no código, com exemplos e descrições.

1. **Arrow Functions (`=>`)**

   **Descrição:** As arrow functions oferecem uma forma mais concisa de escrever funções e não possuem seu próprio `this`.

   **Exemplo:**

   ```javascript
   const fetchData = async (endpoint) => {
       // Código da função
   };
    ```

2. **Template Literals (Template Strings)**

    **Descrição:** Template literals permitem a interpolação de variáveis e a criação de strings multilinha.

   **Exemplo:**

   ```javascript
   const url = `${baseURL}/${endpoint}`;
   ```

3. **Destructuring Assignment**

   **Descrição:** Destructuring assignment permite extrair valores de arrays ou propriedades de objetos de forma mais conveniente.

   **Exemplo:**

    ```javascript
    const { id, name } = raca;
   ```

4. **Async/Await**

   **Descrição:** async e await fornecem uma forma mais limpa e compreensível de lidar com operações assíncronas.

   **Exemplo:**

   ```javascript
    const fetchData = async (endpoint) => {
        const response = await fetch(`${baseURL}/${endpoint}`);
        return response.json();
    };
   ```

5. **Default Parameters**

   **Descrição:** Default parameters permitem definir valores padrão para parâmetros de função.

   **Exemplo:**

   ```javascript
   const fetchData = async (endpoint = 'breeds') => {
    // Código da função
    };
   ```

6. **Spread Operator (...)**

   **Descrição:** O spread operator é usado para expandir elementos de um array ou objeto.

   **Exemplo:**

   ```javascript
   const todosRacas = [...racas];
   ```

7. **Object Property Shorthand**

   **Descrição:** Object property shorthand permite definir propriedades de objetos com nomes de variáveis de forma mais concisa.

   **Exemplo:**

   ```javascript
   const racaItem = { id, name };
   ```

8. **Enhanced Object Literals**

   **Descrição:** Enhanced object literals oferecem melhorias na sintaxe de objetos, como métodos e propriedades calculadas.

   **Exemplo:**

   ```javascript
   const racaItem = {
        id,
        name,
        display() {
          console.log(this.name);
        }
    };
   ```

9. **const e let**

   **Descrição:** const e let são usados para declarar variáveis com escopo de bloco.

   **Exemplo:**

    ```javascript
    const baseURL = "https://api.thedogapi.com/v1";
    let todasRacas = [];
   ```

10. **Optional Chaining (?.)**

    **Descrição:** Optional chaining permite acessar propriedades aninhadas de um objeto sem causar erros se algum nível intermediário for null ou undefined.

    **Exemplo:**

    ```javascript
    const imageURL = raca.reference_image_id?.url || 'https://via.placeholder.com/600';
    ```

11. **Nullish Coalescing Operator (??)**

    **Descrição:** O nullish coalescing operator fornece um valor padrão quando o valor à esquerda é null ou undefined.

    **Exemplo:**

    ```javascript
    const racaDescription = raca.temperament ?? 'Não disponível';
    ```
