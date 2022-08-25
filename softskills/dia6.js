const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d6 = new Composer()

// ------------------
//! curso: soft_skills DIA 6
// ------------------

let progresso = "";


const dia6 = new WizardScene('dia6',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)*`)
        await ctx.replyWithMarkdown(`Bom dia, boa tarde ou boa noite!\nAndou praticando a empatia? `,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Praticar empatia faz parte da minha vida!', 'dia6.1')
            ], {
                columns: 1
            })))
    },
    d6
)


d6.action('dia6.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Ter empatia vai auxiliar para desenvolver a soft skill do nosso\ndia 6: 🤝 *negociação*! `)
    await ctx.replyWithMarkdown(`A compreensão das ideias e ações do outro é indispensável para o bom negociador, porque os lados precisam estar em 🤜🤛 sintonia para que não corra o risco de acontecer um 😠conflito.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20001.gif?v=1653329802488`)
    await ctx.replyWithMarkdown(`Notou que já começamos com tudo, não é mesmo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim! 👍', 'dia6.2')
        ], {
            columns: 1
        })))
})

d6.action('dia6.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Negociador, os lados, sintonia, conflito...`)
    await ctx.replyWithMarkdown(`Vamos por partes para você compreender a importância dessa habilidade!`)
    await ctx.replyWithMarkdown(`Sabia que *você já nasceu sabendo negociar*?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Será?', 'dia6.3')
        ], {
            columns: 1
        })))
})

d6.action('dia6.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sim! É isso mesmo!\nA grande diferença é saber *realizar esse processo de forma 😏 consciente*.`)
    await ctx.replyWithMarkdown(`A negociação é algo antigo em nossas vidas.`)
    await ctx.replyWithMarkdown(`Quando 👶🏾 crianças, chorávamos para nossos pais se queríamos 💞carinho, 🍲 comida ou um 🎁 presente. `)
    await ctx.replyWithMarkdown(`Inconscientemente 😭 chorávamos para “barganhar” o que nós necessitávamos.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20002.gif?v=1653329802015`)
    await ctx.replyWithMarkdown(`Agora é com você: *O que é negociação?*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('É o processo que duas ou mais partes procuram um acordo.', 'dia6.4'),

      Markup.callbackButton('É a relação de compra e venda de determinado produto.', 'dia6.4')
        ], {
            columns: 1
        })))
})

d6.action('dia6.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*Negócios* são *transações comerciais*, ou tipos de transações comerciais. `)
    await ctx.replyWithMarkdown(`Uma 🤝🏼negociação é o processo por meio do qual duas ou mais partes, com objetivos diferentes, procuram um acordo que as satisfaça, podendo ser uma relação de compra e venda, ou não.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20003.gif?v=1653329801737`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia6.5')
        ], {
            columns: 1
        })))
})

d6.action('dia6.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Pelos conceitos apresentados você deve ter notado a *necessidade da negociação*.`)
    await ctx.replyWithMarkdown(`Entenda que, a negociação está presente no nosso dia a dia, seja na nossa *vida pessoal* quanto no *mundo do trabalho*.`)
    await ctx.replyWithMarkdown(`Uma 🛣️ viagem em família ou fechamento de um 📑 contrato envolvem conversas que se não forem bem negociadas e acordadas podem gerar 😠 conflito.`)
    await ctx.replyWithMarkdown(`*Conflitos* são inerentes às *relações humanas*, não podemos fugir deles, mas sim *aprender a lidar* com eles de *maneira construtiva*. `)
    await ctx.replyWithMarkdown(`Apesar da carga ➖ negativa que a palavra possui, o conflito em si não é negativo, nem positivo, é algo que faz *parte da vida humana*.`)
    await ctx.replyWithMarkdown(`Mas... por onde começar para ser um bom negociador?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Ter empenho para vender bem a própria ideia.', 'dia6.6'),
      Markup.callbackButton('Ter esforço para entender o ponto de vista da outra parte.', 'dia6.6')
        ], {
            columns: 1
        })))
})

d6.action('dia6.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Caso você deseje ter um acordo satisfatório é necessário pensar como um 🕵️‍♀️ investigador para descobrir por que o outro lado quer aquilo que pede.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`Vamos para um vídeo?`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=G2vqnh0ZPRY`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia6.7')
        ], {
            columns: 1
        })))
})

d6.action('dia6.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Gostou da técnica da negociação 🔎 investigativa?`)
    await ctx.replyWithMarkdown(`Mas não ache que é só perguntar... também é necessário saber 👂 ouvir!`)
    await ctx.replyWithMarkdown(`Agora é com você: *o que define se uma pessoa é boa negociadora ou não, é a...*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Simpatia.', 'dia6.8'),
      Markup.callbackButton('Técnica.', 'dia6.8'),
      Markup.callbackButton('Escolaridade.', 'dia6.8')
        ], {
            columns: 1
        })))
})

d6.action('dia6.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`É a técnica!`)
    await ctx.replyWithMarkdown(`Cada pessoa tem seu 👤 perfil, mas podemos *aprender estratégias* que vão *aprimorar* nossa forma de se *comunicar e persuadir*.`)
    await ctx.replyWithMarkdown(`Escute um 🎧 áudio que apresenta como podemos nos desenvolver para a negociação!`)
    await ctx.replyWithAudio({
    url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/AUDIO_SOFTSKILLS_DIA5_%20001.mp3?v=1652721193934`
    },
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia6.9')
        ], {
            columns: 1
        })))
})



d6.action('dia6.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Agora vamos falar do que é o poder em uma negociação no mundo do trabalho.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20004.gif?v=1653394378955`)
    await ctx.replyWithMarkdown(`Seja lá qual for a negociação, o *poder* é a *capacidade que uma das partes tem de controlar os recursos e benefícios da outra parte*.`)
    await ctx.replyWithMarkdown(`E como negociar de forma poderosa?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Boa pergunta!', 'dia6.10')
        ], {
            columns: 1
        })))
})

d6.action('dia6.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sempre tenha contigo *material de apoio*. `)
    await ctx.replyWithMarkdown(`Seja 💻 digital ou 📄 impresso, o importante é ter informações quando necessário!`)
    await ctx.replyWithMarkdown(`Mantenha um *registro do acordado*. `)
    await ctx.replyWithMarkdown(`Acordo de 👄 “boca” nem sempre é levado a sério. 🧾 Registre para evitar estresse!`)
    await ctx.replyWithMarkdown(`Leve em consideração a *importância da comunicação*.`)
    await ctx.replyWithMarkdown(`É preciso deixar sua posição muito bem clara. Precisa 🗣️ falar bem e sem timidez.`)
    await ctx.replyWithMarkdown(`*Nunca tente tirar vantagem sobre ninguém*, nada melhor que uma * 🤝🏽 negociação justa e amigável*.`)
    await ctx.replyWithMarkdown(`E aí? Está de acordo!`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim! 🤜🤛', 'dia6.11')
        ], {
            columns: 1
        })))
})

d6.action('dia6.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`Vamos para mais um vídeo? O da vez é sobre resolver problemas e mediar conflitos, com Diego Faleck pelo TEDx.`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=8PDLTvJf46g`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Já assisti!', 'dia6.12')
        ], {
            columns: 1
        })))
})

d6.action('dia6.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Gostou do vídeo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Negociação é muito importante!', 'dia6.13')
        ], {
            columns: 1
        })))
})

d6.action('dia6.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A negociação é uma ferramenta essencial para todas as áreas de nossas vidas. `)
    await ctx.replyWithMarkdown(`Negociar envolve um *processo racional e lógico*, com o uso da * 🧠 ❤️ inteligência emocional* (lembra dessa Soft Skill?).`)
    await ctx.replyWithMarkdown(`Ter a habilidade em negociar determina se pode ou não influenciar seu ambiente!`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20005.jpg?v=1653394496489`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia6.14')
        ], {
            columns: 1
        })))
})

d6.action('dia6.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você sabia que os negociadores, as pessoas a quem comunicamos algo e nos defrontamos (encaramos/enfrentamos), poderiam ser agrupados em 4️  quatro estilos básicos?`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20006.jpg?v=1653394496668`)
    await ctx.replyWithMarkdown(`O negociador com o estilo *catalizador* tende a ser extremamente 💡 criativo, sempre com novas ideias, entusiasta dos grandes empreendimentos, empreendedor.`)
    await ctx.replyWithMarkdown(`É a pessoa das coisas 🆕 novas, dos grandes projetos e decisões.`)
    await ctx.replyWithMarkdown(`Eventualmente, este negociador pode ser visto como superficial, irreal, estratosférico, em suas decisões e ações.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar', 'dia6.15')
        ], {
            columns: 1
        })))
})

