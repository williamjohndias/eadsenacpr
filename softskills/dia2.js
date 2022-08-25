const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d2 = new Composer()
// ------------------
//! curso: soft_skills DIA 2
// ------------------
let progresso = '';

const dia2 = new WizardScene('dia2',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithPhoto('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/capa.png')
        await ctx.replyWithMarkdown(`*Olá, ${nome}*`) 
        await ctx.replyWithMarkdown(`Vamos para mais desenvolvimento pessoal e profissional? Estamos no dia 2️⃣ da nossa trilha das Soft Skills!`) 
        await ctx.replyWithMarkdown(`Até esse momento vimos o conceito de Soft Skills e as diferenciamos das Hard Skills. `) 
        await ctx.replyWithMarkdown(`Agora iremos falar de como as Soft Skills se enquadram no 🧑🏽‍💼 mundo do trabalho.`) 
        await ctx.replyWithMarkdown(`Já consegue responder o porquê de as Soft Skills serem tão importantes para o futuro?`,
          Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Sim!', 'dia2.1'),
            Markup.callbackButton('Não!', 'dia2.1'),
            Markup.callbackButton('Talvez!', 'dia2.1')
              ], {
                  columns: 1
              })))
    },
    d2
)


  
  d2.action('dia2.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`No decorrer das ⌛ últimas décadas, as Soft Skills ganharam cada vez mais **confiança e atenção** no que diz respeito ao futuro do trabalho. `) 
    await ctx.replyWithPhoto('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20001.jpg?v=1652375898733')
    await ctx.replyWithMarkdown(`É o que aponta um 📃 relatório chamado “O Futuro do Trabalho”, do **Fórum Econômico Mundial**. Conhece esse Fórum?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('É um evento que debate sociopolítica, economia e meio ambiente.', 'dia2.2'),
        Markup.callbackButton('É um evento de comércio de bens e serviços.', 'dia2.2')
          ], {
              columns: 1
          })))
  })
  
  d2.action('dia2.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20002.jpg?v=1652375898378')
    await ctx.replyWithMarkdown(`O 🤝🏼 Fórum Econômico Mundial (FEM) é um evento que acontece anualmente, sempre no fim do mês de janeiro, em Davos, na 🇨🇭 Suíça. `)
    await ctx.replyWithMarkdown(`Ele foi criado com o intuito de debater questões 🧑🏾‍🤝‍🧑🏼 sociopolíticas, 💰 econômicas e 🌳 ambientais.`)
    await ctx.replyWithMarkdown(`Voltando ao relatório do FEM... Ele elencou  1️⃣ 0️⃣ Soft Skills que estarão em alta no mercado de trabalho até 2025.`)
    await ctx.replyWithMarkdown(`1.	Pensamento analítico e inovação\n\n2.	Aprendizagem ativa e estratégias de aprendizado\n\n3.	Criatividade\n\n4.	Liderança\n\n5.	Uso, monitoramento e controle de tecnologias\n\n6.	Resiliência, tolerância ao estresse e flexibilidade\n\n7.	Inteligência emocional\n\n8.	Experiência do usuário\n\n9.Ser orientado a servir o cliente\n\n10.	Persuasão e negociação`)
  
    await ctx.replyWithMarkdown(`E aí?! Tem *desenvolvido* alguma Soft Skill da lista?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Estava por fora!', 'dia2.3'),
        Markup.callbackButton('Sem dúvida!', 'dia2.3'),
        Markup.callbackButton('Vou atrás disso com o Senac!', 'dia2.3')
          ], {
              columns: 1
          })))
  })
  
  d2.action('dia2.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Só não pense que esse relatório do FEM é raso! Ele foi elaborado por meio de entrevistas e procurou 291 🏢 empresas ao redor do 🗺️ mundo, que, juntas, representam cerca de 7,7 milhões de funcionários.`)
    await ctx.replyWithMarkdown(`Vamos para mais ℹ️ informações sobre empregabilidade?`)
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_-003.gif?v=1652375899349') // imagem video
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=lXa1o7dFMYc`) // link video
    await ctx.replyWithMarkdown(`Você acha que desenvolver habilidades interpessoais é uma preocupação dos tempos atuais?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Com certeza.', 'dia2.4'),
        Markup.callbackButton('Sem dúvida que não.', 'dia2.4')
          ], {
              columns: 1
          })))
  })
  
  d2.action('dia2.4', async ctx => {
    progresso = ctx.callbackQuery.data
      await ctx.replyWithMarkdown(`As *Soft Skills sempre existiram*. Vamos avançar com um pouco de história. `)
      await ctx.replyWithMarkdown(`Afinal de contas, o 📜 passado é importante porque ajuda a entender o 📱 futuro.`)
      await ctx.replyWithMarkdown(`Platão, o antigo filósofo 🇬🇷 grego, dizia que: `)
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20003.jpg?v=1652377150849`)
      await ctx.replyWithMarkdown(`Quando Platão disse *“Todo”* não se referia apenas a habilidades técnicas. O todo inclui também o desenvolvimento 🧠 intelectual, 💪 físico, ⚖️ moral e 🙌 espiritual. Ou seja, também são Soft Skills!`)
      await ctx.replyWithMarkdown(`Platão acreditava que ao alcançarmos o conhecimento em plenitude nos tornaremos melhores e mais 😊 felizes.`)
      await ctx.replyWithMarkdown(`Entenda que é complicado definir com exatidão quando e como foram contextualizadas as Soft Skills.`)
      await ctx.replyWithMarkdown(`Quer arriscar um palpite? Quando você acha que o termo foi usado pela primeira vez?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('1️⃣ – Em treinamentos militares.', 'dia2.5'),
          Markup.callbackButton('2️⃣ – Em entrevistas de emprego.', 'dia2.5'),
          Markup.callbackButton('3️⃣ – Em jogos olímpicos. ', 'dia2.5')
          ], {
              columns: 1
          })))
  })
  
  d2.action('dia2.5', async ctx => {
    progresso = ctx.callbackQuery.data
      await ctx.replyWithMarkdown(`Resposta correta: Em treinamentos militares.`)
      await ctx.replyWithMarkdown(`O termo Soft Skills foi primeiramente utilizado em 1959, quando o exército 🇺🇸 americano resolveu investir forte em *processos de treinamento* que incluíam a *utilização da tecnologia no fluxo de trabalho* em busca de uma melhora na *eficiência do aprendizado*.`)
      await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20004.gif')
      await ctx.replyWithMarkdown(`Viajando para os tempos atuais, entenda que o conceito vem ganhando cada vez mais a atenção que merece. `)
      await ctx.replyWithMarkdown(`Confira o papel das Soft Skills no ambiente de 💼 trabalho atual e moderno!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Avançar', 'dia2.6')
    ], {
        columns: 1
    })))
})

d2.action('dia2.6', async ctx => {    
  progresso = ctx.callbackQuery.data  
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20005.jpg?v=1652377148529`)
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20006.jpg?v=1652377149454`)
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20007.jpg?v=1652377149793`)
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20008.jpg?v=1652377150193`)
      await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20009.jpg?v=1652377148747`)
      await ctx.replyWithMarkdown(`Como deverá ser o 🤖 profissional do futuro? Ou seria do presente? `)
      await ctx.replyWithMarkdown(`Confira a resposta no Ted Talk com Michelle Schneider, gerente de vendas e publicidade na maior rede social profissional do mundo, o LinkedIn.`)
      await ctx.replyWithMarkdown(`Clique no play, gire seu celular e boa reflexão!`)
      await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_-003.gif?v=1652375899349')
      await ctx.reply('https://youtu.be/9G5mS_OKT0A',
          Extra.markup(Markup.inlineKeyboard([
              Markup.callbackButton('Avançar', 'dia2.7')
          ], {
              columns: 1
          })))
  })
  
  d2.action('dia2.7', async ctx => {
    progresso = ctx.callbackQuery.data
      await ctx.replyWithMarkdown(`E aí! A palestra da Michelle Schneider te inspirou?`)
      await ctx.replyWithMarkdown(`*Ser é mais importante do que ter!*`)
      await ctx.replyWithMarkdown(`Aprender a ser uma pessoa melhor é puro 🌱 crescimento! E compartilhar conhecimento é um ato de humanidade!`)
      await ctx.replyWithMarkdown(`Todos os dias estamos aprendendo, ou até ensinando Soft Skills. E isso ocorre desde muito cedo em nossas vidas...`)
      await ctx.replyWithMarkdown(`Pais, amigos ou 👩‍🏫 professores não te ensinaram a agir de forma ética? Isso é aprender uma soft skill!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Avançar!', 'dia2.8')
        ], {
            columns: 1
        })))
})
d2.action('dia2.8', async ctx => {
  progresso = ctx.callbackQuery.data
      await ctx.replyWithMarkdown(`Você nunca motivou alguém a usar a imaginação para agir 💡 criativamente? Isso é ensinar a desenvolver uma habilidade!`)
      await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20004.gif?v=1652444912145')
      await ctx.replyWithMarkdown(`Gostou do que viu? Se gostou, reflita! Se refletiu, aplique! Se aplicou, evoluiu!`)
      await ctx.replyWithMarkdown(`Até logo, cidadão do mundo! Amanhã tem mais! `)
      await ctx.replyWithMarkdown(`😎`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Acessar dia 3!', 'dia3'),
          Markup.callbackButton('❎ Sair', 'sair')
          ], {
              columns: 1
          })))
  })
  

  d2.action('dia3', Stage.enter('dia3'))

  d2.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d2.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })




module.exports = dia2