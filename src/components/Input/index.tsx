import { FC, useState, Dispatch, SetStateAction } from 'react'
import styles from './input.module.scss'
import { ReactComponent as Send } from '../../assets/icons/general/send.svg'
import useInput from '../../hooks/useInput'
import addRow from '../../http'

type Props = {
  setSend: Dispatch<SetStateAction<boolean>>
}

const Input: FC<Props> = ({ setSend }: Props) => {
  const { onChange, onBlur, value, error, isDirty, clear } = useInput('')
  const [reqErr, setReqErr] = useState<string>('')

  const onSubmit = () => {
    if (!error) {
      addRow(value.trim())
        .then(() => {
          setReqErr('')
          setSend(true)
        })
        .catch(err => setReqErr('Something went wrong!'))
        .finally(() => {
          clear()
          const timeout = setTimeout(() => {
            setReqErr('')
            clearTimeout(timeout)
          }, 5000)
        })
    }
  }

  const getError = () => {
    if (isDirty && error) {
      return error
    } else if (reqErr) {
      return reqErr
    }
  }

  return (
    <div className={styles.inputWrap}>
      <div className={styles.customField}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
          autoComplete="on"
          value={value}
          onChange={e => onChange(e)}
          onBlur={e => onBlur(e)}
        />
        <div className={styles.iconContainer}>
          <Send className={styles.inputIcon} onClick={onSubmit} />
        </div>
      </div>
      <p className={styles.errorMsg}>{ getError() }</p>
    </div>
  )
}

export default Input
