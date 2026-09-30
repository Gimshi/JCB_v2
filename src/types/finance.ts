export type TransactionType = "IN" | "OUT";

export interface FinancialAccount {
  id: string;
  name: string; // Kas Utama, Kas Diakonia, Kas Pembangunan
  code: string;
  balance: number | bigint;
  description?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface FinancialTransaction {
  id: string;
  type: TransactionType;
  amount: number | bigint;
  category: string; // Kolekte, Perpuluhan, Donasi Misi, Operasional, Diakonia
  description: string;
  proofUrl?: string | null;
  transactionDate: string | Date;
  accountId: string;
  account?: FinancialAccount;
  createdById: string;
  createdByName?: string;
  createdAt: string | Date;
}

export interface CreateTransactionInput {
  type: TransactionType;
  amount: number;
  category: string;
  description: string;
  accountId: string;
  transactionDate?: string;
  proofUrl?: string;
}

export interface FinancialReportSummary {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
  accountBalances: {
    accountId: string;
    accountName: string;
    balance: number;
  }[];
}
