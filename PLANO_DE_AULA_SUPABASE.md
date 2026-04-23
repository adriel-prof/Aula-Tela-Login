# Plano de Aula: Cada Aluno com seu Backend (Supabase) ⚡

Este roteiro foca na autonomia do aluno, permitindo que cada um tenha seu próprio painel administrativo.

## Objetivos da Aula
- Criar e gerenciar um projeto individual no **Supabase**.
- Entender o fluxo completo: Setup de Nuvem -> Integração -> Persistência.

---

## 1. O Conceito: Você é o Administrador (05 min)
Explique que hoje cada aluno terá o controle total. Eles não são apenas usuários, são os **donos do banco de dados**.

---

## 2. Setup Coletivo (15 min)
O professor deve guiar a turma nos seguintes passos:

1.  **Clonagem do Projeto**: Todos clonam o repositório base:
    `git clone https://github.com/adriel-prof/Aula-Tela-Login.git`
2.  **Login no Supabase**: Todos entram com o GitHub.
3.  **Criação**: Criar o projeto e definir a senha do banco.
3.  **Configuração Crítica**: Mostrar onde desativar o **"Confirm email"**. *Aviso: Se esquecerem isso, o login não funcionará sem abrir o e-mail.*

---

## 3. Integração (10 min)
Os alunos copiam suas URLs e Keys para o código.
- Reforce: *"A URL e a Key de cada um é diferente. Não copie do colega!"*

---

## 4. Prática e Teste (15 min)
Os alunos realizam o ciclo de Registro e Login.
- Peça para eles explorarem a aba **Users** no Supabase.
- Desafio: Peça para eles deletarem o usuário que criaram no painel e tentarem logar novamente no site para ver o erro.

---

## 5. Encerramento (05 min)
- Discuta a importância das chaves de API.
- Explique que o projeto deles agora é "Real" e está acessível de qualquer lugar do mundo.

---

## Checklist de Sucesso
- [ ] Todos logados via GitHub.
- [ ] "Confirm Email" desativado.
- [ ] URL e Key coladas nos 3 arquivos JS/HTML.
