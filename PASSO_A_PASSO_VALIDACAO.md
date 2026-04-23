# Guia: Adicionando Validação de E-mail e Senha 🛡️

Nesse guia, vamos aprender como impedir que o usuário envie o formulário se o e-mail estiver errado ou se a senha for muito curta.

---

## Passo 1: Pegar o valor do e-mail
Dentro da função de `submit`, precisamos capturar o que o usuário escreveu.

```javascript
const email = document.querySelector("#email").value;
const senha = campoSenha.value; // campoSenha já foi selecionado no topo do script
```

---

## Passo 2: Criar o "Molde" do E-mail (Regex)
Para o JavaScript saber o que é um e-mail válido, usamos uma **Expressão Regular**. Pense nela como um filtro que verifica se tem `@` e um ponto `.`.

```javascript
// Este código define o padrão de um e-mail comum
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

## Passo 3: Validar e Bloquear o Envio
Agora, usamos um `if` para testar o e-mail. Se ele for **inválido**, mostramos um aviso e usamos o `return` para parar tudo!

```javascript
if (!emailRegex.test(email)) {
  alert("Por favor, insira um e-mail válido.");
  return; // O código para aqui e não envia para o Supabase!
}
```

---

## Passo 4: Validar o Tamanho da Senha
O Supabase exige que as senhas tenham no mínimo **6 caracteres**. Vamos garantir isso no código:

```javascript
if (senha.length < 6) {
  alert("A senha deve ter pelo menos 6 caracteres.");
  return; // Bloqueia o envio novamente!
}
```

---

Ele deve ser colocado logo no início do `formularioLogin.addEventListener("submit", ...)`, **antes** de chamar a função do Supabase (`signInWithPassword`).

### Por que isso é importante?
1. **Melhor Experiência**: O usuário sabe que errou na hora, sem esperar a resposta da internet.
2. **Economia**: Você não gasta dados enviando informações que você já sabe que estão erradas!

---
💡 **Dica de Ouro**: Sempre teste seu código com e-mails errados e senhas curtas para ver se os alertas aparecem!
