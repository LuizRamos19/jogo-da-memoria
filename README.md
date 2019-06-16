#CSS

`Position: absolute`

Para fazer com que um componente respeite um outro componente que é seu pai ao utilizar `_position: absolute_`, é necessário que este pai esteja com o seu position diferente de static, o mais comum e utilizado seria o `_position: relative_`.

`Display: flex`

Ao utilizar `_display: flex_` temos que ter em conta que, diferente do position, quem manda no posicionamento do elemento que queremos centralizar não é mais ele mesmo, e sim o pai dele. Colocar o código abaixo no componente pai. O comportamento padrão dessa propriedade é deixar os componentes um do lado do outro.

```
display: flex;
justify-content: center; //alinha horizontal
align-items: center; //alinha vertical
```

#JavaScript

`Como funciona o JavaScript`

Quem cuida dessa linguagem é o TC39, que é uma organização que possui funcionários de várias empresas. A linguagem recebe atualizações anuais através do documento ECMAScript (ES).

`API do DOM`

As vezes quando estamos programando em JavaScript, precisamos acessar alguns recursos do HTML ou CSS que estão no navegador. Neste caso, a linguagem JS consegue se comunicar com esses recursos usando a API do DOM (Document Object Model), onde é essa API que se comunica com o navegador. Quem mantêm o HTML, CSS e a API do DOM, são duas organizações: W3C (Organização mais antiga) e WHATWG (Organização onde estão os browsers).

`Como se atualizar na raiz`

Com relação ao ECMAScript, pode-se utilizar a página deles no github. [https://github.com/tc39].

`Componente Stateless`

Um componente `_stateless_` é quando o componente por si só não possui responsabilidades de saber quais informações irá tratar ou não. Basicamente, este componente apenas recebe valores, insere esses valores onde tem que ser inserido e retorna o valor do componente. Um exemplo é quando o componente retorna um elemento HTML onde a classe desse elemento é recebida por parâmetro.

`Object destructuring`

Uma forma simplificada de pegar as chaves de um objeto JSON no JavaScript é usando o `_object destructuring_` que nada mais é do que uma notação. Segue exemplo abaixo:

```
const { src, alt, nameClass } = card; //a variável card é um JSON
```

`Event Bubbling`

Event bubbling ocorre quando um elemento dentro de um elemento pai recebe alguma evento, como o clique por exemplo. Se um elemento filho recebe um evento, o pai sabe que o filho recebeu esse evento e o pai desse pai também, até o pai máximo. Exemplo para pegar uma classe específica ao clicar em um elemento específico dentro do pai:

```
$origin.closest('-active');
```


`IIEF - Immediately Invoked Function Expression`

Para deixar as variáveis como privadas para que não seja possível acessar pelo console do navegador, é necessário usar o IIEF que é uma função que é automaticamente invocada por ela mesma e não possue nome. Para declarar e executar basta escrever o seguinte código.

```
(function () {})(); //o parênteses do final executa a função
```

`Spread Operator`

O Spread Operator serve para receber n parâmetros em uma função, através de uma única variável declarada com `...` antes de seu nome. A variável recebe os parâmetros e os tranforma em um array.

```
classe.render($logoCollab, $titleCollab);

module.render = (...$children) => {
    //
}
```

`Regex ou Expressões Regulares`

O motor que lê uma espressão regular é o Regex, entretanto o nome de `Regex` se popularizou e esse nome é mais utilizado do que o nome `Expressão Regular`. O Regex serve para que possamos encontrar padrões em textos, podendo ser utilizado para validações, trocas de palavras, entre outros.

```
const texto = "Luiz"; //para criar uma regex, basta colocar / /
const regex = /^Luiz$/; //valida se começa e termina com Luiz

const resultado = regex.test(); //o test serve para testar o regex

Validando um telefone

const texto = "4545-5454"; //para criar uma regex, basta colocar / /
const regex = /^[0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9]$/; 
//valida se começa e termina com números e se todos os caracteres são números. A quantidade de números também é validada
const regex = /^[0-9]{4,5} - [0-9]{4}$/; //forma resumida da regex acima, entretanto, nessa conseguimos colocar limitação de caracteres, neste exemplo, precisa ter no mínimo 4 e máximo 5 no primeiro conjunto antes do traço
```