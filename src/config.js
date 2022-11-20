export const user_storage_name = '_TRO_ADMIN_DAT_SSPYRBN__'
export const user_storage_token = '_TRO_ADMIN_DAT_SSPYRBN__TOKEN__'
// export const host = process.env.REACT_APP_LIVE
export const host = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL : process.env.REACT_APP_LIVE

export const dateFormat = (date) => {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()
    return `${day}/${month}/${year}`
}

export const convertToThousand = (value) => {
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0
    return `${Naira}${value}`
}

export const Naira = '₦'
export const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySSYZ8Vr_66g-cqvEwxmn8qA2KRRTrbcAPA&usqp=CAU'