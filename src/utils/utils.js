export const formatCPF = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não for número
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{2})$/, '$1-$2'); // Adiciona o traço
  };