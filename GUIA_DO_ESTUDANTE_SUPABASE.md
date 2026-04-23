# Guia do Estudante: Seu Próprio Backend com Supabase ⚡

Nesta aula, você vai criar seu próprio servidor na nuvem! Como você já tem conta no GitHub, vamos usá-la para configurar tudo rapidamente.

## Passo 0: Preparando o Código
1.  Abra o terminal na pasta onde deseja salvar seu projeto.
2.  Clone o repositório base:
    ```bash
    git clone https://github.com/adriel-prof/Aula-Tela-Login.git
    ```
3.  Abra a pasta no VS Code.

---

## Passo 1: Criando seu Projeto no Supabase
1.  Acesse [supabase.com](https://supabase.com/) e clique em **"Sign in with GitHub"**.
2.  Clique em **"New Project"**.
3.  Escolha um nome (ex: `Meu-Login`) e uma senha para o banco de dados (anote-a!).
4.  Aguarde 2 minutos até o projeto ficar pronto.

---

## Passo 2: Pegando suas Chaves 🔑
Com o projeto pronto, precisamos das chaves para conectar seu site ao servidor:
1.  No menu lateral, clique na **Engrenagem (Project Settings)**.
2.  Clique em **API**.
3.  Copie a **Project URL** e a **anon / public key**.
4.  Cole essas informações no topo dos seus arquivos `script.js`, `register.js` e `home.html`.

```javascript
const SUPABASE_URL = 'COLE_AQUI_A_SUA_URL';
const SUPABASE_KEY = 'COLE_AQUI_A_SUA_KEY_ANON';
```

---

## Passo 3: Desativando a Confirmação de E-mail (Importante!) 📧
Para você conseguir logar sem precisar abrir seu e-mail:
1.  No menu lateral, clique em **Authentication (ícone de cadeado)**.
2.  Vá em **Providers** -> **Email**.
3.  Desative a chave **"Confirm email"**.
4.  Clique em **Save**.

---

## Passo 4: O Fluxo da Aplicação
Agora seu código já consegue conversar com o seu próprio servidor:

**Para Cadastrar:**
```javascript
const { data, error } = await supabase.auth.signUp({ email, password });
```

**Para Logar:**
```javascript
const { data, error } = await supabase.auth.signInWithPassword({ email, password });
```

---

## Passo 5: Como Testar 🚀
1.  Abra seu `index.html`.
2.  Vá em **"Registre-se"** e crie sua conta.
3.  Vá na aba **Authentication -> Users** no site do Supabase e veja que **você criou um usuário no seu próprio banco de dados!**
4.  Agora tente logar no seu site.
