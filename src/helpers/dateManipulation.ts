export const getCurrentDate = () => {
    let date = new Date()

    let day: number = date.getDate();
    let month: number = date.getMonth();
    let year: number = date.getFullYear();

    return formatDate(day, month, year)
}

function formatDate(day: number, month: number, year: number): string {
    let months: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let dateFormated: string = `${day} de ${months[month]} de ${year}`
    return dateFormated
}