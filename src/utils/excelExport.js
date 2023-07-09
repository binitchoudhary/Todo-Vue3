import * as XLSX from 'xlsx';


export function performExportToExcel(data) {
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  saveAsExcelFile(excelBuffer, 'todos.xlsx')
}

function saveAsExcelFile(buffer, fileName) {
  const data = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  const downloadLink = document.createElement('a')
  downloadLink.href = window.URL.createObjectURL(data)
  downloadLink.download = fileName
  downloadLink.click()
}
