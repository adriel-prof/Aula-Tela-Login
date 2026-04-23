const botaoMostrarSenha = document.querySelector("#toggle-password");
const campoSenha = document.querySelector("#password");
const formularioLogin = document.querySelector("#login-form");

// Lógica para mostrar/esconder a senha
botaoMostrarSenha.addEventListener("click", () => {
  const tipo = campoSenha.getAttribute("type") === "password" ? "text" : "password";
  campoSenha.setAttribute("type", tipo);

  const iconeOlho = botaoMostrarSenha.querySelector("img");
  iconeOlho.src = tipo === "password" ? "assets/eye.svg" : "assets/eye-off.svg";
});

// ==========================================
// CONFIGURAÇÃO DO SUPABASE (Aula de 50 min)
// ==========================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// TODO: Substitua pelos dados do seu projeto Supabase (Configurações -> API)
const SUPABASE_URL = 'COLE_SUA_URL_AQUI';
const SUPABASE_KEY = 'COLE_SUA_KEY_ANON_AQUI';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Evento de Login
formularioLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = campoSenha.value;

  // 1. Validação de E-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  try {
    // 2. Chamada ao Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;

    alert(`Bem-vindo! Login realizado com sucesso.`);
    window.location.href = 'home.html';

  } catch (error) {
    console.error("Erro no Supabase:", error.message);

    // Tratamento de erros amigável
    if (error.message === 'Invalid login credentials') {
      alert("E-mail ou senha incorretos.");
    } else {
      alert("Erro ao tentar entrar: " + error.message);
    }
  }
});
