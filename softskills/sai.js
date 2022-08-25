const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


//----------------------------------
dias.action('sair', async ctx => {
  await ctx.reply(`Obrigado por usar o chatbot do Senac.`)
  await ctx.reply(`Para voltar ao menu clique aqui → /start`)
  ctx.scene.leave()
})



dias.use(async ctx => {
  await ctx.reply('Opção não encontrada')
  await ctx.reply('Deseja sair?',
    Extra.markup(Markup.inlineKeyboard([
      Markup.callbackButton('❎ Sair', 'sair')
    ], {
      columns: 1
    })))
})

  //-------------------------------------------------------------------------------------------------

