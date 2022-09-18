import { Icon } from '../../Icon'

export const TableHeading = ({ columns }: { columns: any[] }) => (
  <thead className="text-white">
    <tr className="bg-slate-100 text-neutral-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
      {columns.map((column) => {
        return (
          <th className="p-3 text-left">
            {column.title}
            {column.sortable && <Icon name="arrow-down" />}
          </th>
        )
      })}
    </tr>
  </thead>
)
