const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')

const d3 = new Composer()

// ------------------
//! curso: soft_skills DIA 3
// ------------------

let progresso = "";

const dia3 = new WizardScene('dia3',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá! Aluno(a)*`) 
        await ctx.replyWithMarkdown(`Animada(o) para mais conhecimento?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Claro!', 'dia3.1')
          ], {
              columns: 1
          })))
    },
    d3
)


d3.action('dia3', async ctx => {
  progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*Olá! ${nome}*`) 
    await ctx.replyWithMarkdown(`Animada(o) para mais conhecimento?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Claro!', 'dia3.1')
        ], {
            columns: 1
        })))
})

d3.action('dia3.1', async ctx => {
    progresso = ctx.callbackQuery.data    
    await ctx.replyWithMarkdown(`Depois de conceitos e mercado de trabalho, vamos conhecer as Soft Skills!`) 
    await ctx.replyWithMarkdown('Nesse dia você verá duas: *resolução de problemas complexos* e *inteligência emocional*!')
    await ctx.replyWithMarkdown('Iniciaremos pela Soft Skill que nos faz “pensar fora da 🎁 caixa”.')
    await ctx.replyWithMarkdown(`O que você entende por resolução de problemas complexos?`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Uma conta matemática complexa.', 'dia3.2'),
      Markup.callbackButton('Um obstáculo na vida profissional.', 'dia3.2'),
      Markup.callbackButton('Resolver a equação: gasto mais do que ganho.', 'dia3.2')
        ], {
            columns: 1
        })))
})

d3.action('dia3.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`As chamadas habilidades de resolução de problemas complexos são muito mais do que apenas identificar simples obstáculos diários no trabalho.`)
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20001.gif?v=1652450250910')
    await ctx.replyWithMarkdown(`Resolver problemas complexos é a capacidade de criar 🧩 soluções além dos métodos tradicionais.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia3.3')
          ], {
              columns: 1
          })))
})

d3.action('dia3.3', async ctx => {    
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Na prática, é combinar ⚙ processos bem definidos para resolver problemas que nem sempre são certos.`)
    await ctx.replyWithMarkdown(`Esta é uma das competências do futuro, porque cada vez mais nós teremos que saber atuar em um cenário de 🚀 revolução tecnológica.`)
    await ctx.replyWithMarkdown(`Resolver problemas altamente complexos significa **analisar** o problema de **forma clara e objetiva** (como um diagnóstico).`)
    await ctx.replyWithMarkdown(`Também é ser capaz de se livrar do problema e **pensar racionalmente**, **reestruturar o problema** e apresentar **novas ideias** para resolver o problema de forma criativa. `)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20002.gif?v=1652450250254`)
    await ctx.replyWithMarkdown(`Sabe por que os profissionais com essa habilidade são muito valorizados?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Desconfio!', 'dia3.4')
            ], {
                columns: 1
            })))
})

d3.action('dia3.4', async ctx => {
  progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Porque demonstram uma combinação de 💡criatividade, pensamento ♟estratégico e 🛡 segurança em suas ações. É a combinação perfeita de *emoção e inteligência cognitiva*.`)
    await ctx.replyWithMarkdown(`A importância da resolução de problemas complexos no mercado de trabalho é cada vez maior. Para quem quer progredir na área profissional, desenvolvê-la é um passo importante.`)
    await ctx.replyWithMarkdown(`E como desenvolver a habilidade de resolver problemas altamente complexos?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Gostaria de saber!', 'dia3.5')
            ], {
                columns: 1
            })))
})

d3.action('dia3.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Confira algumas dicas para estimular esse tipo de pensamento!`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20003.jpg?v=1652450955223`)
    await ctx.replyWithMarkdown(`Não apenas conhecimentos relacionados à sua função ou cargo em empresa ou de interesse pessoal, mas também a outras áreas do conhecimento!`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia3.6')
      ], {
          columns: 1
      })))
})
    


d3.action('dia3.6', async ctx => {    
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20004.jpg?v=1652450955111`)
    await ctx.replyWithMarkdown(`Na internet você encontra alguns sites que oferecem estímulos lógicos. Um bem simples, divertido e com desafios diários é o https://term.ooo/. Provoque-se!`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia3.7')
      ], {
          columns: 1
      })))
})

d3.action('dia3.7', async ctx => {   
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20005.jpg?v=1652450955392`)
    await ctx.replyWithMarkdown(`Isso pode ser feito questionando seu próprio hábito, ✎ anotando ideias, sonhando acordado. E outra grande dica: tenha *referências diferentes*!`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia3.8')
      ], {
          columns: 1
      })))
})    
    
d3.action('dia3.8', async ctx => { 
  progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20006.jpg?v=1652450956133`)
    await ctx.replyWithMarkdown(`Abrir os 👀 olhos para uma outra realidade te faz repensar sobre seus próprios conceitos. Isso muda nossa visão de 🌎 mundo.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia3.9')
      ], {
          columns: 1
      })))
})    

d3.action('dia3.9', async ctx => {    
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20008.jpg?v=1652450954732`)
    await ctx.replyWithMarkdown(`Quer uma técnica eficaz? Assista ao vídeo da psicóloga Gabriela Affonso, que apresenta uma maneira de resolver problemas em 5 etapas! `)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=zzKg7rDB8gQ`)
    await ctx.replyWithMarkdown(`Depois do que viu, se sente motivada (o) para encarar os problemas com outro 🧐 ponto de vista?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Vou tentar.', 'dia3.10'),
        Markup.callbackButton('Vou vencer.', 'dia3.10'),
        Markup.callbackButton('Vou crescer.', 'dia3.10')
        ], {
            columns: 1
        })))
})

