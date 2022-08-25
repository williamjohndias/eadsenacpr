const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')

const d7 = new Composer()

// ------------------
//! curso: soft_skills DIA 7
// ------------------

let progresso = "";

const dia7 = new WizardScene('dia7',
    async ctx => {
        
        ctx.wizard.next()
        await ctx.replyWithMarkdown(`*Olá, Aluno(a)*`)
        await ctx.replyWithMarkdown(`Vamos para mais um dia de conhecimentos de Soft Skills?`,
        Extra.markup(Markup.inlineKeyboard([
          Markup.callbackButton('Vamos nessa!', 'dia7.1')
            ], {
                columns: 1
            })))
    },
    d7
)


 
d7.action('dia7.1', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`O tema do dia será algo bem presente no nosso cotidiano. Algo que faz parte de qualquer tipo de relação.`)
    await ctx.replyWithMarkdown(`Ele surge quando diferentes ideias, sentimentos ou interesses se opõem: o 👍 👎 *conflito*!`)
    await ctx.replyWithMarkdown(`Mas no nosso estudo será sobre a *resolução dos conflitos*, ainda mais que, conflitos *não devem ser evitados*, e sim *resolvidos de forma saudável*.`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20001.gif?v=1653398485546`)
    await ctx.replyWithMarkdown(`O que acontece quando ⛔ não resolvemos um conflito? `,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Evitamos mais problemas.', 'dia7.2'),
      Markup.callbackButton('Aumentamos o problema.', 'dia7.2')
        ], {
            columns: 1
        })))
})

d7.action('dia7.2', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Evitar pode gerar um problema ainda ⬆️ maior porque os *conflitos são inevitáveis*.`)
    await ctx.replyWithMarkdown(`O conflito é parte da condição humana: não é sempre 👍 bom ou sempre 👎 ruim. `)
    await ctx.replyWithMarkdown(`Mas todo conflito traz consigo a possibilidade de mudança e transformação ♻️.`,
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia7.3')
        ], {
            columns: 1
        })))
})

d7.action('dia7.3', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Não importa que seja para 🚶‍♀️🚶‍♂️duas pessoas, uma 🌆comunidade ou vários 🌎países.`)
    await ctx.replyWithMarkdown(`Se as mudanças serão para 🥰 melhor ou para 🤬 pior, isso dependerá da forma como serão encarados os conflitos e, principalmente, de que *modo serão resolvidos*.`)
    await ctx.replyWithMarkdown(`No mundo do 🧑‍💼 trabalho, um *conflito não solucionado* prejudica a 📉 produtividade e no 😟 relacionamento entre as pessoas, *comprometendo o clima organizacional*.`)
    await ctx.replyWithMarkdown(`A questão está em como você os gerencia e os transforma em algo 🤗 positivo.`,  
      Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia7.4')
        ], {
            columns: 1
        })))
})

d7.action('dia7.4', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA4_%20003.gif?v=1652708923822`)
    await ctx.replyWithMarkdown(`O cientista americano David Bohm um dia disse que *em um diálogo não há a tentativa de fazer prevalecer um ponto de vista particular, mas a de ampliar a compreensão de todos os envolvidos*.`)
    await ctx.replyWithMarkdown(`Vamos encarar um conflito? `)
    await ctx.reply(`https://www.youtube.com/watch?v=VD-fU5MI8U4`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia7.5')
        ], {
            columns: 1
        })))
})

d7.action('dia7.5', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Os conflitos nem sempre são 🥀 destrutivos.`)
    await ctx.replyWithMarkdown(`Muitas vezes são até bem positivos, quando atuam como *agentes de mudanças individuais, grupais e organizacionais*.`)
    await ctx.replyWithMarkdown(`Tratar de conflitos representa 🤝🏻 solucionar divergências, guiando-se pelos *princípios do diálogo, respeito e confiança*.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia7.6')
        ], {
            columns: 1
        })))
})

d7.action('dia7.6', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Antes de adotar um plano de ação para resolver os conflitos é necessário *analisar e compreender a dinâmica do conflito*. `)
    await ctx.replyWithMarkdown(`Ao lidar com o conflito considere alguns fatores:`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20002.jpg?v=1653399307565`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20003.jpg?v=1653399307849`)
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20004.jpg?v=1653399307423`)
    await ctx.replyWithMarkdown(`A partir dessa análise inicial da situação, você pode utilizar de quatro maneiras para *resolver um conflito*.`)
    await ctx.replyWithMarkdown(`Quer conhecê-las?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Claro!', 'dia7.7')
        ], {
            columns: 1
        })))
})

d7.action('dia7.7', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithPhoto(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20005.gif?v=1653399572839`)
    await ctx.replyWithMarkdown(`*Evitação*`)
    await ctx.replyWithMarkdown(`Essa abordagem representa *fazer de tudo para evitar problemas* que possam prejudicar uma relação ou um trabalho.`)
    await ctx.replyWithMarkdown(`✔️ Vantagens: Aparente diminuição dos pontos de atrito.`)
    await ctx.replyWithMarkdown(`❌ Desvantagens: Falta de criatividade, de novas ideias, de real processamento do problema, que poderá acabar se manifestando de outra maneira.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próxima maneira!', 'dia7.8')
        ], {
            columns: 1
        })))
})

d7.action('dia7.8', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20006.gif?v=1653399582576`)
    await ctx.replyWithMarkdown(`*Confrontação*`)
    await ctx.replyWithMarkdown(`Nessa abordagem se considera as divergências e promove condições para que elas se expressem abertamente, por meio de um confronto de opiniões e sentimentos. `)
    await ctx.replyWithMarkdown(`⚠️ Mas atenção! Resolver um conflito com confronto requer um mediador muito hábil e imparcial.`)
    await ctx.replyWithMarkdown(`✔️ Vantagens: Aprofundamento do problema, com mais compreensão de suas causas, esclarecimento e aprendizagem, com possibilidade de se chegar a um acordo quando após a etapa de confronto, segue-se à etapa de conciliação.`)
    await ctx.replyWithMarkdown(`❌ Desvantagens: Mágoas decorrentes do calor da discussão, custos psicológicos, tensões e grande desgaste de energia.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próxima maneira!', 'dia7.9')
        ], {
            columns: 1
        })))
})

d7.action('dia7.9', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20007.gif?v=1653399577785`)
    await ctx.replyWithMarkdown(`*Repressão*`)
    await ctx.replyWithMarkdown(`Abordar um conflito com repressão representa controlar a situação evitando a expressão de discordâncias e empregando um sistema de recompensas e punições.`)
    await ctx.replyWithMarkdown(`Ou seja, funciona no mundo do trabalho em uma equipe de trabalho, por exemplo.`)
    await ctx.replyWithMarkdown(`⚠️ Essa abordagem necessita de um líder, que recompensa aqueles que contribuem para a harmonia de um grupo e pune os que discordam ou se atrevem a rompê-la.`)
    await ctx.replyWithMarkdown(`✔️ Vantagens: Controle aparente do conflito.`)
    await ctx.replyWithMarkdown(`❌Desvantagens: Intensificam-se os sentimentos que não podem ser liberados ou passam a se expressar por outras vias. `)
    await ctx.replyWithMarkdown(`Daí pode decorrer uma carga de frustação, hostilidades, rancores, prejudicando a interação grupal ou, no mínimo, as pessoas envolvidas.`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Próxima maneira!', 'dia7.10')
        ], {
            columns: 1
        })))
})


d7.action('dia7.10', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA7_%20008.gif?v=1653399573601`)
    await ctx.replyWithMarkdown(`*Conciliação*`)
    await ctx.replyWithMarkdown(`Nessa abordagem procura-se combinar os elementos conflitantes, fazendo uma espécie de arranjo, em que as partes envolvidas se comprometem a respeitar o que foi combinado.`)
    await ctx.replyWithMarkdown(`Neste caso, não se estimula as divergências, mas elas se juntam, incentivando os conflitantes a vê-las como problemas capazes de serem resolvidos de forma conjunta e com criatividade. `)
    await ctx.replyWithMarkdown(`⚠️ Nunca, mas nunca como uma competição entre o certo e errado!`)
    await ctx.replyWithMarkdown(`✔️ Vantagens: Os oponentes tornam-se colaboradores, surgindo esclarecimentos, novas ideias, aprendizagem e integração.`)
    await ctx.replyWithMarkdown(`❌Desvantagens: Necessidade de sensibilização para a importância de um consenso, o que exige habilidade especial do líder e dos próprios participantes para a exploração dos diversos pontos de vista, além de mais tempo para a busca da solução.`)
    await ctx.replyWithMarkdown(`Qual das resoluções de conflitos você se vê aplicando?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Evitação', 'dia7.11'),
      Markup.callbackButton('Confrontação', 'dia7.11'),  
      Markup.callbackButton('Repressão', 'dia7.11'),  
      Markup.callbackButton('Conciliação', 'dia7.11')  
        ], {
            columns: 1
        })))
})

d7.action('dia7.11', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Espero que a sua escolha seja *fruto de uma reflexão*, levando em conta as vantagens e desvantagens de cada abordagem...`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Refleti sim!', 'dia7.12')
        ], {
            columns: 1
        })))
})

d7.action('dia7.12', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`E que tal mais um vídeo?`)
    await ctx.replyWithVideo(`https://cdn.glitch.global/82abc994-174e-44ae-8d7f-f66ded8ca10f/IMG_SOFTSKILLS_DIA3_%20007.gif?v=1652450955327`)
    await ctx.replyWithMarkdown(`Confira um TEDx com Tomas Drunkenmolle, um estudioso das ciências de comportamento que pesquisou temas como negociação, tomada de decisões e resolução de conflitos na Harvard Business School. `)
    await ctx.replyWithMarkdown(`Ele aborda um tema que complementa que vimos até o momento: abraçar conflitos!`)
    await ctx.replyWithMarkdown(`https://www.youtube.com/watch?v=BtahWGGipqg`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Avançar!', 'dia7.13')
        ], {
            columns: 1
        })))
})

d7.action('dia7.13', async ctx => {
    progresso = ctx.callbackQuery.data
    await ctx.replyWithMarkdown(`Preparada(o) para 👐 abraçar os conflitos da vida?`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('De braços abertos!', 'dia7.14')
        ], {
            columns: 1
        })))
})

d7.action('dia7.14', async ctx => {
    await ctx.replyWithMarkdown(`E assim encerramos mais um dia da nossa jornada de Soft Skills!`)
    await ctx.replyWithMarkdown(`Espero que você consiga ter *uma boa postura* diante a um conflito e procure resolvê-lo!`)
    await ctx.replyWithMarkdown(`Até a próxima, ser humano diplomático!`)
    await ctx.replyWithMarkdown(`*SEU CÓDIGO DE ACESSO PARA O PRÓXIMO DIA É:\n\n❌❌❌❌❌❌\n❌     008    ❌\n❌❌❌❌❌❌*`,
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('Acessar dia 8!', 'dia8'),
      Markup.callbackButton('❎ Sair', 'sair')
        ], {
            columns: 1
        })))
})


d7.action('dia8', Stage.enter('dia8'))

d7.action('sair', async ctx => {
    await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
    await ctx.reply(`Para voltar ao menu clique aqui → /start`)
    ctx.scene.leave()
  })
  
  
d7.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja continuar ou sair?',
  Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Continuar', progresso),
    Markup.callbackButton('❎ Sair', 'sair')

        ], {
          columns: 1
        })))
  })









module.exports = dia7