import React, {ChangeEvent} from "react"
import {PatternFormat} from 'react-number-format'
import { TextField } from '@mui/material'

interface MyPhoneInputProps {
  value: string,
  onChangeInput: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void
}
const PhoneInput = ({value , onChangeInput}: MyPhoneInputProps) => {

  return <PatternFormat
      customInput={TextField}
      label='Phone'
      name='phone'
      sx={{ width: '100%' }}
      variant="outlined"
      helperText={`Please enter your phone number`}
      required={true}
      defaultValue="xxxxxxxxxx"
      format="+## (###) ### ## ##"
      mask="_"
      type="tel"
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInput(e, 'phone')}
      value={value}
    />
}

export default PhoneInput