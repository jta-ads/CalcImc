# CalcImc

Calculadora de Índice de Massa Corporal (IMC)

## Descrição

O **CalcImc** é uma aplicação web simples, construída com HTML, CSS e JavaScript, que permite calcular o Índice de Massa Corporal (IMC) inserindo dados de altura e peso.

## Estrutura do Projeto

```
.
├── assets/         ← Recursos como imagens, estilos ou scripts extras
├── index.html      ← Interface principal da calculadora
└── LICENSE         ← Licença MIT
```

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/jta-ads/CalcImc.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd CalcImc
   ```
3. Abra o arquivo `index.html` no navegador de sua preferência:
   - Clique duas vezes no arquivo ou … (melhoria futura: usar um servidor local)

## Funcionalidades

- Cálculo automático do IMC baseado no peso (kg) e altura (m).
- Indicação da categoria de peso correspondente, como:
  - Abaixo do peso
  - Peso saudável
  - Sobrepeso
  - Obesidade

## Tecnologias Utilizadas

- **HTML** — Estrutura da página
- **CSS** — Estilo visual (presumido na pasta `assets/`)
- **JavaScript** — Cálculos dinâmicos do IMC

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) — veja o arquivo `LICENSE` para mais detalhes.

---

### Possíveis melhorias futuras

- Adicionar validação de entrada (formato numérico, faixas válidas, etc.).
- Incluir opção para alternar entre sistema métrico e imperial.
- Melhorar o layout com frameworks como Bootstrap ou CSS moderno.
- Implementar testes unitários para os cálculos de IMC.
- Criar versão responsiva ou app mobile.
