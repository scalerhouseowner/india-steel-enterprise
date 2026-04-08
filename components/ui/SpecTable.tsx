import React from "react";

interface SpecTableProps {
  specs: Record<string, string>;
}

const SpecTable: React.FC<SpecTableProps> = ({ specs }) => {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="spec-table w-full">
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key}>
              <td className="spec-label">{key}</td>
              <td className="spec-value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
