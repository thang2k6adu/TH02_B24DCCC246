import { useState } from "react";

interface Props {
  onSubmit: (base: string) => void;
}

export default function ExchangeForm({ onSubmit }: Props) {
  const [base, setBase] = useState("USD");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(base);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <input
        type="text"
        value={base}
        onChange={(e) => setBase(e.target.value.toUpperCase())}
        placeholder="Nhập mã tiền tệ (VD: USD)"
        className="border rounded px-3 py-2 w-40"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Lấy tỉ giá
      </button>
    </form>
  );
}
