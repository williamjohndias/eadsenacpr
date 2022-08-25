const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d4 = new Composer()

// ------------------
//! curso: soft_skills DIA 4
// ------------------

let progresso = "";

const dia4 = new WizardScene('dia4',
    async ctx => {
        
        ctx.wizard.next()
        progresso = ctx.callbackQuery.data
        await ctx.replyWithMarkdown(`*Olá! Aluno(a)*`) 
        await ctx.replyWithMarkdown(`Já se conhece melhor? Quer avançar na trilha do autoconhecimento?`,
          Extra.markup(Markup.inlineKeyboard([
            Markup.callbackButton('Não tenho dúvida que sim!', 'dia4.1')
            ], {
                columns: 1
            })))
    },
    d4
)


d4.action('dia4.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`No nosso dia 4 será focado na 💡 criatividade! Começaremos pelo *pensamento criativo* para fecharmos com *criatividade*.`) 
    await ctx.replyWithMarkdown('Que liguem os 🏎️ motores porque vamos começar!')
    await ctx.replyWithMarkdown(`Quando falamos em criatividade, o que lhe vem em mente?`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Um inventor.', 'dia4.2'),
      Markup.callbackButton('Um publicitário.', 'dia4.2'),
      Markup.callbackButton('Um artista.', 'dia4.2')
        ], {
            columns: 1
        })))
})

d4.action('dia4.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Quando falamos de pensamento criativo muitas pessoas associam a um inventor, publicitário, artista, entre outros. São perfis de profissionais criativos mesmo!`)
    await ctx.replyWithVideo('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20001.gif?v=1654872326053')
    await ctx.replyWithMarkdown(`Pensar em criatividade no mundo do trabalho, também remete a área de criação gráfica de uma empresa, o fabuloso trabalho dos 🎨 designers. `)
    await ctx.replyWithMarkdown('No entanto, a aplicação do pensamento criativo pode ser usada em todas as áreas de um negócio. ')
    await ctx.replyWithMarkdown(`Sabe o porquê?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Sim!', 'dia4.3'),
        Markup.callbackButton('Não!', 'dia4.3'),
        Markup.callbackButton('Desconfio que sei a resposta!', 'dia4.3')
        ], {
            columns: 1
        })))
})

d4.action('dia4.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Ter pensamento criativo é pensar fora da forma usual, ou como gostamos de falar, “fora da 📦 caixa”.`)
    await ctx.replyWithMarkdown(`É expor meios que ainda não foram utilizados para a solução de um problema ou melhoria de um processo, por exemplo.`)
    await ctx.replyWithMarkdown(`Você está preparado para testar seu pensamento criativo?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Gosto de um teste!', 'dia4.4')
        ], {
            columns: 1
        })))
})

d4.action('dia4.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto('https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20002.gif?v=1652708922654')
    await ctx.replyWithMarkdown(`Descubra se realmente está usando todo o potencial da sua criatividade fazendo um teste do site Viver de Blog. Clique no link e boa descoberta!`)
    await ctx.replyWithMarkdown(`https://viverdeblog.typeform.com/to/Y1rtPf?typeform-source=viverdeblog.com`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Já terminei o teste!', 'dia4.5')
        ], {
            columns: 1
        })))
})

d4.action('dia4.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você acha que os pensamentos criativo e crítico andam juntos?`)
    await ctx.replyWithMarkdown(`Vamos para o vídeo!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=lUwUe6JiGJw`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Avançar', 'dia4.6')
        ], {
            columns: 1
        })))
})

d4.action('dia4.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você se considera uma pessoa criativa?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim!', 'dia4.7'),
      Markup.callbackButton('Não!', 'dia4.7')
        ], {
            columns: 1
        })))
})

d4.action('dia4.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para você, a criatividade é um talento ou uma competência que pode ser desenvolvida?`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Talento', 'dia4.8'),
        Markup.callbackButton('Competência que pode ser desenvolvida.', 'dia4.8')
        ], {
            columns: 1
        })))
})

d4.action('dia4.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A *criatividade* não é apenas um talento, mas uma *competência* que pode ser *desenvolvida e aperfeiçoada*. `)
    await ctx.replyWithMarkdown(`A criatividade nada mais é que o *ato de ser criativo*, aquela(e) que tem a capacidade de criar e propor ideias *inovadoras e disruptivas*.`)
    await ctx.replyWithMarkdown(`*__Algo disruptivo é aquilo que acaba por interromper o seguimento normal de um processo.__*`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20004.gif?v=1652709558757`)
    await ctx.replyWithMarkdown(`E pensando no mundo do trabalho, o que faz de alguém um profissional criativo? `)
    await ctx.replyWithMarkdown(`É aquele que demonstra ser *mais flexível*, *contesta os padrões* e vai além do óbvio. `)
    await ctx.replyWithMarkdown(`É aquele que costuma *sair da zona de conforto* e *busca fazer a diferença* por meio da experimentação.`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20005.jpg?v=1652709558249`)  
    await ctx.replyWithMarkdown(`Quer começar? `,
    Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Eu aceito o desafio!', 'dia4.9')
        ], {
            columns: 1
        })))
})

