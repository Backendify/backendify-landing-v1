import { useState, useEffect } from 'react'

type UseInputRes = {
  value: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  isDirty: boolean;
  error: string;
  clear: () => void;
}

const useInput = (initialValue: string): UseInputRes => {
  const [value, setValue] = useState<string>(initialValue)
  const [isDirty, setDirty] = useState<boolean>(false)
  const [ error, setError ] = useState<string>('')

  const onChange = (e: any) => setValue(e.target.value)

  useEffect(() => {
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? setError('') : setError('The field must be email')
  }, [value])

  const onBlur = (e: any) => setDirty(true)

  const clear = (): void => {
    setError('')
    setValue('')
    setDirty(false)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    error,
    clear,
  }
}

export default useInput
