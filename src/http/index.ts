import axios from 'axios'

type Res = {
  status: number;
}

const URL = process.env.REACT_APP_SHEET_CONNECTION_ID || ''

interface IData {
  email: string;
  firstName: string;
  company: string;
}

const addRow = async (data: IData): Promise<Res> => {
  return await axios.post(
    URL,
    {
      "Email": data.email,
      "Name": data.firstName,
      "Company": data.company
    }
  )
}

export default addRow
