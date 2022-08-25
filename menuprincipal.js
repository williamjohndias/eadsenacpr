const Telegraf = require("telegraf");
const Composer = require('telegraf/composer')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const axios = require('axios')
const WizardScene = require('telegraf/scenes/wizard')


const submenu = require("./submenu");

// ----------------------------
// WIZARD SCENE MENU PRINCIPAL
// ----------------------------
const menuprincipal = new WizardScene('menuprincipal',
  async ctx => {
    nome = ctx.update.message.from.first_name
    await ctx.reply(`Bem vindo Aluno(a)!`)

    await ctx.reply(`Ecolha uma opção abaixo:`,
      Extra.markup(Markup.inlineKeyboard([
        Markup.callbackButton('Curso Soft Skills', '10dias'),
        Markup.callbackButton('❎ Sair', 'sair'),
      ], {
        columns: 2
      })))


    
    return ctx.wizard.next()
  },
  submenu
)

module.exports = menuprincipal
