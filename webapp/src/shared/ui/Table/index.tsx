import { TableRoot } from './StyledPrimitives/TableRoot'
import { TableHeading } from './StyledPrimitives/TableHeading'
import { TableBody } from './StyledPrimitives/TableBody'

type TableProps = {
  columns: any[]
  data: Record<string, string>[]
  onRowClick?: (e: any, item: any) => void
  stripped?: boolean
}

export const Table = ({
  columns,
  data,
  onRowClick,
  stripped = false
}: TableProps) => {
  return (
    <div className="container">
      <TableRoot>
        <TableHeading columns={columns} />
        <TableBody
          stripped={stripped}
          columns={columns}
          data={data}
          onRowClick={onRowClick}
        />
      </TableRoot>
    </div>
  )
}

{
  /* <style>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style> */
}
