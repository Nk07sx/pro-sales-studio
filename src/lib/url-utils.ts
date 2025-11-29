/**
 * Preserva os parâmetros de URL ao redirecionar
 * @param targetUrl - URL de destino
 * @returns URL completa com parâmetros preservados
 */
export const preserveUrlParams = (targetUrl: string): string => {
  const currentParams = window.location.search;
  
  if (!currentParams) {
    return targetUrl;
  }
  
  // Se a URL já tem parâmetros, adiciona os novos com &
  const separator = targetUrl.includes('?') ? '&' : '?';
  return `${targetUrl}${separator}${currentParams.substring(1)}`;
};

/**
 * Redireciona preservando os parâmetros de URL
 * @param targetUrl - URL de destino
 */
export const redirectWithParams = (targetUrl: string): void => {
  window.location.href = preserveUrlParams(targetUrl);
};
