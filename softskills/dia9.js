const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const d9 = new Composer()

// ------------------
//! curso: soft_skills DIA 9
// ------------------

let progresso = "";

const dia9 = new WizardScene('dia9',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)*`)
        await ctx.replyWithMarkdown(`Preparada(o) para conhecimentos?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Sempre!', 'dia9.1')
            ], {
                columns: 1
            })))
    },
    d9
)


d9.action('dia9.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Tenho sido claro na maneira de me 💬 comunicar contigo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Sim.', 'dia9.2'),
      Markup.callbackButton('Não.', 'dia9.2'),
      Markup.callbackButton('Na maioria das vezes.', 'dia9.2')
        ], {
            columns: 1
        })))
})

d9.action('dia9.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Ok! E você? Como tem se comunicado?`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acredito que bem.', 'dia9.3'),
      Markup.callbackButton('Muitas vezes não.', 'dia9.3'),  
      Markup.callbackButton('Depende da situação.', 'dia9.3')
        ], {
            columns: 1
        })))
})

d9.action('dia9.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Parece óbvio, mas mesmo as grandes empresas de comunicação têm *dificuldades de manter bons diálogos internos e externos*. `)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20001.gif?v=1654526552683`)
    await ctx.replyWithMarkdown(`E se toda empresa é feita de pessoas, profissionais que sabem se comunicar com clareza e, especialmente, honestidade, saem na 🏎️ frente.`)
    await ctx.replyWithMarkdown(`Mas o que é *comunicação*?`,  
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quero conceito!', 'dia9.4')
        ], {
            columns: 1
        })))
})

d9.action('dia9.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Ela faz parte de nosso dia a dia. `)
    await ctx.replyWithMarkdown(`A todo momento estamos nos comunicando e quase nunca paramos para pensar a respeito dela.`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20002.jpg?v=1654526552232`)
    await ctx.replyWithMarkdown(`Aparentemente já temos a resposta para a pergunta (o que é comunicação), mas ainda assim é uma resposta incompleta.`)
    await ctx.replyWithMarkdown(`Para chegar ao nosso objetivo, precisamos investigar quais são esses *elementos que formam o processo comunicativo*.`)
    await ctx.replyWithMarkdown(`Observe as imagens a seguir:`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20003.gif?v=1654526553845`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20004.gif?v=1654526554606`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20005.gif?v=1654526552334`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20006.gif?v=1654526560790`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Já observei!', 'dia9.5')
        ], {
            columns: 1
        })))
})

d9.action('dia9.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Em todas essas imagens temos processos de comunicação acontecendo, não é mesmo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Concordo!', 'dia9.6')
        ], {
            columns: 1
        })))
})

d9.action('dia9.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Na primeira, percebemos claramente duas pessoas conversando, comunicando-se entre si. `)
    await ctx.replyWithMarkdown(`Já nas demais temos a presença visível de apenas uma pessoa comunicando algo.`)
    await ctx.replyWithMarkdown(`Só que mesmo sem ver, sabemos que existem outras pessoas envolvidas na comunicação.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próximas!', 'dia9.7')
        ], {
            columns: 1
        })))
})

d9.action('dia9.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Na comunicação por telefone há duas pessoas participando. `)
    await ctx.replyWithMarkdown(`Na comunicação por carta também, e na comunicação via televisão mais de duas pessoas estão envolvidas, na verdade ocorre a comunicação de uma pessoa com um público.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia9.8')
        ], {
            columns: 1
        })))
})

d9.action('dia9.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Em todos os casos que foram apresentados podemos perceber diferentes elementos que auxiliam na *construção do processo de 💬 comunicação*. `)
    await ctx.replyWithMarkdown(`Temos os *participantes*, que chamamos de *emissor e receptor*, independentemente de estarem ou não frente a frente.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20007.gif?v=1654526553083`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Recebi a mensagem!', 'dia9.9')
        ], {
            columns: 1
        })))
})

d9.action('dia9.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Existe o *conteúdo* daquilo que é dito por eles, a que chamamos de *mensagem*, e também a *forma do que é dito*, ou seja, o *código*, que é a língua utilizada, por exemplo.`)
    await ctx.replyWithMarkdown(`O *meio utilizado para transmitir a mensagem* é o que chamamos de *canal*, que é mais um dos elementos envolvidos no processo de comunicação.`)
    await ctx.replyWithMarkdown(`Subsidiando todo o processo de comunicação e assim dando sustentação ao que é dito, temos o *contexto*, o *elemento que evita que ocorram problemas no processo comunicativo*.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Estou no contexto!', 'dia9.10')
        ], {
            columns: 1
        })))
})

d9.action('dia9.10', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Quando todos têm *consciência do contexto* envolvido na comunicação, *diminuem as chances de ocorrerem ruídos na comunicação*, mais um elemento que pode vir a compor o processo de comunicação.`)
  await ctx.replyWithMarkdown(`Por fim, temos o *feedback*, que é a *resposta ou retorno dado à mensagem*.`)
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20008.gif?v=1654526554357`)
  await ctx.replyWithMarkdown(`Trata-se de uma resposta dada pelo receptor, que, ao compreender a mensagem do emissor, inicia novo processo comunicativo, emitindo algo afirmativo ou negativo, seja em linguagem verbal ou visual, utilizando gestos, por exemplo.`)
  await ctx.replyWithMarkdown(`Vamos testar seu entendimento?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Claro!', 'dia9.11')
      ], {
          columns: 1
      })))
})


