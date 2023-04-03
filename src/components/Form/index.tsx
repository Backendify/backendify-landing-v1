import { FC, useState } from 'react'
import styles from './form.module.scss'
import { Form as FinalForm, Field } from 'react-final-form'
import addRow from '../../http'

type Props = {
  setSend: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: FC<Props> = ({ setSend }: Props) => {
  const [reqErr, setReqErr] = useState<string>('')

  const onSubmit = (value: any) => {
    setSend(false)
    addRow(value)
      .then(() => {
        setReqErr('')
        setSend(true)
      })
      .catch(err => setReqErr('Something went wrong!'))
      .finally(() => {
        const timeout = setTimeout(() => {
          setReqErr('')
          clearTimeout(timeout)
        }, 5000)
      })
  }
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={values => {
        const errors: any = {}
        if (!values.firstName) {
          errors.firstName = 'required'
        }
        if (!values.email) {
          errors.email = 'required'
        }
        if (!regex.test(values.email)) {
          errors.email = 'the field must be email'
        }
        return errors
      }}
      render={({ handleSubmit, submitting, pristine, form, hasValidationErrors }) => (
        <form onSubmit={(values) => {
          handleSubmit(values)
          form.reset()
          form.restart()
        }} className={styles.form}>
          <Field name="firstName">
            {({ input, meta }) => (
              <div className={styles.inputWrap}>
                <div className={styles.fieldWrap}>
                  <input {...input} placeholder="First Name" className={styles.field} />
                </div>
                <p className={styles.errorMsg}>{(meta.error && meta.touched) && meta.error}</p>
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div className={styles.inputWrap}>
                <div className={styles.fieldWrap}>
                  <input {...input} placeholder="Email" className={styles.field} />
                </div>
                <p className={styles.errorMsg}>{(meta.error && meta.touched) && meta.error}</p>
              </div>
            )}
          </Field>
          <Field name="company">
            {({ input, meta }) => (
              <div className={styles.inputWrap}>
                <div className={styles.fieldWrap}>
                  <input {...input} placeholder="Company (optional)" className={styles.field} />
                </div>
                <p className={styles.errorMsg}>{(meta.error && meta.touched) && meta.error}</p>
              </div>
            )}
          </Field>
          <p>{reqErr}</p>
          <button
            type="submit"
            className={styles.button}
            disabled={submitting || pristine || hasValidationErrors}
          >
            Submit
          </button>
        </form>
      )}
    />
  )
}

export default Form
