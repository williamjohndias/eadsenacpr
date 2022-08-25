const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d10 = new Composer()

// ------------------
//! curso: soft_skills DIA 10
// ------------------

let progresso = "";

const dia10 = new WizardScene('dia10',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)* Tudo bem?`)
        await ctx.replyWithMarkdown(`Chegamos no último dia dos nossos estudos de Soft Skills!`)
        await ctx.replyWithMarkdown(`Fez uma boa jornada, não é mesmo? 😄`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Sim!', 'dia10.1')
            ], {
                columns: 1
            })))
    },
    d10
)


d10.action('dia10.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`👏👏👏👏👏 Parabéns pelo tempo que disponibilizou para o seu desenvolvimento!`)
    await ctx.replyWithMarkdown(`E é sobre essa habilidade que trataremos: *gestão do ⌛ tempo no mundo do 🧑‍💼 trabalho*!`)
    await ctx.replyWithMarkdown(`Com relação ao seu trabalho, o que mudou em 10 anos? Em 5 anos? Em 1 ano? `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Ja pensei!', 'dia10.2')
        ], {
            columns: 1
        })))
})

d10.action('dia10.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`É com essa 😁 provocação que iniciamos os nossos estudos. `)
    await ctx.replyWithMarkdown(`Entenda de antemão que as *tecnologias digitais* nos fizeram *mudar processos de trabalho*. `)
    await ctx.replyWithMarkdown(`Também nos levaram a uma adaptação a esse novo modelo de interação.`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('O que foi adaptado?', 'dia10.3')
        ], {
            columns: 1
        })))
})

d10.action('dia10.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Se antes um documento levava semanas para ser desenvolvido e entregue ao seu destino final (datilografado ou ✍🏾 escrito à mão e enviado pelos 📮 Correios), agora, com um 🖱️ clique, ele pode ser direcionado a quem quer que seja.`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20001.gif?v=1654535928451`)
    await ctx.replyWithMarkdown(`As reuniões presenciais estão, cada vez mais, sendo substituídas por reuniões via 💻 webconferência na tentativa de otimizar tempo e espaço. `)
    await ctx.replyWithMarkdown(`Até aquela entrevista de emprego em outro estado ou país foi modificada com a ajuda de um “simples” 📲 aplicativo.`,  
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia10.4')
        ], {
            columns: 1
        })))
})

d10.action('dia10.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Antigamente, as faturas eram emitidas por meio de inúmeras 📃 planilhas impressas. `)
    await ctx.replyWithMarkdown(`As pessoas também recebiam pelos Correios um número considerável de boletos em casa, e passavam horas na fila do 🏦 banco para efetuar os pagamentos. `)
    await ctx.replyWithMarkdown(`Hoje, aplicativos financeiros e de cobrança geram essa burocracia online mais rapidamente. `)
    await ctx.replyWithMarkdown(`Os pagamentos podem ser feitos, por exemplo, com um toque no seu celular.`)
    await ctx.replyWithMarkdown(`O que essas situações têm em comum?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Tempo', 'dia10.5'),
      Markup.callbackButton('Dinheiro', 'dia10.5'),
      Markup.callbackButton('Espaço', 'dia10.5')
        ], {
            columns: 1
        })))
})

d10.action('dia10.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`O ⌛ tempo! A tecnologia nos poupa tempo, dinheiro e espaço.`)
    await ctx.replyWithMarkdown(`Em consequência disso, a “facilidade” encontrada na mediação das tecnologias nos levou a trabalhar mais, por mais tempo e em qualquer lugar. `)
    await ctx.replyWithMarkdown(`Não que antes não houvesse sobrecarga de trabalho, mas hoje você é instigado a se desenvolver mais.`)
    await ctx.replyWithAudio(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/AUDIO_SOFTSKILLS_DIA10_%20001.mp3?v=1656352521178`)
    await ctx.replyWithMarkdown(`Vamos falar um pouco da teoria sobre o assunto?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Claro!', 'dia10.6')
        ], {
            columns: 1
        })))
})

d10.action('dia10.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20002.jpg?v=1654535928830`)
    await ctx.replyWithMarkdown(`A humanidade, desde os primórdios, aprendeu a mensurar o tempo por meio do uso de 🗓️ calendários, ⌚ relógios, ⏱️ cronômetros. `)
    await ctx.replyWithMarkdown(`Isso deixa clara a expectativa que o ser humano tem de controlar aquilo que sabe ser incontrolável.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!!', 'dia10.7')
        ], {
            columns: 1
        })))
})

d10.action('dia10.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para a administradora Renata Freitas de Camargo, a definição de gestão do tempo ou gerenciamento do *tempo é "o processo de organizar e planejar como o tempo deve ser dividido entre as diversas atividades de uma rotina”*. `)
    await ctx.replyWithMarkdown(`Diz respeito à quantidade de tempo despendido para executar cada tarefa do seu dia.`)
    await ctx.replyWithMarkdown(`Podemos nos apropriar do conceito de que *gestão do tempo é saber gerir tarefas rotineiras de forma eficaz e baseadas na ideia de que cada tarefa precisa ser bem planejada e desenvolvida dentro do seu tempo e espaço*.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quais os benefícios da gestão do tempo?', 'dia10.8')
        ], {
            columns: 1
        })))
})

d10.action('dia10.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20003.jpg?v=1654535927913`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20004.jpg?v=1654535927640`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20005.jpg?v=1654535928284`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20006.jpg?v=1654535930240`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia10.9')
        ], {
            columns: 1
        })))
})

d10.action('dia10.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Acabamos de entender, teoricamente, o que é gestão de tempo e os seus benefícios. `)
    await ctx.replyWithMarkdown(`Agora vamos descrever alguns 🕓🗑️ desperdiçadores de tempo.`)
    await ctx.replyWithMarkdown(`Vamos para um vídeo?`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_%20010.gif?v=1652377149253`)
    await ctx.replyWithMarkdown(`Se você passa ou já passou por alguma delas é hora de rever seu plano de trabalho e realinhar seus objetivos.`)
    await ctx.reply(`https://www.youtube.com/watch?v=DHbAOZdkm54`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia10.10')
        ], {
            columns: 1
        })))
})


d10.action('dia10.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Você sabe como utilizar de forma satisfatória o seu tempo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acredito que sim!', 'dia10.11'),
      Markup.callbackButton('Não sei!', 'dia10.11')
        ], {
            columns: 1
        })))
})


d10.action('dia10.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Vou te apresentar como melhorar o aproveitamento do tempo quando se trabalha em casa e contra atrasos!`)
    await ctx.replyWithMarkdown(`Começarei com o trabalho em casa!`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20007.gif?v=1654536685172`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia10.12')
        ], {
            columns: 1
        })))
})

d10.action('dia10.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Trabalhar em casa não pode ser sinônimo de ⛱️ férias.`)
    await ctx.replyWithMarkdown(`Estar em casa nos faz querer ter algumas 👣 comodidades que seriam quase impossíveis em um ambiente mais formal.`)
    await ctx.replyWithMarkdown(`Quer um exemplo? `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quero!', 'dia10.13')
        ], {
            columns: 1
        })))
})

d10.action('dia10.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Uma das ações mais comuns é trabalhar 🛌🏽 deitado, em qualquer lugar, vendo  📺 TV ou fazendo uma 🍳 tarefa doméstica paralela.`)
    await ctx.replyWithMarkdown(`Assim, a 😴 procrastinação será inevitável e a solução para que isso não ocorra é: `)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20008.jpg?v=1654536681566`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Entendido!', 'dia10.14')
      ], {
        columns: 5
      })))
})

d10.action('dia10.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Outro problema muito comum é extrapolar o 🕢 horário de trabalho, seja começando mais tarde ou finalizando suas tarefas após o horário de expediente. `)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20009.jpg?v=1654536681872`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Ok!', 'dia10.15')
        ], {
            columns: 1
        })))
})

 d10.action('dia10.15', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Estar em casa nos faz querer procrastinar ainda mais, ou seja, a pausa para o café demora mais do que o determinado... `)
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20010.gif?v=1654536699156`)
  await ctx.replyWithMarkdown(`Tem caso daqueles que começam a trabalhar somente no período da tarde, sua atenção se volta às 🍿 séries e filmes, etc.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('O que fazer?', 'dia10.16')
      ], {
        columns: 5
      })))
})

d10.action('dia10.16', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Evite que isso aconteça!`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20011.jpg?v=1654536682431`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Boa ideia!', 'dia10.17')
        ], {
            columns: 1
        })))
})

d10.action('dia10.17', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`E por fim, 🧘‍♀️ relaxe. Essa dica parece se contrapor a todas as outras, mas a verdade é que você precisa encontrar o ☯️ equilíbrio entre suas tarefas e os momentos de lazer.`)
  await ctx.replyWithMarkdown(`Ter 👁️ foco e respeitar o seu horário não significa que você tem que ficar 8 horas em uma cadeira forçando seu 🧠 cérebro a ter 💡 ideias.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Entendido!', 'dia10.18')
      ], {
          columns: 1
      })))
})

d10.action('dia10.18', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Como prometido, agora vamos tratar de ⚠️ ⌚ atrasos.`)
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20012.gif?v=1654536688532`)
  await ctx.replyWithMarkdown(`Chegar a um compromisso ou ao trabalho atrasado uma vez ou outra pode ser muito comum, tendo em vista que fatores externos acontecem sempre.`)
  await ctx.replyWithMarkdown(`É o ônibus que quebra, é o filho que não avisou que precisava entregar um trabalho naquele dia, é uma roupa suja para lavar, entre tantos outros afazeres.`)
  await ctx.replyWithMarkdown(`O problema acontece quando isso vira um hábito totalmente desnecessário e tudo que aprendemos sobre gestão do tempo em uma perspectiva profissional (e até pessoal) vai por água abaixo.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia10.19')
      ], {
          columns: 1
      })))
})

d10.action('dia10.19', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Então como resolver esse problema? `)
  await ctx.replyWithMarkdown(`Buscando essas duas soluções iniciais! *Mudar o hábito e se convencer de que está errado.*`)
  await ctx.replyWithMarkdown(`Para que ocorram *mudanças de hábito*, existem ações simples que poderão te ajudar a vencer essa 🚧 barreira.`)
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20013.jpg?v=1654536684516`)
  await ctx.replyWithMarkdown(`Por pior que seja, obedeça ao ⏰ horário estipulado para que você possa se organizar, se arrumar, tomar o seu café da manhã e se deslocar ao trabalho sem correria.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia10.20')
      ], {
          columns: 1
      })))
})

d10.action('dia10.20', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20014.jpg?v=1654536683525`)
  await ctx.replyWithMarkdown(`Caso não seja, reserve um local na sua 🏡 casa para que seja colocado tudo o que você precisa para trabalhar no dia seguinte.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia10.21')
      ], {
          columns: 1
      })))
})

d10.action('dia10.21', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20015.jpg?v=1654536684650`)
  await ctx.replyWithMarkdown(`Se você precisa entrar às 9 horas da manhã no trabalho, faça um 🧮cálculo rápido do tempo que você gasta para chegar ao local, o tempo gasto para tomar café e se arrumar. `)
  await ctx.replyWithMarkdown(`Coloque lembretes no seu 📱 celular, até que essas pequenas ações se tornem um hábito.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia10.22')
      ], {
          columns: 1
      })))
})

d10.action('dia10.22', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20016.jpg?v=1654536683350`)
  await ctx.replyWithMarkdown(`Mesmo que o seu trabalho não dependa de outras pessoas, lembre-se que o atraso de uma hora vai impactar diretamente a ⌛ gestão do seu tempo.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Entendido!', 'dia10.23')
      ], {
          columns: 1
      })))
})

d10.action('dia10.23', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Gostou do material?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim!', 'dia10.24')
      ], {
          columns: 1
      })))
})

d10.action('dia10.24', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Já encontrou algum ponto de mudança?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim!', 'dia10.25'),
    Markup.callbackButton('Não', 'dia10.25')
      ], {
          columns: 1
      })))
})

d10.action('dia10.25', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Quais adjetivos vêm a sua cabeça ao 👂 ouvir que uma pessoa é ociosa? `,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Já pensei!', 'dia10.26')
      ], {
          columns: 1
      })))
})

d10.action('dia10.26', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Difícil relacionar essa palavra como sinônimo ou parte do trabalho, certo? `,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Concordo!', 'dia10.27')
      ], {
          columns: 1
      })))
})

d10.action('dia10.27', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Isso porque a palavra em si possui uma evolução no seu sentido e conceito. `)
  await ctx.replyWithMarkdown(`Vamos abordar aqui essa temática do ponto de 👀 vista histórico e corporativo.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar! ', 'dia10.28')
      ], {
          columns: 1
      })))
})

d10.action('dia10.28', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Por inúmeras questões sociais e culturais, a palavra ócio perdeu o seu sentido literal, dando ênfase aos seus vieses mais ➖ negativos.`)
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20017.jpg?v=1654537929357`)
  await ctx.replyWithMarkdown(`Vamos de vídeo?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim!', 'dia10.29')
      ], {
          columns: 1
      })))
})

d10.action('dia10.29', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA2_-003.gif?v=1652375899349`)
  await ctx.replyWithMarkdown(`Confira um vídeo de Rose Meusburger que fala sobre o ócio descrito pelo sociólogo italiano Domenico de Masi, o de produção de ideias.`)
  await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=UNbEnlTLHgM`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia10.30')
      ], {
          columns: 1
      })))
})

d10.action('dia10.30', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Espero que tenha gostado do vídeo! Para muitos o ócio criativo é o futuro do trabalho.`)
  await ctx.replyWithMarkdown(`E assim chegamos ao final da imersão em busca do *autoconhecimento* e *habilidades* para o *futuro*.`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Já!?', 'dia10.31')
      ], {
          columns: 1
      })))
})

d10.action('dia10.31', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Você realizou uma trilha que o encaminhará para o desenvolvimento das **Soft Skills** para a 🧘 vida pessoal e para o 👩‍🍳 mercado de trabalho.`)
  await ctx.replyWithMarkdown(`Agora é com você: Qual **nota** você dá para a trilha que finalizou? Responda com uma nota de 1 a 10!`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('1', 'dia10.32'),
    Markup.callbackButton('2', 'dia10.32'),
    Markup.callbackButton('3', 'dia10.32'),
    Markup.callbackButton('4', 'dia10.32'),
    Markup.callbackButton('5', 'dia10.32'),
    Markup.callbackButton('6', 'dia10.32'),
    Markup.callbackButton('7', 'dia10.32'),
    Markup.callbackButton('8', 'dia10.32'),
    Markup.callbackButton('9', 'dia10.32'),
    Markup.callbackButton('10', 'dia10.32')
      ], {
          columns: 5
      })))
})

d10.action('dia10.32', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`A nota atribuída correspondeu à expectativa que você teve no início?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim!', 'dia10.33'),
    Markup.callbackButton('Não!', 'dia10.33')
      ], {
          columns: 1
      })))
})

d10.action('dia10.33', async ctx => {
  progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Espero que o percurso e seu empenho tenham valido a pena. `)
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA10_%20018.gif?v=1654537929734`)
  await ctx.replyWithMarkdown(`Agora, vou desafiá-la(o) a pôr em prática algo do que foi abordado neste curso em sua vida.`)
  await ctx.replyWithMarkdown(`Muito sucesso e que a busca pelo seu autoconhecimento nunca acabe, para que você se desenvolva cada vez mais!`)
  await ctx.replyWithMarkdown(`Conte com o Senac para a sua vida!`)
  await ctx.replyWithMarkdown(`E lembre-se que você poderá acessar todos os conteúdos novamente utilizando o Menu e o código do dia de Soft Skills.`)
  await ctx.replyWithMarkdown(`Até a próxima!`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Créditos', 'creditos')
      ], {
          columns: 1
      })))
})


d10.action('creditos', async ctx => {
  progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Créditos AQUI`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('❎ Sair', 'sair')
      ], {
          columns: 1
      })))
  
})



d10.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d10.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia10