import re
import werkzeug
from config import matricula
from config import senha
werkzeug.cached_property = werkzeug.utils.cached_property
from robobrowser import RoboBrowser

url = 'https://portalence.ibge.gov.br/gcad-aluno/pag/consultaNotas.jsf'

br = RoboBrowser()
br.open(url)

form = br.get_form()
form['login-form:matricula-aluno'] = matricula
form['login-form:j_idt22'] = senha
br.submit_form(form)

str = str(br.parsed())

print(str)
