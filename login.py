import re
import sys
import werkzeug
werkzeug.cached_property = werkzeug.utils.cached_property
from robobrowser import RoboBrowser

matricula = sys.argv[1]
senha = sys.argv[2]

url = 'https://portalence.ibge.gov.br/gcad-aluno/'

br = RoboBrowser()
br.open(url)

form = br.get_form()
form['login-form:matricula-aluno'] = matricula
form['login-form:j_idt22'] = senha
br.submit_form(form)

page = str(br.parsed())
response = True
if 'Login e senha de usuário não conferem no sistema.' in page:
    response = False

print(response)
sys.stdout.flush()