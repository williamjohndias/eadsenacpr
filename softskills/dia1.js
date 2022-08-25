const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard');
const { callbackButton } = require("telegraf/markup");




const dias = new Composer()

let progresso = "";

dias.action('verificadia', async ctx => {
    await ctx.replyWithMarkdown(`Você precisa passar por outros conhecimentos antes de acessar este dia`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Inserir código de acesso', 'inserir'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

dias.action('inserir', Stage.enter('verificadia2'))

//!----- começo do dia 1 ------

dias.action('dia1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto({
        url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/capa.png?v=1650283706811`
    })
    await ctx.replyWithMarkdown(`*Olá, Aluno(a)* \nQue bom ter você por aqui! \n😄`)
    await ctx.replyWithMarkdown(`Preparada(o) para uma imersão em busca do\n*autoconhecimento* e *habilidades* para o\n*futuro*?`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Sim! 👍', 'dia1.1')
        ], {
            columns: 1
        })))
})

dias.action('dia1.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/giphy.gif', {
        caption: '🤔'
    })
    await ctx.replyWithMarkdown(`É dado o início a uma 🛤️ trilha que te encaminhará para o desenvolvimento das *Soft Skills* (habilidades interpessoais) para a 🧘 vida pessoal e 👩‍🍳 mercado de trabalho.`)
    await ctx.replyWithMarkdown(`Encara o desafio?`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Claro! 🌟', 'dia1.2')
        ], {
            columns: 1
        }))
    )
})

dias.action('dia1.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Qual a sua expectativa para essa trilha que irá começar? Digite com uma nota de 1 a 10!`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('1', 'dia1.3'),
            Markup.callbackButton('2', 'dia1.3'),
            Markup.callbackButton('3', 'dia1.3'),
            Markup.callbackButton('4', 'dia1.3'),
            Markup.callbackButton('5', 'dia1.3'),
            Markup.callbackButton('6', 'dia1.3'),
            Markup.callbackButton('7', 'dia1.3'),
            Markup.callbackButton('8', 'dia1.3'),
            Markup.callbackButton('9', 'dia1.3'),
            Markup.callbackButton('10', 'dia1.3')
        ], {
            columns: 5
        })))
})

dias.action('dia1.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`No final da trilha vamos te perguntar se a nota atribuída correspondeu à expectativa. `)
    await ctx.replyWithMarkdown(`Agora vamos começar?`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Vamos! 🤜🤛', 'dia1.33')
        ], {
            columns: 1
        })))
})
//ação de condição

dias.action('dia1.33', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/Gif_teste2.gif')
    await ctx.replyWithMarkdown(`Com base nos 🤷 conhecimentos que possui, quais das opções abaixo melhor define Soft Skills?`)
    await ctx.replyWithMarkdown(`Selecione a opção correspondente.`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('1️⃣ - Base fundamental do caráter do profissional, muito demandada no mercado.', 'dia1.4'),
            Markup.callbackButton('2️⃣ - São habilidades brandas, que nem todos possuem.', 'dia1.4'),
            Markup.callbackButton('3️⃣ - Habilidades técnicas e operacionais.', 'dia1.4')
        ], {
            columns: 1
        })))
})

dias.action('dia1.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*Resposta correta:* \nAs Soft Skills são a base fundamental do caráter de um profissional e são muito demandadas no mercado de trabalho.`)
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/giphy%20(1).gif')
    await ctx.replyWithMarkdown(`Mais uma pergunta: as Soft Skills para o mercado de trabalho são:`)
    await ctx.replyWithMarkdown(`Selecione a opção correspondente.`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('1️⃣ - Extremamente necessárias.', 'dia1.5'),
            Markup.callbackButton('2️⃣ - Depende do cargo.', 'dia1.5'),
            Markup.callbackButton('3️⃣ - Desnecessárias.', 'dia1.5')
        ], {
            columns: 1
        })))
})

dias.action('dia1.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*Resposta correta:* \nExtremamente necessárias, pois as Soft Skills são a capacidade de se relacionar bem com outras pessoas e gerar resultados positivos dessas conexões.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA1_%20005.gif`)
    await ctx.replyWithMarkdown(`Vamos avançar com um vídeo?\n__ (Para uma melhor experiência ligue o som e gire seu celular, deixando-o na horizontal)`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=VsCkUe1grt8`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Avançar!', 'dia1.6')
        ], {
            columns: 1
        })))
})

dias.action('dia1.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA1_%20006.gif')
    await ctx.replyWithMarkdown(`E como as Soft Skills são vistas pelos 🧑‍💼 gestores de empresas?`)
    await ctx.replyWithMarkdown(`Os gestores geralmente procuram candidatos com habilidades interpessoais, porque elas proporcionam maior sucesso ao profissional e o tornam bem-sucedido no local de trabalho.`)
    await ctx.replyWithMarkdown(`Quer saber o motivo?`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Manda!', 'dia1.7')
        ], {
            columns: 1
        })))
})

dias.action('dia1.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Uma pessoa pode ser excelente com 👩🏾‍⚕️ habilidades técnicas específicas do seu trabalho, mas se não conseguir administrar seu ⌚ tempo ou trabalhar em equipe, não terá sucesso no local de trabalho.`)
    await ctx.replyWithMarkdown(`Concorda?`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Sem dúvida!', 'dia1.8')
        ], {
            columns: 1
        })))
})

dias.action('dia1.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Confira alguns dados de uma 🔎 pesquisa da Global Talent Trends do LinkedIn com profissionais de recrutamento:`)
    await ctx.replyWithPhoto({
        url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA1_%20007.jpg?v=1652279774251`
    })
    await ctx.replyWithPhoto({
        url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA1_%20008.jpg?v=1652279776588`
    })
    await ctx.replyWithPhoto({
        url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA1_%20009.jpg?v=1652279777536`
    })
    
    await ctx.replyWithMarkdown(`Gostou do que viu? Que tal refletir sobre a importância das Soft Skills? `,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Sim!', 'dia1.9')
        ], {
            columns: 1
        })))
})

dias.action('dia1.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     002      ❌\n❌❌❌❌❌❌*`)
    await ctx.replyWithMarkdown(`Até logo, agente do futuro! Amanhã tem mais!`)
    await ctx.replyWithMarkdown(`😎`,
        Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('📋 Acessar o dia 2!', 'dia2'),
            Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
    })

dias.action('dia2', Stage.enter('dia2'))

dias.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
  dias.use(async ctx => {
    await ctx.reply('Opção não encontrada')
    await ctx.reply('Deseja sair?',
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('❎ Sair', 'sair')
  
          ], {
            columns: 1
          })))
    })
  

  
 module.exports = dias
  