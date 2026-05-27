# 02 — Documento de Requisitos do Software

> **Grupo:** *Cecilia Teresa Bernardes, Domiciano Gabriel Negrini Vieira, Gabriela Campos Dias*  
> **Aplicação:** *Dicionário Interativo de Valores em Libras*  
> **Comunidade:** *Tarso de Coimbra*

---

## 1. Visão Geral

A aplicação consiste em um dicionário interativo de valores, onde cada valor (como respeito, empatia e gentileza) é representado por um botão na interface. Ao clicar em um valor, o usuário visualiza um vídeo com o sinal correspondente em Libras. O sistema é destinado principalmente à comunidade surda e às pessoas que desejam aprender Libras de forma acessível, prática e visual. O problema que a aplicação resolve é a dificuldade de acesso a conteúdos educativos visuais sobre valores em Libras.

## 2. Público-Alvo

| Campo | Informação |
| ------- | ----------- |
| Perfil dos usuários | Pessoas surdas, estudantes, professores e iniciantes em Libras |
| Faixa etária | A partir de 10 anos |
| Necessidades de acessibilidade | Conteúdo visual, vídeos em Libras, interface simples e intuitiva |
| Nível de familiaridade com tecnologia | Básico |

> **Lembrete (Tarso de Coimbra):** Os usuários podem ter deficiência auditiva/surdez. A interface deve ser **visual, intuitiva e de baixa complexidade**. Priorize elementos visuais (imagens, ícones, cores) sobre texto extenso.

## 3. Requisitos Funcionais

| ID | Requisito | Prioridade | Origem da demanda |
| ---- | ---------- | :----------: | ------------------ |
| RF01 | Exibir lista de valores em forma de botões na tela inicial | Alta | (Reunião com a comunidade em 06/03) |
| RF02 | Permitir ao usuário clicar em um valor | Alta	 | (Reunião com a comunidade em 06/03) |
| RF03 | Exibir vídeo em Libras correspondente ao valor selecionado | Alta | (Reunião com a comunidade em 06/03) |

## 4. Requisitos Não Funcionais

| ID | Requisito | Categoria |
| ---- | ---------- | ----------- |
| RNF01 | A aplicação deve ser acessível via navegador web | Acessibilidade |
| RNF02 | A interface deve ser simples e intuitiva | Usabilidade |
| RNF03 | A aplicação deve funcionar em dispositivos móveis | Compatibilidade |
| RNF04 | A aplicação deve ter boa organização visual e responsividade | Usabilidade |
| RNF05 | Os vídeos devem ser carregados rapidamente | Desempenho |

## 5. Requisitos de Acessibilidade

- [ ] Interface predominantemente visual (ícones, cores, imagens)
- [ ] Textos curtos e objetivos
- [ ] Botões grandes e identificáveis
- [ ] Contraste adequado de cores
- [ ] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [ ] Sem dependência de áudio para funcionalidades essenciais

## 6. Tecnologias Escolhidas

| Componente | Tecnologia |
| ----------- | ----------- |
| Front-end | HTML, CSS e JavaScript |
| Back-end (se houver) | |
| Banco de dados (se houver) | |
| Hospedagem | |
| Outras ferramentas | |

## 7. Protótipo / Wireframes

![prototipo](https://github.com/user-attachments/assets/180326b2-bd2a-4776-9211-d23088d0480c)

![pop-up](https://github.com/user-attachments/assets/fb04931c-2d43-4e47-ae9d-a79627e405e9)

## 8. Escopo Mínimo Viável (MVP)

(Quais funcionalidades compõem a versão mínima que pode ser entregue à comunidade?)

- [ ] *(Exibição dos valores em botões)*
- [ ] *(Clique no botão para selecionar valor)*
- [ ] *(Exibição de vídeo em libras correspondentes)*

## 9. Funcionalidades Desejáveis (se houver tempo)

- *(Adicionar descrição textual do valor)*
- *(Sistema de busca por valores)*
- *(Valores favoritos)*
- *(Adicione mais categorias (emoções, ações, etc.))*
