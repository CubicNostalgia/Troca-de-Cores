'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

const traducoes = {
    "azul": "blue",
    "vermelho": "red",
    "verde": "green",
    "amarelo": "yellow",
    "tijolo": "firebrick",
    "laranja": "orange",
    "preto": "black",
    "neve": "snow",
    "rosa": "hotpink",
    "turquesa": "turquoise",
    "branco": "white",
    "marrom": "brown",
    "ciano": "cyan"

}

function trocarCor () {
    const input = document.getElementById('cor')
    const valor = input.value.trim().toLowerCase()
    
    const corFinal = traducoes[valor] || valor
    
    console.log("Tentando trocar para:", corFinal) // Isso aparece no F12
    document.documentElement.style.setProperty('--cor-bg', corFinal)
}

botaoTrocarCor.addEventListener('click', trocarCor)