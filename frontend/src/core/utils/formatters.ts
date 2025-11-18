import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: Date | string, pattern: string = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, pattern, { locale: ptBR });
};

export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm');
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatNumber = (value: number, decimals: number = 0): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};
