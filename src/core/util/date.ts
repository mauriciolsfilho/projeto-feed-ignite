import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * Retorna data formatada na lingua PT_BR
 * @param value
 * @returns
 */
export const getFormattedDate = (value: Date) =>
  format(value, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

/**
 * Retorna o tempo da data informada até a data atual
 * @param value
 * @returns
 */
export const getDateToNowFormatted = (value: Date) =>
  formatDistanceToNow(value, {
    locale: ptBR,
    addSuffix: true,
  });
