const botaoMostrarSenha = document.querySelector("#toggle-password");
const campoSenha = document.querySelector("#password");
const formularioRegister = document.querySelector("#register-form");

// Lógica para mostrar/esconder a senha
botaoMostrarSenha.addEventListener("click", () => {
  const tipo = campoSenha.getAttribute("type") === "password" ? "text" : "password";
  campoSenha.setAttribute("type", tipo);

  const iconeOlho = botaoMostrarSenha.querySelector("img");
  iconeOlho.src = tipo === "password" ? "assets/eye.svg" : "assets/eye-off.svg";
});

// ==========================================
// CONFIGURAÇÃO DO SUPABASE
// ==========================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// TODO: Substitua pelos dados do seu projeto Supabase (Configurações -> API)
const SUPABASE_URL = 'COLE_SUA_URL_AQUI';
const SUPABASE_KEY = 'COLE_SUA_KEY_ANON_AQUI';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Evento de Cadastro
formularioRegister.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = campoSenha.value;

  // Validação de E-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Validação de Senha (Mínimo de 6 para a maioria dos serviços de Auth)
  if (password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  try {
    // Chamada ao Supabase para criar usuário
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) throw error;

    alert(`Conta criada com sucesso! Faça login para continuar.`);
    window.location.href = 'index.html';

  } catch (error) {
    console.error("Erro no Supabase:", error.message);
    alert("Erro ao criar conta: " + error.message);
  }
});
