export interface Senha {
  numero: string;
  tipo: string;
  dataEmissao: Date;
  dataAtendimento?: Date;
  atendida: boolean;
  guiche?: number;
}