d4.action('dia4.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Assista a um vídeo que te apresenta o que precisa fazer para estimular a sua criatividade!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=KvTIr1LG4SE`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar', 'dia4.10')
        ], {
            columns: 1
        })))
})

d4.action('dia4.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sabemos que você já testou o potencial da sua criatividade. Que tal agora testar a criatividade de alguma pessoa do seu convívio?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quero aplicar esse teste!', 'dia4.11')
        ], {
            columns: 1
        })))
})

d4.action('dia4.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Então vamos lá! Você fará uma experiência que foi publicada na revista Behavior Research Methods.`)
    await ctx.replyWithMarkdown(`Tome nota dos ingredientes para aplicar esse teste:\n\nUma pessoa 👍\nUm papel 🧾\nUm lápis ✏️\n`)
    await ctx.replyWithMarkdown(`*1° Passo*\n\nExplique para a pessoa que você testará o nível de criatividade com um exercício com palavras simples, rápido e nada invasivo.`)
    await ctx.replyWithMarkdown(`*2° Passo*\n\nFaça uma lista com 10 substantivos e entregue para a pessoa.`)
    await ctx.replyWithMarkdown(`*3° Passo*\n\nPeça para a pessoa escrever ao lado de cada substantivo um verbo relacionado, obedecendo uma regra de ouro: não vale parar para pensar ou usar a borracha, tentar corrigir ou rasurar. A ideia é ser rápido e instintivo.`)
    await ctx.replyWithMarkdown(`*4° Passo*\n\nAvalie o resultado com a pessoa!`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Como faço a avaliação?', 'dia4.12')
        ], {
            columns: 1
        })))
})

d4.action('dia4.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você vai avaliar da seguinte maneira:\n\nQuanto mais inovador (ou “semanticamente distante”) for o verbo do substantivo, mais criativa a pessoa avaliada será dentro de suas habilidades artísticas e profissionais.`)
    await ctx.replyWithMarkdown(`Por exemplo:\n\nSe você sugere o substantivo “carvão” e a pessoa associa o verbo minerar, considere com “baixa distância semântica”, porque essa relação é muito óbvia.`)
    await ctx.replyWithMarkdown(`Mas se a pessoa associar verbos como “assar” e “cozinhar”, embora sejam relevantes para o substantivo, são menos óbvios. Ou seja, a distância semântica é maior.`)
    await ctx.replyWithMarkdown(`Agora o principal: apesar dos resultados, o teste não possui total eficácia no resultado. `)
    await ctx.replyWithMarkdown(`Confira o que o coautor do teste, o professor Jeremy Gray da Universidade Estadual de Michigan, apresenta: `)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20006.jpg?v=1652710478310`)
    await ctx.replyWithMarkdown(`Você pode estar se perguntando qual o verdadeiro resultado do teste de criatividade.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Com certeza!', 'dia4.13')
        ], {
            columns: 1
        })))
})

d4.action('dia4.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`As pessoas podem ser criativas quando quiserem. `)
    await ctx.replyWithMarkdown(`E isso você também pode testar: caso a pessoa tenha associado verbos óbvios, peça para que ela associe verbos criativos que se relacionem aos substantivos.`)
    await ctx.replyWithMarkdown(`Provavelmente a pessoa vai ativar a criatividade para responder!`)
    await ctx.replyWithMarkdown(`Interessante, não? `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Muito interessante!', 'dia4.14')
        ], {
            columns: 1
        })))
})

d4.action('dia4.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`E com esse teste encerramos o nosso dia de criatividade!`)
    await ctx.replyWithMarkdown(`Espero que o conteúdo te ajude a despertar pensamentos criativos no seu dia a dia!`)
    await ctx.replyWithMarkdown(`E não se esqueça: a criatividade está em você, basta desenvolvê-la!`)
    await ctx.replyWithMarkdown(`Até o próximo dia da nossa jornada de Soft Skills!`)
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     005      ❌\n❌❌❌❌❌❌*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acessar o dia 5', 'dia5'),
      Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})


d4.action('dia5', Stage.enter('dia5'))

  d4.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d4.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })








module.exports = dia4