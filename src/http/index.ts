import axios from 'axios'

type Res = {
  status: number;
}

const URL = process.env.REACT_APP_SHEET_CONNECTION_ID || ''

const addRow = async (value: string): Promise<Res> => {
  return await axios.post(
    URL,
    {
      "Email": value
    }
  )
}

export default addRow