d3.action('dia3.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Vamos para outra Soft Skill?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Claro!', 'dia3.11')
        ], {
            columns: 1
        })))
})

d3.action('dia3.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A Soft Skill da vez é a *inteligência emocional*!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20008.gif?v=1652453699409`)
    await ctx.replyWithMarkdown(`Sabe do que se trata?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Ter autoconhecimento para identificar sentimentos.', 'dia3.12'),
        Markup.callbackButton('Ter autoconhecimento para lidar mais fácil com emoções.', 'dia3.12'),
        Markup.callbackButton('Ter QI alto.', 'dia3.12')
        ], {
            columns: 1
        })))
})

d3.action('dia3.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A inteligência emocional é um conceito da psicologia que caracteriza o indivíduo capaz de 🕵 **identificar seus sentimentos e suas emoções** com mais facilidade.`)
    await ctx.replyWithMarkdown(`A inteligência emocional não trata de conhecimentos de cunho 🧠 intelectual, 🔬 científico ou 📚 acadêmico, e sim sobre saber reconhecer e lidar com sentimentos e emoções, *visando o desenvolvimento pessoal e profissional*.`)
    await ctx.replyWithMarkdown(`🤔 Você pode estar se perguntando o que ganhamos com esse tipo de habilidade...`)
    await ctx.replyWithMarkdown(`Essa habilidade, quando bem trabalhada, favorece o *bom 👥 relacionamento* entre as pessoas, permitindo um *maior entendimento nas relações pessoais* e a *melhor interação (e comunicação)* no trabalho. `)
    await ctx.replyWithMarkdown(`Quer mais?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Claro!', 'dia3.13')
        ], {
            columns: 1
        })))
})

d3.action('dia3.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Além disso, a inteligência emocional influencia, de forma positiva, a saúde física e mental. `)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20009.gif?v=1652453699465`)
    await ctx.replyWithMarkdown(`Sim! Ela previne transtornos psicológicos, como ansiedade e depressão, bem como distúrbios psicossomáticos.`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Avançar!', 'dia3.14')
        ], {
            columns: 1
        })))
})

d3.action('dia3.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Agora vamos para a pergunta básica: como desenvolver a habilidade de inteligência emocional?`,    
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Com conhecimento.', 'dia3.15'),
        Markup.callbackButton('Com dedicação.', 'dia3.15'),
        Markup.callbackButton('Com vontade de se desenvolver.', 'dia3.15')
        ], {
            columns: 1
        })))  
})

d3.action('dia3.15', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Desenvolver a inteligência emocional é explorar seu próprio comportamento. Por isso, é necessário *🪞 observar a si próprio e se avaliar*!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20010.gif?v=1652458883035`)
    await ctx.replyWithMarkdown(`Entenda que em alguns momentos a observação deve acontecer quando situações diversas se colocarem diante de você, independentemente de serem ☺️ boas ou 😟 ruins.`)
    await ctx.replyWithMarkdown(`Ao avaliar as situações, observe também quais são as reações da mente e do corpo, além das sensações e dos pensamentos que foram instigados.`)
    await ctx.replyWithMarkdown(`Percebe que é puro *autoconhecimento*?`)
    await ctx.replyWithMarkdown(`Então *analise seu próprio comportamento, procure dominar suas emoções, aprenda a trabalhar com emoções negativas e tente lidar com a pressão do dia a dia*.`)
    await ctx.replyWithMarkdown(`Vamos para mais um vídeo?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Vamos sim!', 'dia3.16')
        ], {
            columns: 1
        })))
})

d3.action('dia3.16', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Assista a um vídeo do professor João Francisco que nos apresenta os hábitos para desenvolver a inteligência emocional. Vamos de play?`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=mKmFpKSBPhk`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Avançar!', 'dia3.17')
        ], {
            columns: 1
        })))
})

d3.action('dia3.17', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para finalizarmos nosso dia de resolução de problemas e inteligência emocional, que tal um teste?`)
    await ctx.replyWithMarkdown(`Topa descobrir qual o seu nível de inteligência emocional?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Eu encaro o desafio!', 'dia3.18')
        ], {
            columns: 1
        })))
})

d3.action('dia3.18', async ctx => {
  progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20010.gif?v=1654872238616')
    await ctx.replyWithMarkdown(`Acesse o link e responda as questões conforme você realmente age e não como pensa que deveria agir, ou como gostaria de agir! `)
    await ctx.reply(`https://www.oficinadepsicologia.com/test/e-emocionalmente-inteligente/`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Terminei o teste!', 'dia3.19')
        ], {
            columns: 1
        })))
})

d3.action('dia3.19', async ctx => {
  progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Gostou do resultado? Te fez refletir?`)
    await ctx.replyWithMarkdown(`Esperamos que sim! E nunca esqueça, as emoções influenciam diretamente na vida pessoal ou profissional! `)
    await ctx.replyWithMarkdown(`E para encerrarmos, uma dica de 🥇 ouro: fugir de conflitos não te ajuda a desenvolver a inteligência emocional!`)
    await ctx.replyWithMarkdown(`A 🔑 chave está em lidar com as próprias emoções e com as dos outros!`)
    await ctx.replyWithMarkdown(`Até logo, desbravador do autoconhecimento! Amanhã tem mais!`)                                 
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     004      ❌\n❌❌❌❌❌❌*`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Acessar o dia 4!', 'dia4'),
        Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})


d3.action('dia4', Stage.enter('dia4'))

d3.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d3.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })








module.exports = dia3