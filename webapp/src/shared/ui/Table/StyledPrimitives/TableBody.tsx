import classnames from 'classnames'

export const TableBody = ({ stripped, data, columns, onRowClick }) => {
  return (
    <tbody className="flex-1 sm:flex-none">
      {data.map((item, idx) => (
        <tr
          key={`${idx}-${item.name}`}
          onClick={(e) => onRowClick(e, item.id)}
          className={
            classnames(
              stripped && "even:bg-slate-50 odd:bg-white",
              "border-slate-400 border-b flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
            )
          }
  
          >
          {columns.map((column, i) => (
            <td key={`${idx}-${i}-${column.name}`} className="hover:bg-gray-100 p-3">
              {item[column.itemField]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
