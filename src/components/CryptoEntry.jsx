const CryptoEntry = ({ entry }) => {
  const priceChange1hColor =
    entry.priceChange1h < 0 ? "text-red-500" : "text-green-500";
  const priceChange1dColor =
    entry.priceChange1d < 0 ? "text-red-500" : "text-green-500";

  return (
    <tr className={entry.rowBackgroundColor}>
      <td className="flex gap-3 items-center">
        <img className="size-16" src={entry.icon} alt={entry.name} />{" "}
        {entry.name} ({entry.symbol})
      </td>
      <td>{entry.totalSupply}</td>
      <td>{entry.availableSupply}</td>
      <td>{entry.price}</td>
      <td className={priceChange1hColor}>{entry.priceChange1h}</td>
      <td className={priceChange1dColor}>{entry.priceChange1d}</td>
      <td>{entry.marketCap}</td>
    </tr>
  );
};

export default CryptoEntry;
