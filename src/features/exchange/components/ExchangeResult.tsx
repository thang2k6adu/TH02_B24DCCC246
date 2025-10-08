interface Props {
  base: string;
  rates: Record<string, number>;
  amount: number;
}

export default function ExchangeResult({ base, rates, amount }: Props) {
  const entries = Object.entries(rates).slice(0, 10); // chỉ hiển thị top 10
  return (
    <div>
      <h2 className="font-semibold mb-2">
        {amount.toLocaleString()} {base} tương đương:
      </h2>
      <ul className="grid sm:grid-cols-2 gap-2">
        {entries.map(([code, rate]) => (
          <li
            key={code}
            className="border rounded p-2 shadow-sm flex justify-between"
          >
            <span>{code}</span>
            <span>{(amount * rate).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
