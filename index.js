const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "myVar = var;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada no início do programa",
        "Uma função passada como argumento para outra função",
        "Uma função que é chamada automaticamente após um certo tempo",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa 'NaN' em JavaScript?",
      respostas: [
        "Não é uma notação",
        "Not a Number",
        "New and Notable",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
      respostas: [
        "Selecionar um elemento por sua classe",
        "Selecionar um elemento por seu ID",
        "Selecionar um elemento por seu nome",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa 'typeof' em JavaScript?",
      respostas: [
        "Tipo de dado de uma variável",
        "Verificar se uma variável está definida",
        "Conversão de tipo de dado",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Um loop que executa uma vez",
        "Um loop que executa enquanto uma condição é verdadeira",
        "Um loop com um número fixo de iterações",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método para adicionar um elemento a um array em JavaScript?",
      respostas: [
        "addElement()",
        "push()",
        "append()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta  
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }