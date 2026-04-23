# Explicação Técnica: Supabase Auth

Entenda como o seu código conversa com o banco de dados PostgreSQL do Supabase.

## 1. O Cliente Supabase
Diferente de outras bibliotecas, o Supabase usa um "cliente" único que concentra todas as funções (Auth, Banco de Dados, Storage).
```javascript
const supabase = createClient(URL, KEY);
```

---

## 2. Diferenças no Código

### Cadastro (`signUp`)
No Supabase, o `signUp` cria o usuário. 
**Dica importante**: Se o e-mail já existir, o Supabase pode não retornar um erro por motivos de segurança (para evitar que hackers descubram quais e-mails estão cadastrados), mas ele não criará a conta duplicada.

### Login (`signInWithPassword`)
Esta função verifica o e-mail e a senha. Se estiverem corretos, ela cria uma **Sessão** (um token de segurança) no seu navegador que prova que você é você.

---

## 3. Persistência de Sessão
Na página `home.html`, usamos a função:
```javascript
const { data: { user } } = await supabase.auth.getUser();
```
Isso verifica se existe um usuário logado naquela aba do navegador. Se não existir, nós expulsamos o usuário de volta para a tela de login. Isso é o que chamamos de **Proteção de Rota**.

---

## 4. O "Anon Key" é seguro?
Sim! A `anon key` (chave anônima) é feita para ser usada no Frontend. Ela só permite que as pessoas façam o que você autorizar no painel do Supabase.

---

## Dicas para o Professor
- Mostre que o Supabase é baseado em **PostgreSQL**, o banco de dados mais usado por empresas profissionais.
- Mostre aos alunos como o e-mail aparece na aba **Authentication** e como você pode deletar ou bloquear usuários por lá.
- Desative o **Email Confirmation** no painel do Supabase para que a aula flua sem que os alunos precisem abrir suas caixas de e-mail.
