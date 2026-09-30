import { FinancialAccount, FinancialTransaction, FinancialReportSummary } from "@/types";

export const MOCK_ACCOUNTS: FinancialAccount[] = [
  {
    id: "acc-1",
    name: "Kas Utama Operasional",
    code: "KAS-01",
    balance: 145000000,
    description: "Operasional ibadah, perlengkapan gedung, utilitas, dan multimedia",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "acc-2",
    name: "Kas Diakonia & Sosial",
    code: "KAS-02",
    balance: 82500000,
    description: "Bantuan tanggap darurat, beasiswa anak asuh, dan pengobatan sembako jemaat",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "acc-3",
    name: "Kas Pembangunan & Misi",
    code: "KAS-03",
    balance: 310000000,
    description: "Perintisan pos gereja pedalaman dan perluasan auditorium ibadah",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const MOCK_TRANSACTIONS: FinancialTransaction[] = [
  {
    id: "tx-1",
    type: "IN",
    amount: 35000000,
    category: "Persembahan Persepuluhan",
    description: "Persembahan persepuluhan ibadah minggu raya via transfer bank",
    transactionDate: new Date(Date.now() - 86400000 * 1).toISOString(),
    accountId: "acc-1",
    createdById: "user-1",
    createdByName: "Bendahara Sinode",
    createdAt: new Date().toISOString(),
  },
  {
    id: "tx-2",
    type: "IN",
    amount: 18500000,
    category: "Kolekte Ibadah Minggu",
    description: "Kolekte tunai & QRIS kantong persembahan sesi KU 1 & KU 2",
    transactionDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    accountId: "acc-1",
    createdById: "user-1",
    createdByName: "Bendahara Sinode",
    createdAt: new Date().toISOString(),
  },
  {
    id: "tx-3",
    type: "OUT",
    amount: 12000000,
    category: "Diakonia Kesehatan Jemaat",
    description: "Santunan pengobatan rawat inap 3 keluarga prasejahtera",
    transactionDate: new Date(Date.now() - 86400000 * 3).toISOString(),
    accountId: "acc-2",
    createdById: "user-1",
    createdByName: "Bendahara Sinode",
    createdAt: new Date().toISOString(),
  },
  {
    id: "tx-4",
    type: "OUT",
    amount: 25000000,
    category: "Bantuan Pos Misi NTT",
    description: "Dukungan operasional dan pengadaan genset pos perintisan pedalaman NTT",
    transactionDate: new Date(Date.now() - 86400000 * 4).toISOString(),
    accountId: "acc-3",
    createdById: "user-1",
    createdByName: "Bendahara Sinode",
    createdAt: new Date().toISOString(),
  }
];

export async function getFinancialSummary(): Promise<FinancialReportSummary> {
  const accounts = MOCK_ACCOUNTS;
  const transactions = MOCK_TRANSACTIONS;

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((tx) => {
    const amt = Number(tx.amount);
    if (tx.type === "IN") {
      totalIncome += amt;
    } else {
      totalExpense += amt;
    }
  });

  const accountBalances = accounts.map((acc) => ({
    accountId: acc.id,
    accountName: acc.name,
    balance: Number(acc.balance),
  }));

  const netBalance = accounts.reduce((sum, acc) => sum + Number(acc.balance), 0);

  return {
    totalIncome,
    totalExpense,
    netBalance,
    accountBalances,
  };
}

export async function getTransactions(): Promise<FinancialTransaction[]> {
  return MOCK_TRANSACTIONS;
}
