const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')

const entrardias = new Composer()



//! entra no dia 2

entrardias.hears('002', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 2', 'dia2'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia2', Stage.enter('dia2'))


//! entra no dia 3

entrardias.hears('003', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 3', 'dia3'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia3', Stage.enter('dia3'))


//! entra no dia 4

entrardias.hears('004', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 4', 'dia4'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia4', Stage.enter('dia4'))

//! entra no dia 5

entrardias.hears('005', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 5', 'dia5'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia5', Stage.enter('dia5'))

//! entra no dia 6

entrardias.hears('006', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 6', 'dia6'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia6', Stage.enter('dia6'))

//! entra no dia 7

entrardias.hears('007', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 7', 'dia7'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia7', Stage.enter('dia7'))

//! entra no dia 8

entrardias.hears('008', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 8', 'dia8'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia8', Stage.enter('dia8'))

//! entra no dia 9

entrardias.hears('009', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 9', 'dia9'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia9', Stage.enter('dia9'))

//! entra no dia 10

entrardias.hears('010', async ctx => {
  await ctx.reply(`Acesso liberado!!`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('📋 Dia 10', 'dia10'),
        Markup.callbackButton('❎ Sair', 'sair')
      ], {
        columns: 2
      })))
})

entrardias.action('dia10', Stage.enter('dia10'))



entrardias.action('sair', async ctx => {
  await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
  await ctx.reply(`Para voltar ao menu clique aqui → /start`)
  ctx.scene.leave()
})


entrardias.use(async ctx => {
  await ctx.reply('Código inválido')
  await ctx.reply('Deseja sair?',
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('❎ Sair', 'sair')

      ], {
        columns: 1
      })))
})

// entrardias.action('inserir', Stage.enter('verificadia2'))


const verificadia2 = new WizardScene('verificadia2',
          // async ctx => {
          //   await ctx.replyWithMarkdown(`*Código:*`)
          //   return ctx.wizard.next()
          // },
                                     
          async ctx => {
              await ctx.replyWithMarkdown(`*Código:*`)
              console.log(ctx.scene.session.cursor)
              ctx.wizard.next()
          },
          
          
          entrardias
   
)

module.exports = verificadia2