d9.action('dia9.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para você, *o que é comunicação?*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('O diálogo entre duas pessoas.', 'dia9.12'),
      Markup.callbackButton('As informações de um jornal.', 'dia9.12'),
      Markup.callbackButton('Um filme.', 'dia9.12'),
      Markup.callbackButton('Uma canção.', 'dia9.12'),
      Markup.callbackButton('Uma placa de trânsito.', 'dia9.12'),
      Markup.callbackButton('Todas as opções.', 'dia9.12')
        ], {
            columns: 1
        })))
})

d9.action('dia9.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Na verdade todas as opções são formas de comunicação.`)
    await ctx.replyWithMarkdown(`A comunicação é muito mais que o texto escrito ou a palavra falada. Ela também envolve ✌️ gestos, ♿ símbolos, 🚦 sinais, 📯 sons, etc.`)
    await ctx.replyWithMarkdown(`Dessa maneira podemos dizer que o ser humano se vale de dois tipos de comunicação: verbal e não verbal.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20003.gif?v=1652708923822`)
    await ctx.replyWithMarkdown(`Vamos para um vídeo?`)
    await ctx.reply(`https://www.youtube.com/watch?v=MCqeHEpd0j4`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia9.13')
        ], {
            columns: 1
        })))
})

d9.action('dia9.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Gostou do vídeo?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Gostei sim!', 'dia9.14')
        ], {
            columns: 1
        })))
})

d9.action('dia9.14', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Vimos que na *linguagem não verbal* nossa *assimilação* é *imediata e global*.`)
    await ctx.replyWithMarkdown(`Já na *linguagem verbal*, a *assimilação* é *construída no decorrer*, desde que o *receptor tenha domínio do código* (a língua).`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia9.55')
        ], {
            columns: 1
        })))
})

d9.action('dia9.55', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Antes de continuarmos, é preciso entender que *a linguagem é muito mais do que um meio de se comunicar*.`)
  await ctx.replyWithMarkdown(`Ela também pode influenciar a maneira como 👀 enxergamos o mundo, a maneira como 🧠  pensamos.`)
  await ctx.replyWithMarkdown(`Você acredita que a linguagem afeta diretamente a forma de comunicação?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim!', 'dia9.66'),
    Markup.callbackButton('Não!', 'dia9.66')
      ], {
          columns: 1
      })))
})




d9.action('dia9.66', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A comunicação está intimamente ligada à linguagem.`) 
    await ctx.replyWithMarkdown(`A linguagem é um meio para nos comunicarmos e por isso influi diretamente na comunicação. `)
    await ctx.replyWithMarkdown(`Isso porque nos valemos do uso do que é chamado de signo. `)
    await ctx.replyWithMarkdown(`E não, isso não tem nada a ver com a data do seu nascimento. Aqui signo quer dizer:`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20009.jpg?v=1654526870378`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia9.16')
        ], {
            columns: 1
        })))
})

d9.action('dia9.16', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Ou seja, *signo* é qualquer *palavra, som, objeto ou figura que represente algo*.`)
    await ctx.replyWithMarkdown(`Por exemplo, ao ler a palavra *CACHORRO*, em sua mente formará o som dessa palavra [ca/xo/rro] e provavelmente virá associada uma imagem do 🐕 animal.`)
    await ctx.replyWithMarkdown(`Sendo assim, para que exista signo precisamos de 3 elementos:`)
    await ctx.replyWithMarkdown(`O *objeto referente*: que é a coisa em si, o animal peludo de 4 patas com focinho e rabo.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próximo!', 'dia9.17')
        ], {
            columns: 1
        })))
})

d9.action('dia9.17', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`O *significado*: que é o conceito da coisa, o que ela carrega consigo. `)
    await ctx.replyWithMarkdown(`Nesse caso, a ideia do “melhor amigo do homem”, animalzinho que gosta de brincar e por aí vai.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próximo!', 'dia9.18')
        ], {
            columns: 1
        })))
})

d9.action('dia9.18', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`E o *significante*: que é a representação do signo, seja em qual meio. `)
    await ctx.replyWithMarkdown(`Ou seja, a palavra escrita “cachorro”, o som [ca/xo/rro] e a imagem do animal que se forma na mente.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia9.19')
        ], {
            columns: 1
        })))
})

d9.action('dia9.19', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Agora veja o gesto e selecione o significado que melhor se adequa:`)
  await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20010.gif?v=1654526877262`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Significa o número 5.', 'dia9.20'),
    Markup.callbackButton('Significa o número 1.', 'dia9.20'),
    Markup.callbackButton('Significa que está tudo certo.', 'dia9.20'),
    Markup.callbackButton('Significa um gesto obsceno.', 'dia9.20'),
    Markup.callbackButton('Significa uma paquera entre pessoas do mesmo sexo.', 'dia9.20')
      ], {
          columns: 1
      })))
})

d9.action('dia9.20', async ctx => {
    progresso = ctx.callbackQuery.data    
    await ctx.replyWithMarkdown(`Na verdade todas as alternativas estão corretas, mas cada uma é relacionada a uma cultura diferente.`)
    await ctx.replyWithMarkdown(`O gesto significa o número 5 no 🇯🇵 Japão. `)
    await ctx.replyWithMarkdown(`Significa o número 1 na 🇩🇪 Alemanha. `)
    await ctx.replyWithMarkdown(`Significa que está tudo certo aqui na 🇧🇷 América. `)
    await ctx.replyWithMarkdown(`Significa um gesto obsceno na 🇳🇪 Nigéria ou 🇦🇺 Austrália. `)
    await ctx.replyWithMarkdown(`E significa uma paquera entre pessoas do mesmo sexo na 🇹🇷 Turquia. `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('E por que estou vendo tudo isso?', 'dia9.21')
        ], {
            columns: 1
        })))
})

d9.action('dia9.21', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Para desenvolver a sua habilidade de comunicação é importante saber que a comunicação não verbal é tão poderosa quanto a comunicação verbal.`)
  await ctx.replyWithMarkdown(`Um bom comunicador deve decidir qual o meio mais apropriado e eficaz para transmitir sua mensagem: ou um ou outro, ou ambos em conjunto.`)
  await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA9_%20011.gif?v=1654526870277`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Avançar!', 'dia9.22')
      ], {
          columns: 1
      })))
})

d9.action('dia9.22', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`A comunicação como um todo tem o poder de influenciar o público, tendo impactos ➕ positivos ou ➖ negativos capazes até de mudar comportamentos.`)
    await ctx.replyWithMarkdown(`E você? Qual imagem você passa?`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20003.gif?v=1652708923822`)
    await ctx.replyWithMarkdown(`Assista a um vídeo da doutora em linguística e especialista em comunicação e liderança Vivian Rio Stella, que aborda a comunicação verbal e não verbal.`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=u9Ml9OCp6NQ`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Já assisti!', 'dia9.23')
        ], {
            columns: 1
        })))
})

d9.action('dia9.23', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Para finalizarmos o nosso dia de comunicação, vamos para uma reflexão?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Vamos sim!', 'dia9.24')
        ], {
            columns: 1
        })))
})

d9.action('dia9.24', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20003.gif?v=1652708923822`)
    await ctx.replyWithMarkdown(`Assista ao curta-metragem animado Aparência e Realidade, dos diretores Zhenia Pavlenko e Elena Rogova.`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=JtcLKe0T5YA&t=113s`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Quero refletir mais!', 'dia9.25')
        ], {
            columns: 1
        })))
})

d9.action('dia9.25', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`Como vimos, as linguagens verbal e não verbal, quando complementares, enriquecem qualquer informação. `)
  await ctx.replyWithMarkdown(`Mas o que acontece quando elas divergem? Você acredita que essa dissonância prejudica a comunicação?`)
  await ctx.replyWithMarkdown(`Se prejudica, o que podemos fazer para melhorar a comunicação nessas ocasiões?`)
  await ctx.replyWithMarkdown(`Como lidar com isso no nosso local de trabalho?`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Refleti!', 'dia9.26')
      ], {
          columns: 1
      })))
})

d9.action('dia9.26', async ctx => {
    progresso = ctx.callbackQuery.data
  await ctx.replyWithMarkdown(`E assim chegamos ao fim de mais um estudo de Soft Skills!`)
  await ctx.replyWithMarkdown(`Espero que tenha gostado!`)
  await ctx.replyWithMarkdown(`E um conselho para a vida:`)
  await ctx.replyWithMarkdown(`Quanto mais articulada é uma pessoa, mais oportunidades ela terá pela frente e saberá o momento de aproveitá-las.`)
  await ctx.replyWithMarkdown(`Até a próxima, comunicador do mundo!`)
  await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     010      ❌\n❌❌❌❌❌❌*`,
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Acessar o dia 10!', 'dia10'),
    Markup.callbackButton('❎ Sair', 'sair')
      ], {
          columns: 1
      })))
})


d9.action('dia10', Stage.enter('dia10'))

d9.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d9.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia9