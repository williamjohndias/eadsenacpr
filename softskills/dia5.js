const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')

const d5 = new Composer()


// ------------------
//! curso: soft_skills DIA 5
// ------------------

let progresso = "";

const dia5 = new WizardScene('dia5',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)*`)
        await ctx.replyWithMarkdown(`Teve pensamentos criativos? Driblou alguma necessidade com criatividade?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Não deu tempo ainda!', 'dia5.1'),
          Markup.callbackButton('Está na minha mente! ', 'dia5.1')
            ], {
                columns: 1
            })))
    },
    d5
)



d5.action('dia5.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Nesse novo dia vamos migrar da criatividade para uma competência que é puro sentimento: a 💕 *empatia*!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA5_%20001.gif?v=1652719961706`)
    await ctx.replyWithMarkdown(`Prepare-se para descobrir por que as pessoas empáticas serão os líderes do futuro!`)
    await ctx.replyWithMarkdown(`Com base no que você entende do assunto, responda: o que é empatia?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('O que nós sentimos em relação aos outros.', 'dia5.2'),
      Markup.callbackButton('É compreender a realidade através dos olhos dos outros.', 'dia5.2')
        ], {
            columns: 1
        })))
})

d5.action('dia5.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A empatia é tentar *entender os outros*, ter a capacidade de *ver e compreender* a realidade através dos *olhos dos outros*.`)
    await ctx.replyWithMarkdown(`Não devemos confundir empatia com simpatia. Ambos contribuem para um bom desenvolvimento das relações humanas, mas são conceitos distintos.`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA5_%20002.jpg?v=1652720350184`)
    await ctx.replyWithMarkdown(`A *simpatia* tem como objetivo *estar com o outro e agradar* e a *empatia* tem como objetivo *conhecer e compreender*.`)
    await ctx.replyWithMarkdown(`Empatia é a capacidade de se colocar, com precisão, “no lugar de outra pessoa”.`)
    await ctx.replyWithMarkdown(`Com 🎯 precisão para entender a situação, percepções e sentimentos do ponto de vista do outro.`)
    await ctx.replyWithMarkdown(`Além disso, ser capaz de comunicar essa compreensão de volta para a outra pessoa.`)
    
    await ctx.replyWithMarkdown(`Lembra da provocação sobre a empatia ser o ingrediente do líder do futuro?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Lembro sim!', 'dia5.3')
        ], {
            columns: 1
        })))
})

d5.action('dia5.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A resposta está no vídeo!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=B9WewLCiJ3w&feature=youtu.be`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia5.4')
        ], {
            columns: 1
        })))
})

d5.action('dia5.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Quando falamos de empatia nunca esqueça que sempre se trata do próximo. `)
    await ctx.replyWithMarkdown(`O desenvolvimento desta habilidade depende de sua disposição a 👂 ouvir e escutar as pessoas próximas a você.`)
    await ctx.replyWithMarkdown(`Vamos para algumas dicas para desenvolver a empatia?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Vamos sim!', 'dia5.5')
        ], {
            columns: 1
        })))
})

d5.action('dia5.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Parece redundante, mas quando for conversar com alguém e for sua vez de ouvir, deixe seu 🤳 celular de lado, desligue-o se possível. `)
    await ctx.replyWithMarkdown(`A pessoa deve se sentir à vontade e 🔒 segura quando está se abrindo contigo. `)
    await ctx.replyWithMarkdown(`Nunca ⚖️ julgue a posição da vida pessoal ou profissional em que a outra pessoa se encontra. `)
    await ctx.replyWithMarkdown(`Faça o possível para se sentir no lugar dessa pessoa e assim tentar 👐 ajudá-la.`)
    await ctx.replyWithMarkdown(`Não interrompa o 🚂 trem de pensamento da pessoa. Espere seu momento para falar.`)
    await ctx.replyWithMarkdown(`Aprenda a 🕵️‍♀️ identificar seus sentimentos desenvolvendo sua inteligência emocional.`)
    await ctx.replyWithMarkdown(`E 🌱 cultive sua curiosidade sobre estranhos.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Estranhos?', 'dia5.6')
        ], {
            columns: 1
        })))
})

d5.action('dia5.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sim! Estranhos!`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA5_%20004.gif?v=1652721015841`)
    await ctx.replyWithMarkdown(`Pessoas altamente empáticas têm uma ⁉️ curiosidade insaciável por estranhos! `)
    await ctx.replyWithMarkdown(`Elas vão falar com a pessoa sentada ao lado dela no 🚌 ônibus… `)
    await ctx.replyWithMarkdown(`Elas mantêm a curiosidade natural que todos nós tivemos quando 🧒 crianças. `)
    await ctx.replyWithMarkdown(`Elas acham outras pessoas mais interessantes do que elas mesmas, mas não querem interrogá-las, respeitando o conselho do escritor e historiador Studs Terkel: `)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA5_%20005.jpg?v=1652721088036`)
    await ctx.replyWithMarkdown(`Percebeu que a curiosidade é um 🗝️ elemento-chave para desenvolver a empatia?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Captei a mensagem!', 'dia5.7')
        ], {
            columns: 1
        })))
})

d5.action('dia5.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para avançar no entendimento, escute um 🎧 áudio: `)
    await ctx.replyWithAudio({
    url: `https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/AUDIO_SOFTSKILLS_DIA5_%20001.mp3?v=1652721193934`
    },
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia5.8')
        ], {
            columns: 1
        })))
})

d5.action('dia5.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A empatia mora em cada um de nós e ela é capaz de tornar o mundo mais 🌐 conectado, 🤝 colaborativo, 🍃 sustentável, ⚖️ justo e 🕊️ pacífico.`)
    await ctx.replyWithMarkdown(`Esse é o recado da bióloga, especialista em empatia, sustentabilidade e inovação social e pós-graduada em Neurociência e Psicologia Aplicada... Tati Fukamati.`)
    await ctx.replyWithMarkdown(`Vamos assistir a uma palestra sobre empatia que a Tati fez no TEDx?`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=M8sQwMZiBfM`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia5.9')
        ], {
            columns: 1
        })))
})

d5.action('dia5.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Muito boa essa palestra, não é mesmo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Gostei!', 'dia5.10')
        ], {
            columns: 1
        })))
})

d5.action('dia5.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Espero que a Tati Fukamati tenha te sensibilizado de que as pessoas precisam ter *empatia para o mundo crescer de uma maneira melhor*.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA5_%20005.gif?v=1652721654040`)
    await ctx.replyWithMarkdown(`Agora lanço uma pergunta para finalizarmos nosso dia: você tem sido empático?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim!', 'dia5.11'),
      Markup.callbackButton('Não!', 'dia5.11'),
      Markup.callbackButton('Sempre quando posso!', 'dia5.11')
        ], {
            columns: 1
        })))
})

d5.action('dia5.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Caso não tenha a empatia no seu dia a dia, sempre conseguimos aprender ou internalizar uma nova ideia!`)
    await ctx.replyWithMarkdown(`Caso já faça parte da sua vida, nunca deixe de praticar a empatia em todas as suas relações!`)
    await ctx.replyWithMarkdown(`Até a próxima, meu coração bom! Amanhã tem mais! `)
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     006      ❌\n❌❌❌❌❌❌*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acessar dia 6!', 'dia6'),
      Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})

d5.action('dia6', Stage.enter('dia6'))

d5.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d5.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia5