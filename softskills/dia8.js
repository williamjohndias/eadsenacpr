const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d8 = new Composer()


// ------------------
//! curso: soft_skills DIA 8
// ------------------

let progresso = "";

const dia8 = new WizardScene('dia8',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)*`)
        await ctx.replyWithMarkdown(`Muitos conflitos resolvidos por aí?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Se vier algum resolvo!', 'dia8.1')
            ], {
                columns: 1
            })))
    },
    d8
)



d8.action('dia8.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`No nosso novo dia de Soft Skills, vamos tratar de algo *bem cotidiano*.`)
    await ctx.replyWithMarkdown(`Algo que com possivelmente você *experienciou no dia de hoje*. Quer ver?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Essa quero ver!', 'dia8.2')
        ], {
            columns: 1
        })))
})

d8.action('dia8.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você decidiu realizar esses estudos logo após ter feito o dia de “resolução de conflitos” ou deixou para outro momento?`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Logo após.', 'dia8.3'),
      Markup.callbackButton('Em outro momento.', 'dia8.3')
        ], {
            columns: 1
        })))
})

d8.action('dia8.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sem dúvida a sua resposta fez parte de uma decisão que você tomou, baseada na tua disponibilidade, disposição, vontade, entre outros.`)
    await ctx.replyWithMarkdown(`E é sobre isso que iremos tratar!`)
    await ctx.replyWithMarkdown(`*🤔 Tomada de decisão*!`)
    await ctx.replyWithMarkdown(`Antes de começarmos vale um sonoro 👏🏼 👏🏼 👏🏼 👏🏼 👏🏼 *PARABÉNS* por ter chego até aqui! `)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20001.gif?v=1653400304303`)
    await ctx.replyWithMarkdown(`Você tem feito uma 🌞 🚶🏻‍♀️ grande caminhada pelo mundo das Soft Skills!`)
    await ctx.replyWithMarkdown(`Garanto que foi uma boa decisão!`,  
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Obrigado!', 'dia8.4')
        ], {
            columns: 1
        })))
})

d8.action('dia8.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Então vamos lá! O ponto de partida será o *conceito*.`)
    await ctx.replyWithMarkdown(`A tomada de decisão pode ser definida como o *processo de decidir sobre algo importante*, especialmente em um grupo de pessoas ou em uma organização.`)
    await ctx.replyWithMarkdown(`Ela envolve a seleção de um *curso de ação* entre 🔢 duas ou mais *alternativas possíveis*, a fim de se chegar a uma *solução para um dado problema*.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia8.5')
        ], {
            columns: 1
        })))
})

d8.action('dia8.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20002.gif?v=1653400305055`)
    await ctx.replyWithMarkdown(`O *processo de tomada de decisão* no mundo do trabalho é feito por um conjunto de profissionais com o objetivo de *melhorar o funcionamento da empresa*.`)
    await ctx.replyWithMarkdown(`Dessa forma, se trata de uma *atividade contínua e dinâmica* que envolve todas as outras atividades pertencentes a uma empresa.`)
    await ctx.replyWithMarkdown(`Agora é com você: quais os ingredientes para a tomada de decisão em uma empresa?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Conhecimento científico.', 'dia8.6'),
      Markup.callbackButton('Habilidades técnicas. ', 'dia8.6'),
      Markup.callbackButton('Experiência profissional dos envolvidos.', 'dia8.6'),
      Markup.callbackButton('Todas as alternativas.', 'dia8.6')
        ], {
            columns: 1
        })))
})

d8.action('dia8.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Uma vez que é uma *atividade contínua*, o processo decisório desempenha uma grande importância no funcionamento de um negócio. `)
    await ctx.replyWithMarkdown(`Afinal, representa a *combinação entre conhecimento científico, habilidades técnicas e experiência profissional de todos*.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`Vamos para um vídeo?`)
    await ctx.reply(`https://www.youtube.com/watch?v=Ofzo2DrybCA`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia8.7')
        ], {
            columns: 1
        })))
})

d8.action('dia8.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Agora é hora de voltar a atenção para as tomadas de decisão, que estão diretamente ligadas as percepções que temos sobre as coisas. `)
    await ctx.replyWithMarkdown(`Vamos observar como essa ligação se estabelece!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20003.gif?v=1654525285492`)
    await ctx.replyWithMarkdown(`Como percepção e tomada decisões  🚶🏿‍♂️ 🚶‍♀️ caminham juntas? `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quero saber!', 'dia8.8')
        ], {
            columns: 1
        })))
})

d8.action('dia8.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para identificar um problema, que exige uma *escolha*, portanto uma decisão, precisamos primeiro * 🔍 identificar o problema*. `)
    await ctx.replyWithMarkdown(`Quando o estado atual das coisas se modifica, nos deparamos com uma situação onde precisamos escolher entre *alternativas*. `)
    await ctx.replyWithMarkdown(`Como quando seu 🚙 carro quebra no caminho para o trabalho, neste momento você precisa resolver o problema de locomoção a partir das alternativas que estão disponíveis, seja pegando um 🚕 táxi, um 🚌 ônibus ou solicitando uma carona. `)
    await ctx.replyWithMarkdown(`No mundo do trabalho nem sempre os problemas ficam tão evidentes, como no caso do carro quebrado. Por isso, a *boa percepção sobre o funcionamento da estrutura é tão importante*. `)
    await ctx.replyWithMarkdown(`Por isso, a *boa percepção sobre o funcionamento da estrutura é tão importante*.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia8.9')
        ], {
            columns: 1
        })))
})

d8.action('dia8.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20004.jpg?v=1654525278886`)
    await ctx.replyWithMarkdown(`Os 📊 dados que serão considerados na hora de tomar as decisões ficam por conta da percepção de cada pessoa responsável pelas escolhas.`)
    await ctx.replyWithMarkdown(`O *processo 🧠 racional de tomada de decisão* é uma técnica que possibilita que escolhas assertivas sejam feitas. `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Primeiro passo!', 'dia8.10')
        ], {
            columns: 1
        })))
})


d8.action('dia8.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Primeiro passo: *definir o problema*.`)
    await ctx.replyWithMarkdown(`Como você já deve saber, o problema existe quando alguma *situação precisa ser modificada a partir do estado existente para um estado que desejamos*. `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Segundo passo!', 'dia8.11')
        ], {
            columns: 1
        })))
})

d8.action('dia8.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Segundo passo: *identificar os critérios para a decisão*.`)
    await ctx.replyWithMarkdown(`Depois que você já definiu o problema é hora de *identificar os critérios de decisão* que serão importantes para resolver o problema. `)
    await ctx.replyWithMarkdown(`Aqui é preciso identificar quais *fatores precisam ser levados em conta* na hora de tomar a decisão.  `)
    await ctx.replyWithMarkdown(`Nesta etapa entram em jogo interesses, valores e outras preferências pessoais de quem vai tomar a decisão.  `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Terceiro passo!', 'dia8.12')
        ], {
            columns: 1
        })))
})

d8.action('dia8.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Terceiro passo: *atribuir peso aos critérios identificados*.`)
    await ctx.replyWithMarkdown(`Raramente os critérios identificados têm a mesma importância. Por isso é preciso *atribuir prioridades*. `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quarto passo!', 'dia8.4p')
        ], {
            columns: 1
        })))
})

d8.action('dia8.4p', async ctx => {
  progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Quarto passo: *desenvolver alternativas*.`)
  await ctx.replyWithMarkdown(`Depois de estabelecer o peso dos critérios é hora de *pensar nas alternativas*, sem a tentativa de avaliá-las. `,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Quinto passo!', 'dia8.13')
      ], {
          columns: 1
      })))
})

d8.action('dia8.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Quinto passo: *avaliar as alternativas*.`)
    await ctx.replyWithMarkdown(`Assim como atribuímos peso aos critérios agora precisamos *pensar nas implicações* de cada alternativa para que seja estabelecida também uma *ordem de prioridades* de acordo com os resultados trazidos por cada escolha. `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sexto passo!', 'dia8.14')
        ], {
            columns: 1
        })))
})

d8.action('dia8.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Sexto passo: *escolher a melhor alternativa*.`)
    await ctx.replyWithMarkdown(`Diante das listas de critérios e seus pesos, das alternativas e suas consequências é possível *identificar qual das possibilidades se encaixa melhor* naquilo que é esperado como resultado. `)
    await ctx.replyWithMarkdown(`Depois de todos esses passos, vamos para um teste?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Gosto de testes!', 'dia8.15')
        ], {
            columns: 1
        })))
})

d8.action('dia8.15', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Analise o checklist e conte quantas das ações fazem parte da sua vida:`)
    await ctx.replyWithMarkdown(`Analiso riscos e recompensas\n
Analiso consequências\n
Controlo emoção e impulso\n
Baseio-me em fatos e não em pessoas\n
Busco equilíbrio e moderação\n
Analiso vários cenários\n
Tomo cuidado com os momentos de glória\n
Fujo do imediatismo\n
Considero o médio e longo prazo\n
Mantenho os canais de comunicação abertos\n
Utilizo a lei de Pareto (20% das minhas ações são responsáveis por 80% dos meus resultados)\n
Mantenho a calma\n
Sei ouvir\n
Não procrastino\n
Sou atento aos detalhes\n
Tenho autoconfiança\n
Busco a transparências\n
Não confundo decisão com poder\n
`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Já contei minhas ações e quero feedback!', 'dia8.16')
        ], {
            columns: 1
        })))
})

d8.action('dia8.16', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`*6 ações!*`)
    await ctx.replyWithMarkdown(`Você está no Nível 3. 
Procure desenvolver mais ações da lista para tomar decisões mais práticas e eficientes\n
*De 7 a 12 ações!*
Você está no Nível 2. 
Procure desenvolver mais ações da lista para tomar decisões mais práticas e eficientes\n
*De 13 a 18 ações!*
Parabéns! Você está no Nível 1! 
Considere que suas ações são tomadas de forma prática e eficiente!
`)
    await ctx.replyWithMarkdown(`Gostou do teu resultado?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Gostei do resultado!', 'dia8.17'),
      Markup.callbackButton('Não gostei do resultado!', 'dia8.17')
        ], {
            columns: 1
        })))
})

d8.action('dia8.17', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Espero que o ☑️ checklist tenha ajudado para seu *autoconhecimento* e para te impulsionar para o desenvolvimento da habilidade de 🤔 tomada de decisão.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Que assim seja!', 'dia8.18')
        ], {
            columns: 1
        })))
})


d8.action('dia8.18', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para finalizarmos o nosso dia, nada melhor que um vídeo, não é mesmo?`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20003.gif?v=1652708923822`)
    await ctx.replyWithMarkdown(`Confira um TedX com Aline Jaeger, professora da Graduação em Letras e em Administração – Gestão para Inovação e Liderança Unisinos, que fala sobre como lidar com perdas e as escolhas.`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=ZlunaISides`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Já assisti!', 'dia8.19')
        ], {
            columns: 1
        })))
})

d8.action('dia8.19', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Espero que tenha gostado do vídeo!`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20005.jpg`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20006.jpg`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA8_%20007.jpg`)
    await ctx.replyWithMarkdown(`E assim fechamos o nosso dia de decisões!`)
    await ctx.replyWithMarkdown(`Obrigado por ter decidido continuar a sua busca de conhecimento conosco!`)
    await ctx.replyWithMarkdown(`Até a próxima, pessoa decisória!`)
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     009      ❌\n❌❌❌❌❌❌*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acessar dia 9!', 'dia9'),
      Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})



d8.action('dia9', Stage.enter('dia9'))

d8.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d8.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia8