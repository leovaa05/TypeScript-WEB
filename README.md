# Calculadora de IMC – TypeScript vs JavaScript

Este mini projeto tem como objetivo demonstrar, de forma prática, as **diferenças entre JavaScript e TypeScript**, destacando as **vantagens da tipagem estática** e da **validação de erros em tempo de desenvolvimento**.

---

## 1. Descrição do Objetivo

A proposta é desenvolver uma **calculadora de IMC (Índice de Massa Corporal)** usando HTML, CSS e JavaScript puro, e compará-la com uma versão idêntica escrita em TypeScript.

Esse projeto foi escolhido por ser simples, visual e facilitar a compreensão das **vantagens do uso de TypeScript**, especialmente em relação à validação de tipos, clareza de código e prevenção de erros comuns em tempo de execução.

---

## 2. Instalação dos Softwares Necessários

Antes de começar o desenvolvimento, é necessário ter os seguintes softwares instalados:

- **Node.js** (inclui o `npm`)  
  [https://nodejs.org/](https://nodejs.org/)
  
  Após a instalação, Verifique no Terminal:
  ``` bash
  node -v
  npm -v
  
**TypeScript** (instalado via npm):
- Execute o comando para instalar globalmente na sua máquina ou como dependência de desenvolvimento no seu repositório:
  ```bash
  npm install -g typescript
  npm install typescript --save-dev
  
## 3. Passo-a-Passo para o Desenvolvimento
#### Passo 1: Criar o HTML

Crie um arquivo `index.html` com a estrutura básica da página:

- Campos para digitar o **peso** e a **altura**
- Um botão para calcular o IMC
- Uma área para exibir o resultado

#### Passo 2: Criar o estilo (CSS)

No arquivo `style.css`, adicione uma estilização simples e limpa para tornar a interface agradável e responsiva.

#### Passo 3: Criar a lógica em TypeScript (`script.ts`)

- Declare os tipos esperados para entrada (`peso: number`, `altura: number`)
- Valide se os campos foram preenchidos corretamente
- Calcule o IMC com a fórmula: `imc = peso / (altura * altura)`
- Classifique o resultado com base no valor (ex: normal, sobrepeso, obesidade)

#### Passo 4: Compilar o TypeScript

Para Compilar o TypeScript e gerar o **script.js**: 
`npx tsc script.ts`

#### Passo 5: Criar versão em JavaScript puro (`script-js.js`)
Crie uma segunda versão da lógica, sem tipagem ou validações explícitas, como um exemplo comparativo com o TypeScript.

#### Passo 6: Testar a diferença entre as versões
No index.html, troque a inclusão do script para testar cada versão:
- Para rodar a versão compilada em TypeScript
  `<script src="script.js"></script>`

- Para rodar a versão em JavaScript puro
  `<script src="script-js.js"></script>`