d6.action('dia6.15', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20007.jpg?v=1653394496571`)
    await ctx.replyWithMarkdown(`O *apoiador* é aquele que considera que os 👧 🧔 👵 seres humanos são mais importantes que qualquer trabalho. `)
    await ctx.replyWithMarkdown(`Aprecia atuar sempre em 👯‍♀️ equipe, procura agradar os outros e fazer amigos.`)
    await ctx.replyWithMarkdown(`Eventualmente, pode ser visto como incapaz de cumprir ⏱️ prazos, desenvolver projetos... Enfim, é visto mais como um missionário do que como um executivo.`)
    await ctx.replyWithMarkdown(`Suas decisões são mais 🐌 lentas e ele sempre busca não melindrar a outra parte.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia6.16')
        ], {
            columns: 1
        })))
})

d6.action('dia6.16', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20008.jpg?v=1653394496879`)
    await ctx.replyWithMarkdown(`O *controlador* é aquele que toma decisões 🏎️ rápidas, está geralmente preocupado com o uso do seu tempo, com redução de custos.`)
    await ctx.replyWithMarkdown(`Nas discussões não faz rodeios, vai 🙋 direto ao assunto. É organizado, conciso, objetivo. `)
    await ctx.replyWithMarkdown(`Sua meta básica é conseguir 📈 resultados. `)
    await ctx.replyWithMarkdown(`Eventualmente pode ser visto como insensível às pessoas, 😠 durão, carrasco...`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20009.jpg?v=1653394497163`)
    await ctx.replyWithMarkdown(`O analítico é aquele que adora fazer ❓❔ perguntas, obter o máximo de informações e coletar todos os 📊 dados disponíveis, sempre se preocupando em saber todos os detalhes de cada empreendimento antes de iniciar qualquer tarefa ou tomar qualquer decisão.`)
    await ctx.replyWithMarkdown(`Eventualmente, esse negociador pode ser visto como perfeccionista, 📐detalhista em excesso, procrastinador...`)
    await ctx.replyWithMarkdown(`Depois de conhecer os estilos, qual você considera o melhor?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Catalisador', 'dia6.17'),
      Markup.callbackButton('Apoiador', 'dia6.17'),
      Markup.callbackButton('Controlador', 'dia6.17'),
      Markup.callbackButton('Analítico', 'dia6.17')      
        ], {
            columns: 1
        })))
})

d6.action('dia6.17', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Agora que tal descobrir que tipo de negociador você é?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim! Tenho curiosidade como um bom negociador!', 'dia6.18')
        ], {
            columns: 1
        })))
})

d6.action('dia6.18', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20010.gif?v=1653394486467`)
    await ctx.replyWithMarkdown(`Acesse o link e faça um teste elaborado por Simone Simon, especialista em negociação pela Harvard Law School! `)
    await ctx.replyWithMarkdown(`🔗 https://www.uol.com.br/universa/quiz/2016/11/02/que-tipo-de-negociador-e-voce.htm`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Terminei o teste!', 'dia6.19')
        ], {
            columns: 1
        })))
})


d6.action('dia6.19', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Espero que tenha gostado do teste e que tenha ajudado na *missão do autoconhecimento*!`)
    await ctx.replyWithMarkdown(`E assim terminamos o nosso dia 6!`)
    await ctx.replyWithMarkdown(`E quando estiver perante a uma 😨 adversidade:`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA6_%20011.jpg?v=1653394496290`)
    await ctx.replyWithMarkdown(`Até a próxima, ser humano em evolução!`)
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     007      ❌\n❌❌❌❌❌❌*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acessar dia 7!', 'dia7'),
      Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})

d6.action('dia7', Stage.enter('dia7'))

d6.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d6.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia6