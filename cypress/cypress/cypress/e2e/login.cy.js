import { LoginPage } from './pages/login/index'


const login = new LoginPage()

describe('Login SauceDemo', () => {
  beforeEach(() => {
    login.acessarLogin()
  })

  it('Login com sucesso', () => {
    login.preencherUsuario('standard_user')
    login.preencherSenha('secret_sauce')
    login.clicarLogin()
    login.validarLoginSucesso()
  })

  it('Login com usuário bloqueado', () => {
    login.preencherUsuario('locked_out_user')
    login.preencherSenha('secret_sauce')
    login.clicarLogin()
    login.validarMensagemErro('Sorry, this user has been locked out.')
  })
})